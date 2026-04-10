# thevelvetpulse

## Purpose
Music-focused content site for The Velvet Pulse. Primarily frontend-heavy with static/seeded content. Features albums, tours, merch listings, and a contact form.

## Tech Stack
- **Backend**: Laravel 12, PHP 8.2+, Spatie Sitemap
- **Frontend**: React 19, TypeScript, Inertia.js 2, Tailwind CSS 4, Radix UI, Headless UI, Sharp (image processing), Vite
- **Testing**: PHPUnit 11 (`php artisan test`)
- **Storage**: MySQL, AWS S3 (primary image storage), Sharp for server-side image resizing

## Architecture

### Controllers (`app/Http/Controllers/`)
- `Auth/` — Breeze-based auth (minimal usage)
- `Settings/` — user settings

Very minimal controller surface — most pages are served from route closures.

### Models (`app/Models/`)
- `User` — only model (content is largely static/seeded or S3-backed)

### Routes (`routes/web.php`)
All routes return Inertia pages. **Note: uses PascalCase page names** (e.g., `Inertia::render('Home')`, `Inertia::render('TopAlbums')`).

| Route | Page |
|-------|------|
| `/` | `Home` |
| `/topalbums` | `TopAlbums` |
| `/music` | `Music` |
| `/tourevents` | `TourEvents` |
| `/tours` | `Tours` |
| `/merch` | `Merch` |
| `/contact` | `Contact` |
| `/about` | `AboutUs` |
| `/generate-sitemap` | Spatie Sitemap generation |

### Frontend (`resources/js/`)
- Pages: `pages/` (**PascalCase** — match exactly when creating new pages)
- Components: `components/`
- Hooks: `hooks/`
- SSR entry: `ssr.tsx`

## Key Patterns
- **PascalCase Inertia pages** — unlike other projects in this workspace that use kebab-case.
- Image-heavy site: use Sharp via npm for resizing/optimization before S3 upload.
- No Eloquent models for content — data is either seeded, hardcoded in React components, or fetched from S3.

## Build & Test
```bash
php artisan test
npm run build:ssr
npm run types
npm run lint
./vendor/bin/pint
```

## Notable Files
- `deploy-production.sh`, `deploy-test.sh` — deployment scripts
