# Application Repositories

## Purpose
This directory contains application-specific repository interfaces and adapters that define contracts for data access patterns required by the application layer.

## Contents
- Repository interface definitions for application use cases
- Composite repository interfaces
- Application-specific data access patterns
- Repository adapters that orchestrate multiple domain repositories

## Guidelines
- Define interfaces that match application needs
- May combine multiple domain repositories
- Should not contain implementation details (implementations go in infrastructure)
- Focus on application-specific data access patterns
- Support complex queries needed by use cases

## Examples
- Aggregated repository interfaces
- Report generators requiring multi-entity queries
- Custom query interfaces for specific features
- Read models for CQRS patterns
