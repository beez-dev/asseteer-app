# Infrastructure Entities

## Purpose
This directory contains infrastructure-specific entity models such as database models, ORM entities, API response schemas, and external system data structures.

## Contents
- Database models (ORM entities)
- API response/request schemas
- External system data models
- Persistence-specific entity definitions
- Third-party integration models

## Guidelines
- Map to database tables and external APIs
- May use ORM decorators and framework-specific features
- Should provide transformation to/from domain entities
- Focus on data structure rather than behavior
- Can contain database-specific optimizations

## Examples
- UserModel (Prisma/TypeORM entity)
- StripePaymentResponse
- DynamoDBRecord
- PostgresUserEntity
- ExternalApiResponseSchema
