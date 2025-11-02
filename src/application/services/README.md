# Application Services

This folder contains application-level services for cross-cutting concerns.

## Purpose
Application services handle concerns that span across multiple use cases but are not part of the domain logic itself, such as authentication, authorization, caching, and logging.

## Examples
- AuthenticationService
- AuthorizationService
- CacheService
- LoggingService
- NotificationService

## Guidelines
- Focus on application-level concerns
- Can depend on both domain and infrastructure layers
- Provide reusable functionality across use cases
- Handle technical concerns, not business logic
- Use interfaces for better testability
