import { createEmailTemplate } from '../emailService';

// Mock environment variables
const mockEnv = {
  VITE_SUPABASE_URL: 'https://test.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'test-anon-key'
};

// Mock fetch
global.fetch = jest.fn();

describe('Email Service', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock environment variables
    Object.defineProperty(import.meta, 'env', {
      value: mockEnv,
      writable: true
    });
  });

  test('creates correct email template', () => {
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to learn more about your program.'
    };

    const template = createEmailTemplate(formData);

    expect(template.subject).toBe('John Doe reached out through your website');
    expect(template.body).toContain('Hey team,');
    expect(template.body).toContain('John Doe just tried contacting you through the website');
    expect(template.body).toContain('Email: john@example.com');
    expect(template.body).toContain('Hello, I would like to learn more about your program.');
    expect(template.body).toContain('Cheers,\nYour Website');
  });

  test('handles special characters in form data', () => {
    const formData = {
      name: 'José María',
      email: 'jose@example.com',
      message: '¡Hola! ¿Cómo están?'
    };

    const template = createEmailTemplate(formData);

    expect(template.subject).toBe('José María reached out through your website');
    expect(template.body).toContain('José María just tried contacting you through the website');
    expect(template.body).toContain('¡Hola! ¿Cómo están?');
  });

  test('sendContactEmail calls Supabase Edge Function', async () => {
    const { sendContactEmail } = await import('../emailService');
    
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ success: true, message: 'Email sent' })
    };
    
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message'
    };

    await sendContactEmail(formData);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://test.supabase.co/functions/v1/send-contact-email-simple',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-anon-key',
        },
        body: JSON.stringify(formData),
      }
    );
  });

  test('sendContactEmail throws error when Supabase env vars are missing', async () => {
    // Mock missing environment variables
    Object.defineProperty(import.meta, 'env', {
      value: {},
      writable: true
    });

    const { sendContactEmail } = await import('../emailService');
    
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message'
    };

    await expect(sendContactEmail(formData)).rejects.toThrow('Missing Supabase environment variables');
  });
});
