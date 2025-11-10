# The Velvet Pulse

A modern web application built with Laravel and React, featuring server-side rendering and a comprehensive development workflow.

## Tech Stack

- **Backend**: Laravel 12.x (PHP 8.2+)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **SSR**: Inertia.js
- **UI Components**: Radix UI + Headless UI

## Quick Start

### Prerequisites
- PHP 8.2+
- Node.js 18+
- Composer

### Installation

1. Clone and install dependencies:
```bash
composer install
npm install
```

2. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

3. Run migrations:
```bash
php artisan migrate
```

### Development

Start the development server:
```bash
composer run dev
```

This runs Laravel server, queue worker, and Vite dev server concurrently.

For SSR development:
```bash
composer run dev:ssr
```

### Building

Build for production:
```bash
npm run build
```

Build with SSR:
```bash
npm run build:ssr
```

## Scripts

- `npm run dev` - Vite development server
- `npm run build` - Production build
- `npm run lint` - ESLint with auto-fix
- `npm run format` - Prettier formatting
- `composer test` - Run PHPUnit tests

## Project Structure

- `app/` - Laravel application code
- `resources/js/` - React components and TypeScript
- `resources/css/` - Stylesheets
- `routes/` - Laravel routes
- `database/` - Migrations and seeders
- `tests/` - PHPUnit tests

## Features

- Server-side rendering with Inertia.js
- Modern React with TypeScript
- Tailwind CSS styling
- Component library with Radix UI
- Automated testing and linting
- Sitemap generation