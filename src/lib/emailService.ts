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
  const { subject, body } = createEmailTemplate(formData);
  
  // Create mailto link with the email content
  const mailtoLink = `mailto:prototyp3.org@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open the user's default email client
  window.open(mailtoLink, '_blank');
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
