# Public Assets

This folder contains static assets that are served directly by Next.js.

## Purpose
Store static files like images, fonts, icons, and other assets that need to be publicly accessible.

## Contents
- Images (SVG, PNG, JPG, etc.)
- Fonts
- Icons
- Favicons
- Robots.txt
- Sitemap.xml
- Other static files

## Guidelines
- Files in this directory are served at the root path `/`
- Use for assets that don't need optimization
- For images that need optimization, consider using Next.js Image component with imports
- Keep file names lowercase with hyphens
- Organize in subdirectories if needed (images/, fonts/, icons/)
- Optimize images before adding them to reduce bundle size
