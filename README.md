# RTistic - Paper Craft Gifting Agency

A beautiful, modern portfolio website for RTistic, a premium paper craft gifting agency specializing in handmade creations for special occasions.

## Features

- 🎨 **Beautiful Design**: Modern, elegant design with custom color palette
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🔍 **SEO Optimized**: Comprehensive SEO for Indian clients
- 🎭 **Animations**: Smooth animations with Framer Motion
- 🎯 **Accessibility**: WCAG compliant design
- 🌐 **Social Integration**: Connected to Instagram, Facebook, Pinterest, WhatsApp

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: Next SEO
- **Deployment**: Vercel

## Color Palette

The website uses a carefully crafted color palette:

- **Primary**: Deep Plum (#2C0F24), Ivory White (#F5F2EB)
- **Accent**: Gold Start (#C5A14E), Gold End (#E9D8A6), Dusty Rose (#C68FA8), Muted Sage (#9BAA97)
- **Neutrals**: Warm Gray (#BFB8B0), Charcoal Black (#1A1A1A)

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About Section**: Company story and features
3. **Portfolio Section**: Interactive gallery with filtering
4. **Services Section**: Detailed service offerings and process
5. **Contact Section**: Contact form and social media links
6. **Footer**: Additional links and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (local or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rtistic
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rtistic?retryWrites=true&w=majority
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### MongoDB Setup

#### Option 1: MongoDB Atlas (Recommended for Production)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Add it to your `.env.local` file

#### Option 2: Local MongoDB (For Development)
1. Install MongoDB locally
2. Use connection string: `mongodb://localhost:27017/rtistic`
3. Add it to your `.env.local` file

## Deployment

The project is configured for easy deployment on Vercel:

1. Set up MongoDB Atlas database
2. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
3. Connect your GitHub repository to Vercel
4. The project will automatically deploy with the configured settings
5. Custom domain can be added in Vercel dashboard

### Environment Variables for Vercel

In your Vercel dashboard, add these environment variables:
- `MONGODB_URI`: Your MongoDB Atlas connection string

## SEO Features

- Structured data for local business
- Open Graph meta tags
- Twitter Card support
- Sitemap generation
- Optimized images with WebP format
- Fast loading times

## Customization

### Colors
Update colors in `tailwind.config.ts` and `src/app/globals.css`

### Content
- Update company information in components
- Replace images in `public/images/`
- Modify social media links in components

### SEO
Update meta information in `src/app/layout.tsx`

## Contact Information

- **Email**: hello@rtistic.com
- **Phone**: +91 98765 43210
- **Location**: Mumbai, Maharashtra, India

## Social Media

- **Instagram**: @rtistic
- **Facebook**: RTistic
- **Pinterest**: RTistic
- **WhatsApp**: +91 98765 43210

## License

This project is proprietary to RTistic. All rights reserved.

## Support

For support or questions, please contact hello@rtistic.com
