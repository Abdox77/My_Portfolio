yarn dev
# MOHDI Abdessamad — Portfolio

Responsive personal portfolio built with **Next.js 14**, **React 18**, **TypeScript**, and **CSS Modules**. The site highlights projects, experience, and contact information with light and dark themes and localized content (English/French).

## Preview


![Preview](./public/portfolio.png)

## Features

- App Router architecture with shared providers and theme toggling
- Light/dark mode with smooth transitions and custom CSS variables
- Multilingual content handled through a `LanguageContext` (English ↔ French)
- Projects, experience, and education fed by structured translation data
- Contact form powered by a Next.js API route and Nodemailer
- Responsive layout with accessible navigation and mobile menu

## Tech Stack

- Next.js 14
- React 18 with TypeScript
- CSS Modules and custom design tokens
- Nodemailer (serverless mail delivery)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (bundled with Node) or your preferred package manager

### Installation

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment Variables

Create a `.env.local` file (see `.env.example`) with:

```dotenv
SMTP_HOST=your-smtp-host
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-smtp-username
SMTP_PASS=your-app-password
CONTACT_FROM_EMAIL=sender@yourdomain.com
CONTACT_TO_EMAIL=you@yourdomain.com
```

These values configure `/api/contact` so form submissions send email via Nodemailer.

## Scripts

| Script        | Description                    |
| ------------- | ------------------------------ |
| `npm run dev` | Start the development server   |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build    |
| `npm run lint` | Run Next.js ESLint checks      |

## Project Structure

```text
My_Portfolio/
├── app/
│   ├── globals.css        # Global theme tokens and base styles
│   ├── layout.tsx         # Root layout with providers and metadata
│   ├── page.tsx           # Landing page composition
│   └── providers.tsx      # Theme and language providers wrapper
├── components/
│   ├── Navbar.tsx         # Navigation, language selector, theme toggle
│   ├── Hero.tsx           # Intro section with type animation
│   ├── About.tsx          # Bio, skills, experience, education timelines
│   ├── Projects.tsx       # Project grid with optional links
│   ├── Contact.tsx        # Contact form wired to /api/contact
│   ├── Footer.tsx         # Footer and social links
│   └── ui/                # Shared UI utilities (color mode hook)
├── contexts/
│   ├── LanguageContext.tsx # Translation management
│   └── ThemeContext.tsx    # Theme state (used by UI hook)
├── public/                # Static assets (project images, logo, resume)
└── app/api/contact/       # Serverless mail endpoint
```

## Customization Guide

- **Hero (`components/Hero.tsx`)** — Update greeting, animation strings, and call-to-action URLs.
- **About (`components/About.tsx`)** — Edit biography, skill tags, and translation data for experience/education in `contexts/LanguageContext.tsx`.
- **Projects (`components/Projects.tsx`)** — Manage the project list (titles, descriptions, tags, and links) through the language context.
- **Contact (`components/Contact.tsx`)** — Adjust introductory copy in the context and ensure SMTP variables are set so the form can send mail.
- **Branding** — Replace `public/logo.svg`, `public/resume.pdf`, and any project imagery with your own assets.

## Deployment

1. Commit and push to GitHub.
2. Create a project on Vercel and import the repository.
3. Configure the environment variables above in the Vercel dashboard.
4. Deploy — Vercel will build and host the site automatically.

## License

Distributed under the MIT License. See the `LICENSE` file for details.

## Contact

- Email: `mohdia08@gmail.com`
- GitHub: [@Abdox77](https://github.com/Abdox77)
- LinkedIn: [MOHDI Abdessamad](https://www.linkedin.com/in/abdessamad-mohdi-90a439244/)

