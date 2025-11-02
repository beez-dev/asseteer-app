# Domain Controllers

## Purpose
This directory contains domain-level controllers that orchestrate complex domain operations and workflows. These controllers encapsulate domain business processes.

## Contents
- Domain workflow orchestrators
- Business process coordinators
- Domain event handlers
- Aggregate root coordinators

## Guidelines
- Coordinate multiple domain services and entities
- Implement complex business workflows
- Ensure domain invariants are maintained
- Should be independent of infrastructure concerns
- Focus on domain logic orchestration

## Examples
- OrderProcessingController
- PaymentWorkflowController
- InventoryManagementController
- CustomerLifecycleController
