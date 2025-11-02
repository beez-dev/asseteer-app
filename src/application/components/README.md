# Application Components

## Purpose
This directory contains application-specific UI components that are aware of business logic and use cases. These components act as smart components that coordinate between domain logic and presentation.

## Contents
- Reusable application-specific components
- Container components that connect to use cases
- Components that orchestrate multiple domain operations
- Business logic-aware UI components

## Guidelines
- Components should encapsulate application workflows
- May contain business logic but should delegate to use cases for core operations
- Should be framework-agnostic where possible
- Can import from `domain`, `application/use-cases`, and `application/services`

## Examples
- Form controllers with validation
- Data grid components with filtering/sorting logic
- Workflow orchestrators
- Multi-step wizards
