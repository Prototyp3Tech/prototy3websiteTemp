-- Prototyp3 Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-here';

-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    image_url TEXT,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leaderboard table
CREATE TABLE IF NOT EXISTS public.leaderboard (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score >= 0),
    category TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sponsors table
CREATE TABLE IF NOT EXISTS public.sponsors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    tier TEXT NOT NULL CHECK (tier IN ('platinum', 'gold', 'silver')),
    logo_url TEXT,
    description TEXT NOT NULL,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);
CREATE INDEX IF NOT EXISTS idx_leaderboard_user_id ON public.leaderboard(user_id);
CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON public.leaderboard(score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_category ON public.leaderboard(category);
CREATE INDEX IF NOT EXISTS idx_sponsors_tier ON public.sponsors(tier);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Users are viewable by everyone" ON public.users
    FOR SELECT USING (true);

CREATE POLICY "Projects are viewable by everyone" ON public.projects
    FOR SELECT USING (true);

CREATE POLICY "Leaderboard is viewable by everyone" ON public.leaderboard
    FOR SELECT USING (true);

CREATE POLICY "Sponsors are viewable by everyone" ON public.sponsors
    FOR SELECT USING (true);

-- Create policies for authenticated users to insert/update their own data
CREATE POLICY "Users can insert their own data" ON public.users
    FOR INSERT WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own data" ON public.users
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Users can insert their own projects" ON public.projects
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own projects" ON public.projects
    FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own scores" ON public.leaderboard
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Insert sample data
INSERT INTO public.users (email, full_name, avatar_url) VALUES
    ('alex.chen@prototyp3.com', 'Alex Chen', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'),
    ('sarah.kim@prototyp3.com', 'Sarah Kim', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'),
    ('mike.johnson@prototyp3.com', 'Mike Johnson', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'),
    ('emma.davis@prototyp3.com', 'Emma Davis', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face')
ON CONFLICT (email) DO NOTHING;

INSERT INTO public.projects (title, description, category, tags, image_url, user_id) VALUES
    ('AI-Powered Analytics Dashboard', 'Real-time data visualization with machine learning insights', 'Web Application', ARRAY['React', 'AI', 'Analytics'], 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', (SELECT id FROM public.users WHERE email = 'alex.chen@prototyp3.com')),
    ('Mobile Fitness Tracker', 'Comprehensive health monitoring with social features', 'Mobile App', ARRAY['React Native', 'Health', 'Social'], 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop', (SELECT id FROM public.users WHERE email = 'sarah.kim@prototyp3.com')),
    ('E-commerce Platform', 'Scalable online marketplace with advanced search', 'Web Application', ARRAY['Next.js', 'E-commerce', 'Search'], 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop', (SELECT id FROM public.users WHERE email = 'mike.johnson@prototyp3.com'))
ON CONFLICT DO NOTHING;

INSERT INTO public.leaderboard (user_id, score, category) VALUES
    ((SELECT id FROM public.users WHERE email = 'alex.chen@prototyp3.com'), 9850, 'Innovation'),
    ((SELECT id FROM public.users WHERE email = 'sarah.kim@prototyp3.com'), 9420, 'Design'),
    ((SELECT id FROM public.users WHERE email = 'mike.johnson@prototyp3.com'), 9180, 'Development'),
    ((SELECT id FROM public.users WHERE email = 'emma.davis@prototyp3.com'), 8950, 'Strategy')
ON CONFLICT DO NOTHING;

INSERT INTO public.sponsors (name, tier, logo_url, description, website_url) VALUES
    ('TechCorp', 'platinum', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop', 'Leading technology solutions provider', 'https://techcorp.example.com'),
    ('InnovateLab', 'gold', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop', 'Research and development partner', 'https://innovatelab.example.com'),
    ('StartupHub', 'gold', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop', 'Startup accelerator and incubator', 'https://startuphub.example.com'),
    ('CloudTech', 'silver', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop', 'Cloud infrastructure solutions', 'https://cloudtech.example.com'),
    ('DesignStudio', 'silver', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=80&h=80&fit=crop', 'Creative design and branding', 'https://designstudio.example.com'),
    ('DataFlow', 'silver', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop', 'Data analytics and insights', 'https://dataflow.example.com')
ON CONFLICT DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
