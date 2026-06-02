# SaaSify Dashboard - Frontend Architecture

## Objective

Frontend for the SaaSify dashboard for developers.

It allows for:
- Registration and login.
- Project management.
- Plan management.
- API key rotation.
- Viewing basic project information.

## Stack

- Next.js
- React
- TypeScript
- TailwindCSS
- App Router
- json-server for temporary mock backend

## Structure

- `src/app`: application routes.
- `src/components`: reusable components.
- `src/features`: domain-specific functional modules.
- `src/lib`: shared utilities, client API, and configuration.
- `src/types`: global types.
- `src/mocks`: data and routes for the mock backend.

## Main Rule

Visual components must not contain business logic.

Logic must reside in:
- `features/*`
- `lib/api`
- feature specific hooks