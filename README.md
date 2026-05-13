# Seegiri

Seegiri is a production-oriented random video chat platform. This repository is intentionally split into a **Next.js** web app (`frontend/`) and a **Node.js** realtime API (`backend/`) so each surface can scale and deploy independently (for example, Vercel + Render).

## Phase 1 status

Phase 1 delivers **project foundation only**: strict TypeScript, linting/formatting, environment validation, scalable folder boundaries, SEO primitives, loading/error architecture, and a minimal UI shell. Product flows (landing polish, matchmaking, WebRTC, chat controls) begin in Phase 2+.

## Requirements

- Node.js **20+** and npm

## Installation

Install dependencies for all workspaces:

```bash
cd "d:\Websites\V-Chat MVP"
npm install
npm install --prefix frontend
npm install --prefix backend
```

Copy environment templates:

```bash
copy frontend\.env.example frontend\.env.local
copy backend\.env.example backend\.env
```

> On macOS/Linux, use `cp` instead of `copy`.

## Development

Frontend (App Router):

```bash
cd frontend
npm run dev
```

Backend (Express + Socket.IO):

```bash
cd backend
npm run dev
```

Default URLs:

- Web: `http://localhost:3000`
- API: `http://localhost:4000/api/health`
- Socket.IO: attached to the same HTTP server as the API (`http://localhost:4000`)

## Quality gates

From the repository root:

```bash
npm run lint
npm run format
```

Git hooks (via Husky) run **lint-staged** (Prettier) and **`npm run lint`** on pre-commit.

## Deployment notes

- **Frontend**: designed for Vercel; set `NEXT_PUBLIC_*` variables in the hosting dashboard.
- **Backend**: designed for Render/VPS-style hosting; set `SEEGIRI_PUBLIC_ORIGINS` to include your deployed web origin (comma-separated if needed).

## Roadmap pointer

See the Phase plan in the project brief: Phase 2 is the premium landing page; Phases 3–6 progressively add realtime matchmaking, WebRTC, chat, and controls; Phase 7 expands Firebase-backed admin capabilities.
