interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EmailTemplate {
  subject: string;
  body: string;
}

export const createEmailTemplate = (formData: ContactFormData): EmailTemplate => {
  const subject = `${formData.name} reached out through your website`;
  
  const body = `Hey team,

${formData.name} just tried contacting you through the website. Here are their details:

Email: ${formData.email}

Message:
${formData.message}

Cheers,
Your Website`;

  return { subject, body };
};

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // Get Supabase URL and anon key from environment
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    // Call the Supabase Edge Function (using simple version for now)
    const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email-simple`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Alternative: If you want to use a service like EmailJS, Formspree, or Netlify Forms
export const sendContactEmailViaService = async (formData: ContactFormData): Promise<void> => {
  // This is a placeholder for integrating with email services
  // You can replace this with your preferred email service
  
  try {
    // Example with fetch to a backend endpoint
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
