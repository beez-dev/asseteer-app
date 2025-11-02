# Presentation Entities

## Purpose
This directory contains presentation-specific entity models that are optimized for UI rendering, form handling, and client-side data management. These types and models bridge the gap between server data and UI components.

## Contents
- UI state models
- Form data models and schemas
- Client-side entity representations
- Display-optimized data structures
- Presentation-specific DTOs
- Component prop type definitions
- View models
- Navigation and routing types

## Guidelines
- Optimize for UI rendering and user interaction
- May include computed properties for display formatting
- Should be simple and focused on presentation needs
- Use TypeScript for comprehensive type safety
- Can include client-side validation schemas
- Transform data for optimal UI performance
- Keep presentation types separate from domain types
- Define clear interfaces for component contracts
- Create view models to adapt domain data for UI needs

## Examples
- FormState models (form field values and validation states)
- UITableRow models with formatted data
- DisplayUser with formatted dates, display names, and avatar URLs
- ChartDataModel for visualization components
- FilterState models for search/filter UI
- View models (transformed domain entities for display)
- Form schemas (validation using Zod, Yup, etc.)
- Component prop types and interfaces
- Navigation state types
- Drawer/Modal state models

## File Types
- TypeScript type definitions (.ts)
- Zod/Yup validation schemas
- Interface definitions for props
- Enum definitions for UI states
