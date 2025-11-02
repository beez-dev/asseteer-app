# Domain Repositories (Interfaces)

This folder contains repository interface definitions for data access.

## Purpose
Define contracts (interfaces) for data persistence operations. The actual implementations live in the infrastructure layer, following the Dependency Inversion Principle.

## Examples
- IUserRepository
- IAssetRepository
- IProductRepository

## Guidelines
- Define abstract interfaces only (no implementations)
- Focus on domain operations, not database specifics
- Use domain entities as input/output types
- Implementation details should be in infrastructure layer
