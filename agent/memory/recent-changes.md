# Recent Changes

## GitHub Pages

- Site prepared for GitHub Pages deployment with workflow-based publishing
- Repo-aware asset path handling added for static export

## Content and Assets

- Unused AI-related source files removed
- Legacy site images copied into local `public/legacy/`
- Programming and software logo sets replaced with provided Drive assets
- Shared portrait replaced with `public/profile/prof-pic.png`

## UI and Navigation

- Hero banner background constrained to the top intro area
- Portfolio nav now supports category dropdown and click-through landing page
- Portfolio landing page includes clickable category cards
- About page was redesigned to follow the previous site layout more closely
- Home page received a broader polish pass for services, featured work, CTA, and footer

## Redesign v2 (branch `redesign-v2`)

- Portfolio is a filterable card grid; case studies have breadcrumb, problem/built/result, gallery lightbox, related work
- Photo-banner page headers removed in favour of a shared `PageIntro`
- Sitemap, robots, canonical/OG per page, JSON-LD, `public/og.jpg`
- Downloads use email requests until real `.lsp` files are added to `siteConfig.downloads[].file`
