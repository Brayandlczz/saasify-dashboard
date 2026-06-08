# SaaSify Dashboard

Frontend dashboard for SaaSify, a subscription and entitlement infrastructure platform for SaaS developers.

---

# Overview

SaaSify is a platform that allows developers to manage:

* Projects
* Subscription Plans
* Customers
* Subscriptions
* API Keys
* Entitlements (future module)

This repository contains the frontend dashboard used by developers to manage SaaSify resources.

The current implementation uses a mock backend powered by `json-server` until the real backend becomes available.

---

# Tech Stack

## Core

* Next.js
* React
* TypeScript
* TailwindCSS

## Development

* json-server
* Axios
* React Hook Form
* Zod
* clsx

---

# Features

## Authentication

* Login
* Register
* Logout
* Session Persistence
* Protected Routes
* Guest Routes

## Projects

* List Projects
* Create Project
* Project Detail
* Rotate API Key

## Plans

* List Plans
* Create Plan
* Deactivate Plan

## Customers

* Read-only Customers View

## Subscriptions

* Read-only Subscriptions View

## UI

* Design System
* Reusable Components
* Loading States
* Error States
* Not Found State

---

# Architecture

The application follows a domain-oriented architecture.

```txt
User
 ↓
Route
 ↓
Feature Module
 ↓
API Layer
 ↓
Mock API / Backend
```

Example:

```txt
Dashboard Page
 ↓
projects.api.ts
 ↓
apiClient
 ↓
json-server
 ↓
mock-db.json
```

Business domains are isolated into independent modules.

---

# Project Structure

```txt
src/
├─ app/
│  ├─ (auth)
│  ├─ (dashboard)
│  ├─ loading.tsx
│  ├─ error.tsx
│  └─ not-found.tsx
│
├─ components/
│  ├─ ui/
│  ├─ layout/
│  └─ feedback/
│
├─ features/
│  ├─ auth/
│  ├─ projects/
│  ├─ plans/
│  ├─ customers/
│  └─ subscriptions/
│
├─ lib/
│  ├─ api/
│  ├─ config/
│  └─ utils/
│
├─ mocks/
│
└─ types/
```

---

# Architectural Decisions

## Why Next.js?

SaaSify is expected to evolve beyond a simple dashboard.

Future plans include:

* Landing Pages
* Documentation
* Pricing Pages
* Authentication
* Dashboard
* Marketing Content

Because of this, Next.js was selected instead of a Vite-only setup.

## Why Feature-Based Structure?

The project is organized by domain instead of by technical layer.

Each feature owns:

```txt
types
api
actions
components
```

Example:

```txt
features/projects
├─ types.ts
├─ projects.api.ts
├─ actions.ts
└─ components/
```

This keeps business logic isolated and scalable.

## Why a Design System?

Reusable UI primitives reduce duplication and keep visual consistency.

Shared UI components live in:

```txt
components/ui
```

Examples:

```txt
Button
Input
Card
Badge
EmptyState
PageHeader
```

---

# Development Conventions

## Components

UI components must remain presentational.

Business logic should not live inside reusable visual components.

## API Calls

API calls must be isolated inside:

```txt
features/*/*.api.ts
```

## Shared UI

Reusable UI components belong to:

```txt
components/ui
```

## Actions

Server Actions belong to:

```txt
features/*/actions.ts
```

## Domain Ownership

Each feature owns its:

* Types
* API Layer
* Components
* Actions

No cross-domain business logic should be introduced.

---

# MVP Progress

## Authentication

* [x] Login
* [x] Register
* [x] Logout
* [x] Session Persistence
* [x] Route Protection

## Projects

* [x] List
* [x] Create
* [x] Detail
* [x] Rotate API Key

## Plans

* [x] List
* [x] Create
* [x] Deactivate

## Customers

* [x] Read-only View

## Subscriptions

* [x] Read-only View

## Entitlements

* [ ] Pending

## Billing Integration

* [ ] Pending

---

# Getting Started

## Install Dependencies

```bash
pnpm install
```

## Run Frontend

```bash
pnpm run dev
```

Application:

```txt
http://localhost:3000
```

## Run Mock API

```bash
pnpm run mock:api
```

Mock API:

```txt
http://localhost:3001
```

---

# Environment Variables

Create:

```txt
.env.local
```

Example:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

# Mock Credentials

```txt
Email:
dev@example.com

Password:
Password123!
```

---

# Available Scripts

## Development

```bash
pnpm run dev
```

## Mock API

```bash
pnpm run mock:api
```

## Build

```bash
pnpm run build
```

## Lint

```bash
pnpm run lint
```

---

# Current Status

The project currently provides a functional MVP for SaaSify developers.

Implemented:

* Authentication
* Project Management
* Plan Management
* Customer Visualization
* Subscription Visualization
* Route Protection
* Design System Foundation

---

# Roadmap

## Phase 1 — Core Dashboard

* Authentication
* Projects
* Plans

## Phase 2 — Customer Management

* Customers
* Subscriptions

## Phase 3 — Entitlements

* Feature Access Management
* Permission Validation
* Entitlement Checks

## Phase 4 — Billing Integrations

* Stripe
* Mercado Pago
* Subscription Sync

## Phase 5 — Advanced Features

* API Usage Analytics
* Audit Logs
* Team Management
* Developer Settings

---

# Git Workflow

Development follows:

```txt
feature
 ↓
commit
 ↓
dev branch
 ↓
pull request
 ↓
main
```

Commits should be scoped by feature or refactor.

Examples:

```txt
feat: add create plan flow
feat: display project subscriptions
refactor: standardize actions with button component
docs: improve project documentation
```
