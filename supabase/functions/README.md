# Supabase Edge Functions for Contact Form

This directory contains Supabase Edge Functions for handling contact form submissions.

## Functions

### 1. `send-contact-email-simple`
A simple version that stores contact form submissions in the database without sending emails.

### 2. `send-contact-email`
A full version that stores submissions and sends emails using Resend API.

## Setup Instructions

### 1. Deploy the Edge Functions

```bash
# Deploy the simple version (recommended for testing)
supabase functions deploy send-contact-email-simple

# Deploy the full version (requires Resend API key)
supabase functions deploy send-contact-email
```

### 2. Run Database Migration

```bash
# Apply the migration to create the contact_submissions table
supabase db push
```

### 3. Environment Variables (for full version)

If you want to use the full email sending version, set up these environment variables:

```bash
# Set Resend API key
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### 4. Test the Function

```bash
# Test the function locally
supabase functions serve send-contact-email-simple

# Test with curl
curl -X POST 'http://localhost:54321/functions/v1/send-contact-email-simple' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message."
  }'
```

## Email Service Setup (Optional)

To enable actual email sending, you can:

1. **Use Resend** (recommended):
   - Sign up at [resend.com](https://resend.com)
   - Get your API key
   - Set the `RESEND_API_KEY` secret
   - Update the function to use `send-contact-email`

2. **Use other email services**:
   - Modify the function to use SendGrid, Mailgun, or another service
   - Update the environment variables accordingly

3. **Use Supabase Auth email templates**:
   - Configure email templates in your Supabase dashboard
   - Use Supabase's built-in email functionality

## Database Schema

The `contact_submissions` table stores:
- `id`: UUID primary key
- `name`: Contact person's name
- `email`: Contact person's email
- `message`: Contact message
- `created_at`: Timestamp of submission

## Security

- The function uses Row Level Security (RLS)
- Public users can insert contact submissions
- Only authenticated users can read submissions
- CORS is properly configured for web requests
