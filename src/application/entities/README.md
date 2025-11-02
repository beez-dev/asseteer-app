# Application Entities

## Purpose
This directory contains application-specific entity transformations, DTOs (Data Transfer Objects), and view models that bridge the gap between domain entities and application requirements.

## Contents
- Data Transfer Objects (DTOs)
- View Models
- Application-specific entity extensions
- Entity mappers and transformers
- Request/Response models

## Guidelines
- Transform domain entities for application-specific needs
- Create view models optimized for specific use cases
- Implement DTO patterns for API contracts
- Should not contain core business logic
- May reference domain entities but provide application-specific views

## Examples
- UserDTO with specific fields for API responses
- ProductViewModel with computed display properties
- OrderRequestDTO for order creation
- EntityMapper to convert between domain and application models
