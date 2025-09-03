@echo off
echo 🚀 Deploying Contact Form Supabase Functions...

REM Check if supabase CLI is installed
where supabase >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Supabase CLI is not installed. Please install it first:
    echo    npm install -g supabase
    pause
    exit /b 1
)

REM Check if we're in a Supabase project
if not exist "supabase\config.toml" (
    echo ❌ Not in a Supabase project directory. Please run this from your project root.
    pause
    exit /b 1
)

echo 📦 Deploying database migration...
supabase db push

echo 🔧 Deploying simple contact form function...
supabase functions deploy send-contact-email-simple

echo ✅ Deployment complete!
echo.
echo 📋 Next steps:
echo 1. Test the contact form on your website
echo 2. Check the Supabase dashboard to see contact submissions
echo 3. (Optional) Set up email sending with Resend API:
echo    supabase secrets set RESEND_API_KEY=your_api_key
echo    supabase functions deploy send-contact-email
echo.
echo 🔗 Your function URL:
echo    https://your-project.supabase.co/functions/v1/send-contact-email-simple

pause
