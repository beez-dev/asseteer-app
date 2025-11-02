# Presentation Repositories

## Purpose
This directory contains presentation-layer repository implementations that handle client-side data management, state persistence, and UI data access patterns. These repositories manage how data flows between the server and the UI.

## Contents
- Client-side state management repositories
- Local storage repositories
- Session storage handlers
- Client-side cache implementations
- UI state persistence layers
- API data fetching repositories
- IndexedDB repositories

## Guidelines
- Manage client-side data persistence
- Handle browser storage mechanisms (localStorage, sessionStorage, IndexedDB)
- Implement UI state management patterns
- May integrate with state management libraries (Redux, Zustand, Jotai)
- Focus on client-side data access needs
- Implement client-side data fetching patterns
- Use caching libraries effectively (SWR, React Query, TanStack Query)
- Handle optimistic updates for better UX
- Implement pagination and infinite scroll patterns
- Manage cache invalidation strategies
- Handle offline scenarios and sync when online
- Implement retry logic for failed requests

## Examples
- ApiRepository (fetch data from backend with React Query)
- LocalStorageRepository (persist user preferences)
- SessionStorageRepository (temporary session data)
- IndexedDBRepository (large client-side datasets)
- ClientCacheRepository (in-memory cache)
- UIStateRepository (global UI state management)
- FormStateRepository (form data persistence)
- OfflineQueueRepository (queue actions for offline support)

## File Types
- Repository class implementations
- Hook wrappers (React Query hooks, SWR hooks)
- Storage utility functions
- Cache management helpers
