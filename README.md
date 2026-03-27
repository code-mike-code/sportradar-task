# Sportradar Sports Event Calendar

A frontend application built as part of the Sportradar Coding Academy recruitment exercise.

## Overview

A sports event calendar that displays events, allows users to view event details, and lets users add new events during runtime.

## Tech Stack

- **TypeScript** — type-safe JavaScript
- **Vite** — fast development server and build tool
- **Jest + ts-jest** — unit testing
- **CSS** — styling with responsive design

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Tests

```bash
npm test
```

## Features

- Calendar view for the current month with event markers
- Event detail page
- Add new events at runtime (session only, no persistence)
- Responsive design for mobile, tablet, and desktop
- Navigation between views

## Project Structure

```
src/
├── components/   — UI components
├── data/         — mock data (data.json)
├── services/     — data loading and business logic
└── types/        — TypeScript interfaces
tests/            — Jest unit tests
```

## Assumptions & Decisions

- Data is loaded from a local JSON file (mock database) as specified in the task
- New events added at runtime are not persisted — they exist only for the current session
- Navigation is handled client-side without a router library to keep dependencies minimal
