# Brian Belaj – Fullstack Developer Portfolio

This repository contains the source code of my personal portfolio website, built with **Next.js** (App Router) and a set of custom UI components based on the “Resonance” template.  
The backend has been removed: all content (projects, texts, links) is loaded from local files (`data/projects.js`, `data/menu.js`, `data/footer.js`) to simplify deployment and reduce hosting costs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI / CSS**: Bootstrap 5 + custom styles from the Resonance template
- **Animations & effects**:
  - WOW.js / Animate.css (scroll reveal)
  - Jarallax (parallax)
  - Swiper (sliders)
  - Isotope / Masonry (portfolio grid)
- **Images**: Next `Image` with automatic optimization
- **Languages**: Italian (default) + English, managed via `LanguageContext`
- **Content**: plain JS data files in `data/` (`projects.js`, `menu.js`, `footer.js`)
- **Contact form**: handled via API route with Nodemailer (server-side)

## Project Structure

- `app/` – pages and layout (App Router)
  - `(homes)` – homepage variants
  - `(contact)` – contact page
  - `(portfolio-single)` – project detail pages
  - `(privacy)` – Privacy Policy page
- `components/` – all reusable UI components (headers, footers, portfolio, etc.)
- `data/` – static content (projects, menus, footer)
- `context/LanguageContext.jsx` – language and text management
- `utlis/` – JS utilities for visual effects (scroll, parallax, menu toggle, etc.)

## Local Development

Clone the repository and install dependencies:

```bash
yarn
# or
npm install
```

Start the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Production Build

To create a production build:

```bash
yarn build
# or
npm run build
```

And to run it:

```bash
yarn start
# or
npm start
```

## Deployment

This project is designed to be deployed as a **single Next.js app** (frontend + API routes) on platforms such as:

- **Vercel** – first-class Next.js support, automatic deployments from GitHub, custom domains and HTTPS.
- Netlify – compatible with Next.js App Router via the official Next.js plugin.

Typical deployment flow:

1. Push the `main` branch to GitHub.
2. Import the repository into Vercel.
3. Configure environment variables (for Nodemailer, etc.).
4. Attach the custom domain `brianbelaj.com`.

## Project Goal

This site serves as a portfolio to showcase:

- web projects (front‑end and full‑stack)
- development style (reusable components, measured animations, UX focus)
- ability to integrate Next.js with external libraries and structured content.

---

If you want to learn more about Next.js, check out the [official documentation](https://nextjs.org/docs) and the “Learn Next.js” tutorial.