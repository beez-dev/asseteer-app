# Domain Layer

This folder contains the core business logic and domain entities of the application. It represents the heart of the clean architecture and should be independent of any external frameworks or libraries.

## Purpose
- Define business entities and their properties
- Implement domain-specific business rules and validation logic
- Remain framework-agnostic and reusable across different implementations

## Subfolders
- **entities/**: Core business objects that represent domain concepts
- **repositories/**: Interface definitions for data persistence (implementations live in infrastructure)
- **services/**: Domain services that contain business logic spanning multiple entities
- **utils/**: Domain-specific utility functions and helpers

## Guidelines
- No dependencies on external frameworks or UI
- Pure TypeScript/JavaScript business logic
- All business rules should be testable in isolation
