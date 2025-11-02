# Application Controllers

This folder contains controllers that handle request routing and orchestration.

## Purpose
Controllers act as the entry point for incoming requests, routing them to appropriate use cases and handling response formatting.

## Examples
- UserController
- AssetController
- ProductController

## Guidelines
- Keep controllers thin - delegate to use cases
- Handle HTTP-specific concerns (status codes, headers)
- Validate incoming request data
- Transform use case results into HTTP responses
- One controller per domain aggregate or resource
- Use dependency injection for use cases
