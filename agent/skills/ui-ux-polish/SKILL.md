# UI/UX Polish Skill

Use this skill when improving the presentation, usability, and perceived quality of `devcad-site`.

## Goal

Make the site feel professionally designed while staying practical, fast, and aligned with the existing brand direction.

## Design Rules

- Keep the warm neutral palette unless there is a strong reason to change it.
- Favor clean section hierarchy, framed content blocks, and readable spacing.
- Prefer purposeful motion over decorative animation.
- Avoid heavy blur, expensive scroll effects, and over-layered backgrounds.
- Make important navigation and calls to action obvious.
- Keep GitHub Pages compatibility in mind for local assets and routes.

## Project-Specific Targets

- Home page should clearly answer:
  - what DevCAD Solutions does
  - who it helps
  - what categories of work are available
  - what action to take next
- Portfolio should stay category-led.
- About page should feel personal and credible, not generic.
- Footer should reinforce contact info and navigation with minimal clutter.

## Working Checklist

- Review affected pages in `src/app` and related components in `src/components`.
- Reuse existing utility classes in `src/app/globals.css` where possible.
- Preserve mobile layout quality.
- Verify hover and dropdown behaviors still feel stable.
- Run `npm run build` after meaningful UI changes.

## Preferred Edit Areas

- `src/app/globals.css`
- `src/components/layout/*`
- `src/components/sections/*`
- `src/app/*/page.tsx`
