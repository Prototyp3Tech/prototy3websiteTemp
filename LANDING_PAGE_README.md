# Prototyp3 Landing Page

A modern, responsive landing page built with React, TypeScript, and Supabase for real-time data management.

## Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern UI**: Clean, professional design with gradients and shadows
- **Interactive Elements**: Hover effects and smooth transitions
- **TypeScript**: Full TypeScript support for type safety
- **CSS Grid & Flexbox**: Modern CSS layout techniques
- **Google Fonts**: Inter font family for excellent readability
- **Supabase Integration**: Real-time database with authentication ready

## Structure

The landing page consists of the following components:

### 1. HeroSection
- Eye-catching hero section with gradient background
- Call-to-action buttons
- Visual placeholder with emoji

### 2. LeaderBoardSection
- Displays top performers with rankings from Supabase
- Interactive leaderboard items
- Gold, silver, bronze ranking colors

### 3. AboutSection
- Company/project description
- Key statistics and metrics
- Visual element with gradient background

### 4. TeamSection
- Team member profiles with avatars from Supabase
- Social media links
- Call-to-action for job opportunities

### 5. ShowcaseSection
- Featured projects showcase from Supabase
- Project categories and tags
- Interactive project cards

### 6. DiscordSection
- Community engagement section
- Discord server preview
- Community features and statistics

### 7. SponsorsSection
- Sponsor showcase with tier system from Supabase
- Platinum, Gold, and Silver sponsor levels
- Sponsorship information and contact

## Supabase Integration

This project is fully integrated with Supabase for:
- **Real-time data**: Live updates from the database
- **User management**: Team member profiles and authentication
- **Content management**: Projects, sponsors, and leaderboard data
- **Scalability**: Production-ready backend infrastructure

### Database Tables
- `users` - Team member information
- `projects` - Showcase projects with categories
- `leaderboard` - User scores and rankings
- `sponsors` - Sponsor information with tiers

## File Structure

```
src/
├── components/
│   ├── HeroSection.tsx
│   ├── LeaderBoardSection.tsx
│   ├── AboutSection.tsx
│   ├── TeamSection.tsx
│   ├── ShowcaseSection.tsx
│   ├── DiscordSection.tsx
│   ├── SponsorsSection.tsx
│   └── Landing.css
├── hooks/
│   └── useSupabase.ts
├── lib/
│   └── supabase.ts
├── pages/
│   └── Landing.tsx
└── App.tsx

# Configuration Files
├── .env (create this with your Supabase credentials)
├── env.example
├── supabase-schema.sql
└── SUPABASE_SETUP.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- Supabase account (free tier available)

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Supabase (see `SUPABASE_SETUP.md`)
4. Create `.env` file with your Supabase credentials
5. Start development server: `npm run dev`

### Supabase Setup
1. Follow the comprehensive guide in `SUPABASE_SETUP.md`
2. Run the SQL schema in `supabase-schema.sql`
3. Configure environment variables
4. Test the connection

## Customization

Each component can be easily customized by:
- Modifying the data arrays in each component
- Updating the CSS variables in `Landing.css`
- Changing colors, fonts, and spacing
- Adding new sections or modifying existing ones
- Managing content through Supabase dashboard

### Data Management
- **Supabase Dashboard**: Use the Table Editor for easy content updates
- **SQL**: Run custom queries for advanced operations
- **API**: Programmatically manage data through the Supabase client

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Responsive design for mobile, tablet, and desktop
- Progressive enhancement approach

## Next Steps

Once the basic landing page is working, consider:
1. **Authentication**: Add user login/signup functionality
2. **Real-time**: Enable live updates with Supabase subscriptions
3. **File Storage**: Use Supabase Storage for image uploads
4. **Edge Functions**: Add serverless API endpoints
5. **Analytics**: Track user interactions and performance

## Support

- **Supabase Setup**: See `SUPABASE_SETUP.md` for detailed instructions
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **React Docs**: [react.dev](https://react.dev)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
