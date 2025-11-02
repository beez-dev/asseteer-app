# Domain Components

## Purpose
This directory contains pure domain-level components that represent reusable domain concepts without business logic. These are fundamental building blocks of the domain model.

## Contents
- Value objects
- Domain primitives
- Immutable domain data structures
- Domain-level utilities that don't contain business rules

## Guidelines
- Should be pure, side-effect free
- Represent domain concepts clearly
- Focus on correctness and validation
- Should not depend on other layers
- Highly reusable across the domain

## Examples
- Email value object with validation
- Money class with currency handling
- Address value object
- Date range objects
- Measurement units
