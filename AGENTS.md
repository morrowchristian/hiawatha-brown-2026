# AGENTS.md — Hiawatha Brown 2026 Campaign Site

AI coding agents should read this file before touching any code.

---

## Project Overview

Official campaign website for Hiawatha Brown, candidate for Cleveland, TN City Council, 2026.

Public-facing site + password-protected staff admin panel. Deployed on Vercel.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Runtime | React 19 |
| Deploy | Vercel |

> **Next.js 16 warning:** APIs, file conventions, and routing behavior may differ
> from your training data. Before writing any Next.js-specific code, read the
> relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.
> Do not assume Next.js 13/14/15 patterns apply.

---

## Site Structure

### Public Pages
- `/` — Hero / homepage
- `/about` — Candidate bio
- `/policy` — Policy platform
- `/volunteer` — Volunteer sign-up form
- `/merch` — Merchandise / support page

### Staff Admin (protected)
- `/admin` — Dashboard
- `/admin/posts` — Create and cross-post to Facebook, X, Instagram
- `/admin/social-feed` — View recent posts across platforms

---

## Key Conventions

- **App Router only.** No Pages Router. All routes live under `app/`.
- **Server Components by default.** Add `"use client"` only when interactivity requires it.
- **No default exports for components** unless Next.js requires it (layouts, pages).
  Named exports everywhere else.
- **File naming:** `kebab-case` for files and folders, `PascalCase` for component
  function names.
- **Environment variables:** Server-side secrets use plain `VARIABLE_NAME`. Public
  browser variables must be prefixed `NEXT_PUBLIC_`. See `.env.example` for the full list.
- **Auth:** Admin routes check a session token signed with `ADMIN_SECRET`. Do not
  hardcode credentials or bypass this check.

---

## What Not to Break

- `public/downtown-cleveland.png` — local hero background image. Do not replace
  with an external URL or remove.
- `.env.example` is the source of truth for required environment variables. Keep it
  updated when adding new secrets.
- Tailwind v4 uses a CSS-first config (`@import "tailwindcss"` in the global CSS
  file). There is no `tailwind.config.js` unless one was added intentionally.

---

## Social Posting

The admin panel cross-posts to three platforms via their respective APIs:
- **Facebook** — Graph API, posting to a Page
- **Instagram** — Graph API via Facebook Business

All credentials live in environment variables. See `.env.example`.

---

## Out of Scope (do not add without discussion)

- A database or ORM (not planned yet)
- A CMS
- Payment processing
- Any third-party analytics beyond what's in `.env.example`