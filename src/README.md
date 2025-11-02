# Source Code (src)

This folder contains the core application code organized following Clean Architecture principles.

## Architecture Layers

### 1. Domain Layer (`domain/`)
The innermost layer containing business logic and entities. Independent of any frameworks or external concerns.

### 2. Application Layer (`application/`)
Contains use cases and application-specific business rules. Orchestrates the flow between domain and infrastructure.

### 3. Infrastructure Layer (`infrastructure/`)
Implements external concerns like databases, APIs, and third-party services. Contains concrete implementations of domain interfaces.

### 4. Presentation Layer (`presentation/`)
Contains UI components, pages, and presentation logic. Handles user interactions and data display.

## Dependency Rule
Dependencies flow inward:
- **Presentation** → Application → Domain
- **Infrastructure** → Domain (implements interfaces)
- **Application** → Domain

The domain layer has no dependencies on outer layers.

## Benefits
- **Testability**: Each layer can be tested independently
- **Maintainability**: Clear separation of concerns
- **Flexibility**: Easy to swap implementations (databases, frameworks)
- **Scalability**: Organized structure that grows with the application
