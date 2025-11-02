# Infrastructure Layer

This folder contains implementations of external concerns such as databases, APIs, file systems, and third-party services.

## Purpose
- Implement repository interfaces defined in the domain layer
- Handle external service integrations
- Manage database connections and queries
- Provide concrete implementations for abstractions

## Subfolders
- **repositories/**: Concrete implementations of domain repository interfaces
- **services/**: External service integrations (payment gateways, email services, etc.)
- **components/**: Infrastructure-level components (database clients, API clients)
- **utils/**: Infrastructure utilities (connection helpers, configuration loaders)

## Guidelines
- Implement interfaces from domain layer
- Keep infrastructure code isolated and swappable
- Use environment variables for configuration
- Handle external errors and convert to domain exceptions
- No business logic - only technical implementation
