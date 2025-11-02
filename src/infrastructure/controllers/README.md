# Infrastructure Controllers

## Purpose
This directory contains infrastructure-level controllers that manage technical operations, background jobs, system maintenance, and infrastructure workflows.

## Contents
- Background job controllers
- System maintenance scripts
- Health check controllers
- Infrastructure monitoring handlers
- Migration controllers
- Deployment automation controllers

## Guidelines
- Handle infrastructure-specific operations
- Manage system health and maintenance
- Coordinate background processing
- May interact directly with databases and external services
- Focus on operational concerns

## Examples
- DatabaseMigrationController
- CacheWarmupController
- HealthCheckController
- ScheduledJobController
- DataSyncController
