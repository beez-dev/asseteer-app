# Use Cases

This folder contains application use cases that implement specific user scenarios and workflows.

## Purpose
Use cases represent the application's business operations. Each use case encapsulates a single user action or system operation, orchestrating domain objects and repositories.

## Examples
- CreateUserUseCase
- GetAssetDetailsUseCase
- UpdateProductUseCase
- DeleteOrderUseCase

## Guidelines
- One use case per file/class
- Each use case should have a single, clear purpose
- Accept dependencies via constructor (repositories, services)
- Return domain entities or DTOs
- Handle application-level validation and error handling
- Name pattern: `{Verb}{Entity}UseCase`
