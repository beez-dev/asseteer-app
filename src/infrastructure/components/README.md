# Infrastructure Components

## Purpose
This directory contains infrastructure-level components that provide technical capabilities and integrations with external systems, databases, and third-party services. These are the foundational building blocks that connect your application to the outside world.

## Contents
- External API clients
- Database connection components
- Caching mechanisms
- Message queue clients
- File storage adapters
- Third-party service integrations
- Logging and monitoring clients
- Authentication providers

## Guidelines
- Handle all external system interactions
- Implement technical concerns (retry logic, circuit breakers, connection pooling)
- Should be replaceable without affecting business logic
- May use infrastructure-specific libraries and frameworks
- Focus on reliability, performance, and resilience
- Initialize and configure external connections
- Handle connection pooling and lifecycle
- Provide singleton instances when appropriate
- Implement health checks and graceful shutdown
- Export typed clients for type safety

## Examples
- DatabaseClient (Prisma, Drizzle, TypeORM connection)
- CacheClient (Redis, Memcached connection)
- StripePaymentClient
- S3FileStorageAdapter
- SendGridEmailClient
- MessageQueueClient (RabbitMQ, Kafka, SQS)
- HttpClient (Axios/Fetch wrapper with interceptors)
- WebSocketClient
- LoggerClient (Winston, Pino)
- MetricsClient (Prometheus, DataDog)

## File Types
- Connection initialization files
- Client wrappers and adapters
- Configuration loaders
- Health check implementations
