# Dreamscope website (dream-team-builder)

Marketing site for Dreamscope Consulting. Deployed to **www.dreamscope.win** via Vercel (auto-deploys from `main`).

**Full playbook** (design system, content guardrails, source material, roadmap) lives in the **`dreamscope-website` skill** at `C:\DS Local\skills\dreamscope-website\SKILL.md`. Load it before any non-trivial change.

## Fast facts

- **Stack:** Vite + React 18 + TS + Tailwind + shadcn. Content pages use injected inline CSS scoped per page (`.land-page` / `.ce-page` / `.aim-page`), not Tailwind utility classes.
- **Routes** (`src/App.tsx`, all under `<Layout>`): `/` Landing, `/culture-engine`, `/ai-maestro`, `*` NotFound. `Layout` provides the sticky navbar + scroll manager; footers are per-page.
- **Verify before pushing:** `npm run build` must exit 0. Push to `main` = production deploy.
- **`vercel.json`** holds the SPA fallback rewrite (direct hits to sub-routes serve `index.html`). Do not delete it.
- **Package manager is npm** (`package-lock.json`). No bun.
- **Palettes:** Culture Engine + Landing = navy `#1E2B3A` / teal `#0C7C8A` (DM Serif Display + DM Sans). AI Maestro = caramel `#B5895A` / cream `#FBF8F1` (Cormorant Garamond + Inter).

## Non-negotiables (public copy under Joe's name)

- No em-dashes. Percentages, not decimals.
- Verify every proof point and number against the CV (`Personal\Joe_Black_CV_May_2026.docx`) and the AI Maestro sales brief. Never fabricate or misattribute.
- Do not name the Culture Engine client (Marou) publicly; say "a 450-person company".
- AI Maestro page avoids: consultant, consulting, consultancy, solution, platform.
- Optimize images before committing (no local Python; use PowerShell `System.Drawing` or `npx sharp-cli`).
- Commit messages end with the Co-Authored-By line. In PowerShell, no double quotes inside the here-string message.
