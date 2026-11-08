# Barred Owl website

Astro 5 · TypeScript · Tailwind CSS v4 · deployed to Cloudflare Pages.

## Commands

| Command          | What it does                                                           |
| ---------------- | ---------------------------------------------------------------------- |
| `npm install`    | Install dependencies (once)                                            |
| `npm run dev`    | Local preview at http://localhost:4321 with live reload                |
| `npm run build`  | Production build to `dist/`                                            |
| `npm run verify` | Type check, format check, build, and in-page link check (what CI runs) |
| `npm run format` | Format all files with Prettier                                         |

## Where things live

- `src/config/site.ts`: **prices, contact email, legal name, founding-rate slots.** Change numbers here only.
- `src/components/`: one file per homepage section.
- `src/components/ChatPanel.astro`: placeholder for the assistant. Replace the form with the Tidio/Lyro widget after the stump-test.
- `src/components/MorningBrief.astro`: **sample** data only. Replace with real output before publishing.
- `src/styles/global.css`: colour tokens (from the website brief) and button styles. Dark mode is automatic, or set `data-theme`.
- `.github/workflows/deploy.yml`: verifies every push and deploys `main` to Cloudflare Pages.

## Before launch

1. Set `PUBLIC_AUDIT_EMAIL` and `PUBLIC_DISCLOSURE_TEXT` as GitHub repository variables. The disclosure must be made before public launch.
2. Optionally set `PUBLIC_GA4_ID` for analytics.
3. Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, and create a Pages project named `barredowl`.
4. Replace the sample morning brief and the chat placeholder.
