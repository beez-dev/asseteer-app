# Infrastructure Repositories

This folder contains concrete implementations of repository interfaces defined in the domain layer.

## Purpose
Implement data persistence logic for domain repositories using specific databases or storage solutions.

## Examples
- PostgresUserRepository
- MongoAssetRepository
- RedisSessionRepository
- LocalStorageRepository

## Guidelines
- Implement domain repository interfaces
- Handle database-specific query logic
- Transform database records to domain entities
- Handle connection management and error handling
- Keep database concerns isolated from business logic
- Use ORM/ODM if applicable (Prisma, TypeORM, Mongoose, etc.)
