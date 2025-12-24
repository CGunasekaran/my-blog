# 🚀 Gunasekaran's Dev Blog

A modern, full-featured blog and portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a stunning gradient design system, project showcases, and blog functionality.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Modern Design
- **Unique gradient color schemes** - Each card has its own stunning gradient
- **Smooth animations** - Hover effects, transitions, and micro-interactions
- **Responsive design** - Perfect on mobile, tablet, and desktop
- **Dark mode ready** - Built with modern best practices

### 📝 Blog System
- **MDX support** - Write blog posts with Markdown + React components
- **Tag-based filtering** - Browse posts by topics
- **Reading time estimation** - Automatic calculation
- **Social sharing** - Easy to share content

### 💼 Portfolio Showcase
- **10+ live projects** - Showcase your work with live demos
- **Category organization** - Projects grouped by type
- **Technology tags** - Display tech stack for each project
- **External links** - Direct links to live demos and GitHub repos

### 🔧 Developer Features
- **TypeScript** - Full type safety
- **ESLint** - Code quality and consistency
- **API Routes** - Built-in backend functionality
- **Image optimization** - Next.js Image component with remote patterns
- **SEO optimized** - Meta tags and structured data

## 🚀 Live Demo

Visit the live site: [Coming Soon]

## 📸 Screenshots

### Home Page
Modern landing page with profile section and featured projects

### Blog Page
Browse articles with gradient-styled cards and topic filtering

### Projects Page
Showcase of all projects with category organization

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX, Gray Matter
- **Icons:** Lucide React
- **Animations:** Tailwind CSS
- **Web Scraping:** Cheerio, Axios (for project metadata)
- **Date Handling:** date-fns

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/CGunasekaran/my-blog.git

# Navigate to the project directory
cd my-blog

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
dev-blog/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── api/                 # API routes
│   ├── blog/                # Blog pages
│   └── projects/            # Projects page
├── components/              # React components
│   ├── AppShowcase.tsx      # Project card component
│   ├── BlogCard.tsx         # Blog post card
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   └── ProfileSection.tsx   # Profile display
├── content/                 # MDX blog posts
│   └── blog/
├── data/                    # Static data
│   ├── apps.ts              # Project data
│   └── profile.ts           # Profile information
├── lib/                     # Utility functions
│   ├── blog.ts              # Blog post helpers
│   ├── constants.ts         # Site constants
│   └── scraper.ts           # Web scraping utilities
├── types/                   # TypeScript definitions
└── public/                  # Static assets
```

## 🎨 Color Palette

The site uses a dynamic gradient system with 10 unique color combinations:
- Blue → Cyan
- Purple → Pink
- Orange → Red
- Green → Emerald
- Indigo → Blue
- Rose → Pink
- Amber → Yellow
- Teal → Cyan
- Violet → Purple
- Fuchsia → Pink

## 📝 Adding Content

### Add a New Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
publishedAt: "2025-12-24"
tags: ["Next.js", "TypeScript"]
featured: true
coverImage: "https://images.unsplash.com/photo-xxxxx"
author:
  name: "Gunasekaran"
  avatar: "/profile.jpg"
---

# Your Content Here

Write your post content using Markdown...
```

2. The post will automatically appear on the blog page

### Add a New Project

Edit `data/apps.ts` and add your project:

```typescript
{
  id: 'your-project',
  name: 'Project Name',
  description: 'Project description',
  url: 'https://your-project.com',
  category: 'Category',
  technologies: ['Next.js', 'React'],
  status: 'live',
  featured: true,
  createdAt: '2025-12-24',
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CGunasekaran/my-blog)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Add any environment variables here
```

### Next.js Config

Image domains are configured in `next.config.ts` for external images.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👨‍💻 Author

**Gunasekaran**
- GitHub: [@CGunasekaran](https://github.com/CGunasekaran)
- LinkedIn: [gunasekaran-chinraj](https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/)
- Portfolio: [gunasekaran-portfolio.vercel.app](https://gunasekaran-portfolio.vercel.app/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ Star this repo if you find it useful!

