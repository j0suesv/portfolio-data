# Josué Salcedo — Data Engineer Portfolio

A modern, production-grade portfolio built with **React + Vite**.

## Stack
- React 18
- Vite 5
- CSS Modules (zero runtime CSS-in-JS)
- Google Fonts: Sora + JetBrains Mono

## Project Structure

```
public/
└── images/                  # Static images (URLs like /images/…)
src/
├── App.jsx                  # Root — assembles all sections
├── main.jsx                 # Entry point
├── data/
│   └── portfolio.js         # ✏️  ALL your content lives here
├── hooks/
│   └── useReveal.js         # Scroll-triggered reveal (IntersectionObserver)
├── styles/
│   └── globals.css          # Design tokens, reset, shared keyframes
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css       # Hero + portrait
    ├── About.jsx / .css      # Asymmetric layout + stats
    ├── TechStack.jsx / .css  # Interactive chip grid
    ├── Projects.jsx / .css   # 2-col project cards
    ├── Architecture.jsx / .css # 4-col data stack diagram
    ├── Experience.jsx / .css # Timeline
    ├── Contact.jsx / .css
    └── Footer.jsx / .css
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Customising Content

**All text, links, and data live in one file:**

```
src/data/portfolio.js
```

Edit the exported objects:
- `hero` — name, title, description, `portraitSrc` (default `public/images/profile_image.jpg`)
- `about` — paragraphs, stats
- `stack` — tech categories and chips
- `projects` — project cards
- `architecture` — 4-column data stack diagram
- `experience` — work history
- `contact` — email, LinkedIn, GitHub

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#161D6F` | Buttons, borders, accents |
| `--secondary` | `#D6E6F2` | Dark-bg highlights |
| `--bg` | `#F5F5F5` | Light sections |
| `--bg-darker` | `#080d2e` | Hero, Architecture, Contact |

## Build for Production

```bash
npm run build
npm run preview   # preview the build locally
```

The `dist/` folder is ready to deploy to Vercel, Netlify, or any static host.

## Deploying to Vercel

```bash
npx vercel
```

Or drag the `dist/` folder to https://vercel.com/new.
