# Application Layer

This folder contains the application's use cases and orchestration logic. It defines how the system responds to user actions and coordinates domain objects.

## Purpose
- Implement application-specific business rules and workflows
- Orchestrate the flow of data between domain and infrastructure layers
- Define use cases that the application supports
- Handle application-level services and state management

## Subfolders
- **use-cases/**: Application use cases that implement specific user scenarios
- **services/**: Application services for cross-cutting concerns (auth, logging, etc.)
- **controllers/**: Application controllers that handle request routing
- **utils/**: Application-level utility functions

## Guidelines
- Depend on domain layer, but not on infrastructure details
- Each use case should represent a single user action or workflow
- Keep use cases focused and single-purpose
- Use dependency injection for repository and service access
