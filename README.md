# Sunil Gabbila | Portfolio

A personal portfolio for Sunil Gabbila, Java developer and software engineer. The site presents professional experience, skills, education, selected projects, GitHub activity, and contact information.

## Built With

- React 18
- Vite
- React Router
- Lucide React

## Getting Started

Use Node.js and npm, then install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

## Portfolio Sections

- Overview
- About
- Skills
- Projects
- Experience
- Education
- GitHub
- Contact

The projects and skills displayed on the site are maintained in `src/data/`.

## Contact Form Setup

The contact form opens the visitor's email application using a `mailto:` link. Set `VITE_CONTACT_EMAIL` to Sunil's real contact address in a local `.env` file or in the deployment platform's environment variables. Without this setting, the form explains that email delivery is not configured and directs visitors to LinkedIn. No email address is embedded in the source.

```env
VITE_CONTACT_EMAIL=your-real-email-address
```

## Resume

The hero's Download Resume button generates a one-page PDF in the browser from the profile and project details maintained in the portfolio source. Update `src/components/Hero.jsx` when those details change.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static hosting service such as Netlify, Vercel, or GitHub Pages. Configure `VITE_CONTACT_EMAIL` in the host's build environment before deploying. For GitHub Pages, configure the site base path in `vite.config.js` if publishing below a repository subpath.