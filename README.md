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

- Calendar view for the current month with event markers on days that have events
- Navigate between months using previous/next arrows
- Filter events by status (All / Scheduled / Played) and competition
- Event detail page — click on a marked day to see full event information
- Add new events at runtime via a form
- Custom events are persisted to localStorage and restored on next visit
- Responsive design for mobile, tablet, and desktop
- Navigation bar accessible from all views

## Project Structure

```
src/
├── components/   — UI components (calendar, eventDetail, addEventForm, navbar)
├── data/         — mock data (data.json)
├── services/     — data loading and business logic
├── styles/       — animations and responsive CSS
└── types/        — TypeScript interfaces
tests/            — Jest unit tests
```

## Assumptions & Decisions

- Data is loaded from a local JSON file (mock database) as specified in the task
- Custom events added at runtime are saved to localStorage and persist between sessions
- Navigation is handled client-side without a router library to keep dependencies minimal
- Week starts on Monday (European convention)
- No sport type field in the provided data — sport filter was not implemented
