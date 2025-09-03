import { createEmailTemplate } from '../emailService';

describe('Email Service', () => {
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
});
