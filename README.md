# Hiawatha Brown 2026 — Campaign Website

Official campaign site for Hiawatha Brown, candidate for Cleveland, TN City
Council, 2026.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel.

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

npm install

### Environment Variables

cp .env.example .env.local

Open `.env.local` and fill in the required values (see `.env.example` for descriptions).

### Run Dev Server

npm run dev

Open http://localhost:3000.

---

## Scripts

| Command         | Description                  |
|---|---|
| npm run dev     | Start local dev server       |
| npm run build   | Production build             |
| npm run start   | Serve production build locally |
| npm run lint    | Run ESLint                   |

---

## Project Structure

app/                  # Next.js App Router
  (public)/           # Public-facing pages
  admin/              # Staff admin panel (auth-protected)
public/               # Static assets
  downtown-cleveland.png
.env.example          # Environment variable template
AGENTS.md             # AI coding agent context
CLAUDE.md             # Claude Code context

---

## Deployment

Deployed automatically to Vercel on push to main.

Environment variables must be configured in the Vercel project dashboard —
they are not committed to the repo.

---

## Contributing

This is a private campaign project. Contact the campaign for access.