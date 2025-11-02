# Domain Services

This folder contains domain services that implement business logic spanning multiple entities.

## Purpose
Domain services contain business logic that doesn't naturally fit within a single entity. They coordinate operations across multiple entities while maintaining domain rules.

## Examples
- PricingService
- ValidationService
- AssetValuationService

## Guidelines
- Use when business logic spans multiple entities
- Keep services stateless when possible
- Focus on domain logic, not infrastructure concerns
- Should work with domain entities and value objects
