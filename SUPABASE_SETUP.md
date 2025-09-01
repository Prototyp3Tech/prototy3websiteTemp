# Supabase Setup Guide for Prototyp3

This guide will help you connect your Prototyp3 landing page with Supabase to enable real-time data and user management.

## Prerequisites

- A Supabase account (free tier available)
- Node.js and npm installed
- Basic knowledge of React and TypeScript

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `prototyp3-landing`
   - Database Password: Choose a strong password
   - Region: Select closest to your users
5. Click "Create new project"
6. Wait for the project to be created (usually 1-2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **Anon public key** (starts with `eyJ...`)

## Step 3: Set Up Environment Variables

1. Create a `.env` file in your project root:
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

2. Replace the placeholder values with your actual Supabase credentials

3. **Important**: Add `.env` to your `.gitignore` file to keep your keys secure

## Step 4: Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the entire content from `supabase-schema.sql`
3. Paste it into the SQL Editor and click "Run"
4. This will create all necessary tables, policies, and sample data

## Step 5: Install Dependencies

The Supabase client is already installed. If you need to reinstall:

```bash
npm install @supabase/supabase-js
```

## Step 6: Test the Connection

1. Start your development server:
```bash
npm run dev
```

2. Open your browser and check the console for any errors
3. The landing page should now display data from Supabase instead of hardcoded content

## Database Schema Overview

### Tables Created:

- **`users`**: Team member information
- **`projects`**: Showcase projects with categories and tags
- **`leaderboard`**: User scores and rankings
- **`sponsors`**: Sponsor information with tier system

### Features:

- **Row Level Security (RLS)**: Secure data access
- **Real-time subscriptions**: Live updates (can be enabled later)
- **Optimized indexes**: Fast queries
- **Sample data**: Ready-to-use content

## Customization

### Adding New Data

You can add new data through:
1. **Supabase Dashboard**: Use the Table Editor
2. **SQL**: Run INSERT statements
3. **API**: Use the Supabase client in your code

### Example: Adding a New Project

```sql
INSERT INTO public.projects (title, description, category, tags, user_id) 
VALUES (
    'New Project Name',
    'Project description here',
    'Web Application',
    ARRAY['React', 'TypeScript'],
    'user-uuid-here'
);
```

### Example: Adding a New User

```sql
INSERT INTO public.users (email, full_name, avatar_url) 
VALUES (
    'newuser@example.com',
    'New User Name',
    'https://example.com/avatar.jpg'
);
```

## Security Features

- **Public Read Access**: All data is publicly readable
- **Authenticated Write Access**: Users can only modify their own data
- **Row Level Security**: Database-level access control
- **JWT Authentication**: Secure user sessions (when implemented)

## Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables"**
   - Check your `.env` file exists and has correct values
   - Restart your dev server after adding environment variables

2. **"Network Error"**
   - Verify your Supabase URL is correct
   - Check if your project is paused (free tier limitation)

3. **"Permission denied"**
   - Ensure RLS policies are set up correctly
   - Check if you're authenticated for write operations

4. **"Table doesn't exist"**
   - Run the SQL schema file in Supabase SQL Editor
   - Check table names match exactly

### Debug Mode:

Add this to your component to see what's happening:

```typescript
const { users, loading, error } = useUsers();
console.log('Users:', users, 'Loading:', loading, 'Error:', error);
```

## Next Steps

Once basic functionality is working, consider:

1. **Authentication**: Add user login/signup
2. **Real-time**: Enable live updates with subscriptions
3. **File Storage**: Use Supabase Storage for images
4. **Edge Functions**: Add serverless API endpoints
5. **Analytics**: Track user interactions

## Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Discord Community**: [discord.supabase.com](https://discord.supabase.com)
- **GitHub Issues**: Report bugs in your project repository

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://abc123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Public anon key for client access | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

**Note**: Never commit your `.env` file to version control!
