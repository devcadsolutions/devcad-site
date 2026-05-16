
# DevCAD Solutions

Static Next.js site configured for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

The dev server runs on **http://localhost:9002** (not the default 3000).

### Windows — portable Node.js (no installer)

If Node.js is not on your PATH, prefix each command with the full path to the portable binary, or add it to your session first:

```powershell
# PowerShell — set PATH for current session
$env:PATH += ";C:\path\to\node-win-x64"

cd C:\path\to\devcad-site
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
