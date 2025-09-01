# HeroSection Component Usage

## Basic Usage (with placeholder)

```tsx
import HeroSection from '../components/HeroSection';

// This will show the placeholder illustration
<HeroSection />
```

## With Custom Illustration

```tsx
import HeroSection from '../components/HeroSection';

// Replace the placeholder with your custom illustration
<HeroSection 
  illustrationSrc="/path/to/your/illustration.png"
  illustrationAlt="Custom Prototyp3 platform illustration"
/>
```

## Props

- `illustrationSrc` (optional): Path to your custom illustration image
- `illustrationAlt` (optional): Alt text for the illustration (defaults to "Prototyp3 platform illustration")

## Illustration Requirements

The illustration should be:
- High resolution (recommended: 800x800px or larger)
- PNG or SVG format for best quality
- Designed to work on a teal background (#0d9488)
- Centered and balanced for the circular placeholder area

## Current Placeholder

The current placeholder shows:
- A rocket emoji (🚀)
- "Illustration Placeholder" text
- "Replace with your illustration" subtext
- White circular background with shadow

## Styling (Tailwind CSS)

The hero section uses Tailwind CSS classes:
- **Background**: `bg-teal-600` (teal background)
- **Content Card**: `bg-gray-50` (light gray), `shadow-2xl` (shadow)
- **CTA Button**: `bg-blue-700` (dark blue), `hover:bg-blue-600` (hover state)
- **Orange Brace**: `text-orange-500` (orange opening brace)
- **Typography**: Responsive text sizes (`text-3xl md:text-4xl lg:text-5xl`)
- **Floating Tech Annotations**: Hidden on mobile (`hidden md:block`)

## Responsive Design

- **Desktop**: Two-column layout with content on left, illustration on right
- **Mobile**: Single-column layout with stacked content
- **Tech annotations**: Hidden on mobile for better UX (`hidden md:block`)
- **Illustration size**: Responsive sizing (`w-64 h-64 md:w-96 md:h-96`)
- **Padding**: Responsive padding (`p-6 md:p-12`)
- **Text sizes**: Responsive typography throughout

## Key Tailwind Classes Used

- **Layout**: `grid`, `flex`, `max-w-6xl`, `gap-10 lg:gap-20`
- **Spacing**: `py-12 md:py-20`, `px-5`, `mb-6`, `mb-8`
- **Colors**: `bg-teal-600`, `bg-gray-50`, `text-gray-700`, `text-orange-500`
- **Shadows**: `shadow-2xl`, `shadow-lg`
- **Responsive**: `md:`, `lg:` prefixes for breakpoint-specific styles
- **Transitions**: `transition-all duration-300`, `hover:-translate-y-0.5`
