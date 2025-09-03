#!/bin/bash

# Deploy Contact Form Supabase Functions
echo "🚀 Deploying Contact Form Supabase Functions..."

# Check if supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI is not installed. Please install it first:"
    echo "   npm install -g supabase"
    exit 1
fi

# Check if we're in a Supabase project
if [ ! -f "supabase/config.toml" ]; then
    echo "❌ Not in a Supabase project directory. Please run this from your project root."
    exit 1
fi

echo "📦 Deploying database migration..."
supabase db push

echo "🔧 Deploying simple contact form function..."
supabase functions deploy send-contact-email-simple

echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Test the contact form on your website"
echo "2. Check the Supabase dashboard to see contact submissions"
echo "3. (Optional) Set up email sending with Resend API:"
echo "   supabase secrets set RESEND_API_KEY=your_api_key"
echo "   supabase functions deploy send-contact-email"
echo ""
echo "🔗 Your function URL:"
echo "   https://your-project.supabase.co/functions/v1/send-contact-email-simple"
