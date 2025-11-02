# Asseteer App

A Next.js application built with Clean Architecture principles for maintainability, testability, and scalability.

## Architecture Overview

This project follows **Clean Architecture** with clear separation of concerns across four main layers:

```
src/
├── domain/              # Business logic & entities (innermost layer)
│   ├── entities/        # Core business objects
│   ├── repositories/    # Repository interfaces
│   ├── services/        # Domain services
│   └── utils/           # Domain utilities
│
├── application/         # Use cases & orchestration
│   ├── use-cases/       # Application workflows
│   ├── services/        # Application services (auth, logging)
│   ├── controllers/     # Request handlers
│   └── utils/           # Application utilities
│
├── infrastructure/      # External concerns & implementations
│   ├── repositories/    # Repository implementations
│   ├── services/        # External service integrations
│   ├── components/      # Database clients, API clients
│   └── utils/           # Infrastructure utilities
│
└── presentation/        # UI layer
    ├── components/      # React components
    ├── controllers/     # UI controllers
    ├── services/        # Client-side services
    ├── use-cases/       # Client-side workflows
    ├── repositories/    # Client-side data fetching
    └── utils/           # UI utilities
```

### Dependency Rule
Dependencies flow inward: **Presentation → Application → Domain** ← Infrastructure

Each folder contains a README.md explaining its purpose and guidelines.

## Getting Started

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Project Structure

- **`app/`** - Next.js App Router pages and layouts
- **`src/`** - Clean Architecture layers
- **`public/`** - Static assets
- **`node_modules/`** - Dependencies

## Key Features

- ✅ Clean Architecture for separation of concerns
- ✅ TypeScript for type safety
- ✅ Next.js 16 with App Router
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ Organized folder structure with documentation

## Architecture Benefits

- **Testability**: Each layer can be tested independently
- **Maintainability**: Clear boundaries between business logic and technical details
- **Flexibility**: Easy to swap implementations (databases, frameworks, UI libraries)
- **Scalability**: Structure that grows with your application

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [TypeScript](https://www.typescriptlang.org/docs/)

## Deploy on Vercel

Deploy easily using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
