# The Velvet Pulse Architecture Documentation

This document provides an overview of The Velvet Pulse application architecture, design patterns, and technical decisions.

## 📋 Table of Contents

- [System Overview](#system-overview)
- [Architecture Patterns](#architecture-patterns)
- [Technology Stack](#technology-stack)
- [Application Layers](#application-layers)
- [Design Decisions](#design-decisions)
- [Performance Considerations](#performance-considerations)

## 🎯 System Overview

The Velvet Pulse is a modern full-stack web application built with **Laravel 12 backend** and **React 19 frontend**, emphasizing **user engagement, messaging, and contact management.**

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Client (Browser)                    │
│  ┌──────────────────────────────────────────────────┐  │
│  │          React 19 + TypeScript Frontend          │  │
│  │  (Inertia.js Client / Vite HMR / Tailwind CSS)  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/HTTPS
                     │
┌────────────────────▼────────────────────────────────────┐
│                 Web Server (Nginx)                       │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│               PHP-FPM / Laravel 12 Backend               │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Controllers → Services → Models → Database      │  │
│  │  Messaging, Contact Management, User Engagement  │  │
│  └──────────────────────────────────────────────────┘  │
└─────┬───────────────┬──────────────────────────────────┘
      │               │
┌─────▼────┐     ┌───▼──────────┐
│   MySQL  │     │  File        │
│          │     │  Storage     │
└──────────┘     └──────────────┘
```

### Core Principles

1. **User-Centric Design**: Focus on user engagement and communication
2. **Message-Driven**: Integrated messaging system
3. **Contact Management**: Comprehensive contact handling
4. **Type Safety**: Full TypeScript and Laravel type checking
5. **Scalable**: Clean architecture for growth

## 🏗️ Architecture Patterns

### 1. Model-View-Controller (MVC)

- **Models** (`app/Models/`): Data structures and database interactions
- **Views** (`resources/js/Pages/`): React components via Inertia.js
- **Controllers** (`app/Http/Controllers/`): Request handling and orchestration

### 2. Service Layer Pattern

Business logic encapsulation:

```
Controller → Service → Model → Database
     ↓
   Mail/Queue
```

### 3. Message Proxy Pattern

Centralized message handling via shared authentication service:

```
Message Request → MessageProxyController → AuthSystemService → Database
```

### 4. Repository Pattern

Data access abstraction for flexibility and testing.

### 5. Component-Driven Frontend

```
resources/js/
├── Components/       # Reusable UI components
├── Layouts/         # Page layouts
├── Pages/           # Full-page components
└── types/           # TypeScript definitions
```

## 🛠️ Technology Stack

### Backend Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | Laravel 12 | Application framework |
| **Language** | PHP 8.2+ | Server-side programming |
| **Database** | MySQL | Primary data storage |
| **Cache** | File/Redis | Session and caching |
| **Mail** | Laravel Mail | Email notifications |
| **Static Analysis** | PHPStan | Code quality checking |

### Frontend Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | React 19 | UI library |
| **Language** | TypeScript 5.7 | Type-safe JavaScript |
| **Build Tool** | Vite 7 | Development & bundling |
| **Routing** | Inertia.js 2 | Full-stack SPA |
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **UI Components** | Radix UI, Headless UI | Accessible primitives |

### Infrastructure

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Web Server** | Nginx | HTTP server & reverse proxy |
| **Process Manager** | Supervisor (optional) | Queue worker management |
| **SSL** | Let's Encrypt | HTTPS support |

## 📚 Application Layers

### 1. Presentation Layer

**Responsibilities**: User interface, request handling, response formatting

**Components**:
- Inertia Pages (`resources/js/Pages/`)
- React Components (`resources/js/Components/`)
- Controllers (`app/Http/Controllers/`)

### 2. Application Layer

**Responsibilities**: Business logic and workflows

**Components**:
- Services (`app/Services/`)
- Form Requests (`app/Http/Requests/`)
- Middleware (`app/Http/Middleware/`)
- Mail Classes (`app/Mail/`)
- Jobs (`app/Jobs/`)

### 3. Domain Layer

**Responsibilities**: Core business entities

**Components**:
- Models (`app/Models/`)
- Contracts (`app/Contracts/`)
- Events (`app/Events/`)

### 4. Infrastructure Layer

**Responsibilities**: Data persistence and external services

**Components**:
- Database Migrations (`database/migrations/`)
- Seeders (`database/seeders/`)
- Configuration (`config/`)
- Providers (`app/Providers/`)

## 🎯 Key Features

### Messaging System

- Authenticated message retrieval
- Message read status tracking
- Bulk operations (mark all as read)
- Shared auth-system integration

### Contact Management

- Public contact form submission
- Email notifications
- Form validation
- Error handling and logging

### User Engagement

- Message notifications
- Contact form feedback
- Multi-channel communication support

## 🔄 Data Flow

### Message Flow

```
1. User requests messages
2. Controller → MessageProxyController
3. AuthSystemService provides messages
4. Messages returned to frontend
5. React renders message list
6. User interacts (mark as read)
7. PATCH request to API
8. Controller updates read status
```

### Contact Form Flow

```
1. User fills contact form
2. Form validation
3. POST to /api/contact
4. ContactController receives input
5. Validation & processing
6. Email notification sent (if configured)
7. Response returned to user
8. Success message displayed
```

## 🎨 Design Decisions

### Why Service Layer?

- Encapsulates business logic
- Makes code testable
- Enables reuse across controllers
- Facilitates API endpoint creation

### Message Proxy Pattern

- Centralized authentication
- Consistent message handling
- Shared user state
- Reduced code duplication

### Database Choice

- **MySQL**: Robust and scalable
- **Compatible**: Works with MySQL 8.0+
- **Flexible**: Easy schema evolution

### Component Library

- **Radix UI**: Unstyled, accessible components
- **Headless UI**: Alternative component set
- Both fully typed with TypeScript

## 🔒 Security Architecture

### Input Validation

- Form Request validation classes
- Custom validation rules
- CSRF token protection

### Output Protection

- React auto-escapes HTML
- Eloquent parameterized queries
- Middleware input filtering

### Authentication

- Shared auth-system integration
- Session-based authentication
- Bearer token support for APIs

### Email Security

- Validated email addresses
- Rate limiting on contact form
- Secure mail queue handling

## 📊 Database Schema

### Core Tables

- **users**: User accounts
- **messages**: User messages/notifications
- **contacts**: Contact form submissions

## 🔄 Integration Points

### Shared Services

- **Auth System**: Centralized authentication
- **Message Service**: Unified message handling
- **S3 Storage**: Optional file storage integration

## 📝 Directory Structure

```
thevelvetpulse/
├── app/
│   ├── Models/               # Database models
│   ├── Http/
│   │   ├── Controllers/      # Request handlers
│   │   │   └── MessageProxyController
│   │   │   └── ContactController
│   │   └── Requests/         # Input validation
│   ├── Services/             # Business logic
│   │   └── AuthSystemService
│   ├── Mail/                 # Mailable classes
│   ├── Jobs/                 # Background jobs
│   └── Providers/            # Service registration
├── routes/
│   ├── web.php               # Web routes
│   └── api.php               # API routes
├── resources/
│   └── js/
│       ├── Components/       # React components
│       ├── Layouts/          # Page layouts
│       ├── Pages/            # Full-page components
│       └── types/            # TypeScript types
├── database/
│   ├── migrations/           # Database migrations
│   └── seeders/              # Data seeders
├── config/                   # Configuration
└── storage/                  # Logs and uploads
```

## 🚀 Scalability

1. **Database Optimization**: Proper indexing on message/contact tables
2. **Caching**: Cache frequently accessed user data
3. **Queue Jobs**: Use Laravel Queue for email sending
4. **Asset Optimization**: Vite handles asset splitting
5. **CDN Ready**: Configure CDN for static assets
