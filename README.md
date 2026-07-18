# MMS People Enterprise — HRIS Viktor

Enterprise maritime HRIS for **PT Multi Maritim Shipping**, rebuilt with Next.js.

## Tech stack
- Next.js 15 App Router + React 19 + TypeScript
- Tailwind CSS 4
- Radix UI primitives + Lucide icons
- Recharts
- Playwright E2E

## Demo login
- Username: `admin`
- Password: `admin123`

> The requested demo credentials are implemented client-side for demonstration. Replace this with Auth.js/SSO and a database-backed user store before production use.

## Development
```bash
bun install
bun run dev
```
Open http://localhost:3000.

## Verification
```bash
bun run build
bun run test:e2e
```

## Modules
Executive dashboard, people analytics, employee directory, organization, attendance, shift & roster, leave, fleet & crewing, compliance, payroll, compensation, claims & benefits, performance & talent, letters, approvals, notifications, audit trail, and settings.
