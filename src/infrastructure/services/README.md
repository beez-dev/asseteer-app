# Infrastructure Services

This folder contains integrations with external services and third-party APIs.

## Purpose
Implement connections to external systems like payment processors, email providers, cloud storage, and other third-party services.

## Examples
- StripePaymentService
- SendGridEmailService
- S3StorageService
- TwilioSmsService
- FirebaseAuthService

## Guidelines
- Encapsulate external API calls
- Handle API authentication and error handling
- Transform external data formats to domain models
- Use environment variables for API keys and secrets
- Implement retry logic and circuit breakers when appropriate
- Mock external services in tests
