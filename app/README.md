# App Directory (Next.js App Router)

This folder contains the Next.js App Router pages and layouts.

## Purpose
Define routes, pages, and layouts using Next.js 13+ App Router conventions. This is the entry point for your application's routing structure.

## Structure
- **page.tsx**: Route page components
- **layout.tsx**: Shared layouts for nested routes
- **loading.tsx**: Loading UI components
- **error.tsx**: Error UI components
- **not-found.tsx**: 404 pages
- **route.ts**: API routes

## Guidelines
- Follow Next.js App Router conventions
- Use Server Components by default for better performance
- Add "use client" directive only when necessary
- Implement proper SEO metadata
- Keep route components thin - delegate to presentation layer components
- Use parallel routes and intercepting routes when appropriate

## Integration with Clean Architecture
- Import components from `src/presentation/components`
- Call server actions or API routes for data fetching
- Keep business logic in the application/domain layers
