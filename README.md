
# DevCAD Solutions - Static Site

This is a modern, high-performance static website for DevCAD Solutions, built with Next.js and optimized for GitHub Pages.

## Where is index.html?

Because this is a Next.js project, you edit the code in `src/app/page.tsx`. The actual `index.html` file is created automatically when you build the project.

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Find the output**:
   After the build finishes, a new folder named `out` will appear in your project root.
3. **Entry Point**:
   Inside that `out` folder, you will find `index.html`. This is your main entry point.

## Deployment to GitHub Pages

1. Run `npm run build`.
2. Upload the entire contents of the `out` folder to your GitHub repository (specifically to the `gh-pages` branch or the root of your repo depending on your GitHub settings).
3. GitHub Pages will then serve `index.html` as your homepage.

## Features
- Fully static export (no server required)
- Optimized for GitHub Pages
- Responsive design with Lucide icons
- Smooth entrance animations
