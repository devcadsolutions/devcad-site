# Project Memory

## Site Identity

- Project name: `DevCAD Solutions`
- Stack: Next.js App Router, TypeScript, Tailwind CSS
- Deployment target: GitHub Pages static export
- Primary audience: architects, engineers, BIM/CAD users, and technical teams needing automation or internal tools

## Deployment Assumptions

- The site is configured for GitHub Pages export with repo-aware `basePath` handling.
- Static output is expected to come from `next build` and export into `out/`.
- Local image paths should stay compatible with GitHub Pages subpath deployment.

## Current UX Direction

- Warm neutral palette with beige, brown, and soft white surfaces
- Premium but practical tone rather than flashy startup aesthetics
- Portfolio is category-led, not one long mixed gallery
- UI should feel smooth and intentional, but avoid heavy blur or costly scroll effects

## Content Decisions

- Profile image: `public/profile/prof-pic.webp` (About page, OG image). Home hero uses the inline SVG avatar.
- Screenshots are WebP (max 1600px) because static export serves images unoptimized; convert new ones before adding.
- Image registry: `src/lib/placeholder-images.json`. Projects without real screenshots omit `imageId` and get a styled placeholder; never use stock photos as project images.
- Programming and software logos are stored under `public/logos/`.
- The `Portfolio` nav item links to `/work`; a separate chevron button opens the category menu.
- Inner pages use `PageIntro` (no photo banners). Per-page metadata via `pageMetadata()` in `src/lib/metadata.ts`.
- Contact details (email, LinkedIn, WhatsApp) live in `siteConfig.links`; WhatsApp buttons hide while empty.
- Lint: `npm run lint` (ESLint flat config, `eslint.config.mjs`).

## Important Pages

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Services: `src/app/services/page.tsx`
- Portfolio landing: `src/app/work/page.tsx`
- Portfolio category pages: `src/app/work/[category]`
- Case studies: `src/app/work/case-studies/[slug]` (data in `src/lib/portfolio-projects.ts`)
- Contact: `src/app/contact/page.tsx`

## Current Design Priorities

- Keep hierarchy clear and business-focused
- Make calls to action obvious without feeling pushy
- Use cards and framed sections to guide scanning
- Preserve performance by avoiding expensive visual effects
