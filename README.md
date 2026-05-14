
# DevCAD Solutions

Static Next.js site configured for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is written to `out/`.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. In GitHub, open `Settings > Pages`.
2. Set the source to `GitHub Actions`.
3. Push to `main`.

The workflow will build the site and publish the contents of `out/` to GitHub Pages.

The Next.js config automatically uses the repository subpath when deployed from GitHub Actions, so this works for project Pages URLs such as:

`https://devcadsolutions.github.io/devcad-site/`
