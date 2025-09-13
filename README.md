# Miguel Guarrochena - Portfolio Website

A modern, responsive portfolio website built with Next.js, Mantine UI, and Framer Motion.

## Features

- ✅ **Modern Tech Stack**: Next.js 14 (App Router), Mantine UI, TypeScript, Zustand, Framer Motion
- ✅ **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- ✅ **Dark/Light Mode**: Complete theme toggle with persistent storage
- ✅ **Internationalization**: English and Spanish language support
- ✅ **Smooth Animations**: Subtle Framer Motion animations throughout
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Production Ready**: Configured for static export and Vercel deployment

## Sections

- **Hero**: Name, role, professional photo, and tagline
- **About**: Professional summary and background
- **Skills**: Technical skills (React, Next.js, TypeScript, etc.) and soft skills
- **Experience**: Timeline of work experience with detailed descriptions
- **Contact**: Email, phone, LinkedIn with copy-to-clipboard functionality
- **CV Download**: Direct PDF download of resume

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your assets to the `/public` folder:
   - `photo.png` - Your professional photo
   - `my-cv.pdf` - Your CV/resume in PDF format

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Build

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Customization

### Personal Information

All personal information is stored in the translation files:
- `/src/dictionaries/en.ts` - English content
- `/src/dictionaries/es.ts` - Spanish content

### Styling

The project uses Mantine's theming system. Customize colors, fonts, and spacing in:
- `/src/components/ThemeProvider.tsx`

### Adding New Sections

1. Create a new component in `/src/components/`
2. Add translations to both dictionary files
3. Import and add to `/src/app/page.tsx`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ThemeProvider.tsx   # Theme management
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section
│   ├── AboutSection.tsx    # About section
│   ├── SkillsSection.tsx   # Skills section
│   ├── ExperienceSection.tsx # Experience timeline
│   ├── ContactSection.tsx  # Contact information
│   └── Footer.tsx          # Footer with social links
├── dictionaries/
│   ├── en.ts              # English translations
│   └── es.ts              # Spanish translations
├── hooks/
│   └── useTranslation.ts  # Translation hook
└── store/
    └── themeStore.ts      # Zustand theme store
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **Mantine**: Modern React components library
- **TypeScript**: Type-safe JavaScript
- **Zustand**: Lightweight state management
- **Framer Motion**: Smooth animations
- **Tabler Icons**: Beautiful icon set

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Miguel Guarrochena
