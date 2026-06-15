# SPB Foundry

A premium portfolio and landing page designed to introduce my software engineering expertise and services to the world. It functions as an interactive, high-end online CV with the look, feel, and authority of a professional tech company or boutique consulting agency, strategically architected to convert potential clients and employers into direct inquiries.

## Brand Identity and Visuals

- **Core Positioning:** Premium, high-ticket software engineering services. The design and UX must justify top-tier rates through flawless execution and a unique aesthetic.
- **Visual Concept:** A fusion of high-end luxury minimalism and a "spaceship instruction manual" aesthetic.
- **Color Palette:**
  - Main: Monochrome (strict variety of blacks, dark grays, and whites).
  - Accent: A single, tactical "pop-up" or accent color used sparingly for interactive cues or highlights.
- **Graphic Elements:**
  - Low-fidelity technical drawings.
  - Clean UML diagrams integrated directly into the UI.
  - Subtle, purposeful animations that explain or indicate the nature of the business/systems.
- **UI/UX Depth & Interaction:**
  - Interactive components (e.g., buttons, theme toggles, language switchers) must feature a 3D isometric style to add depth and tactile feedback to the minimalist layout.

## Tech Stack & Architecture

- **Framework:** [Astro](https://astro.build) (v6) — static, content-first output. Pages are `.astro` files with file-based routing under `src/pages/`. Ship zero client-side JavaScript by default; reach for vanilla `<script>` islands only for genuine interactivity (theme toggle, language switcher). No React/Vue/Svelte runtime in this repo.
- **Language:** TypeScript in `strict` mode (extends `astro/tsconfigs/strict`). Prefer typed, self-documenting code over runtime checks.
- **Styling:** Hand-authored CSS in `src/styles/global.css`. Design tokens (color, type scale, spacing) are defined as CSS custom properties under `:root`, with light/dark overrides via `[data-theme]`. No utility framework (no Tailwind) in this project.
- **Internationalization:** Astro's native i18n. Spanish (`es`) is the default locale served at the root (no prefix); English (`en`, served as `en-US`) lives under `/en`. Copy is centralized in `src/i18n/` — `shared.ts` for language-invariant strings (names, tech proper nouns) and `ui.ts` for translated strings. Never hardcode user-facing text in components.
- **Project layout:** `src/components/` (presentational `.astro`), `src/layouts/` (page shells), `src/pages/` (routes, mirrored under `en/`), `src/i18n/` (copy dictionaries), `src/styles/`, plus typed config modules (`consent.ts`, `contact.ts`, `icons.ts`, `separators.ts`). Static assets in `public/`.
- **Tooling:** pnpm (v10) as the package manager; Node ≥22.12. `pnpm dev` / `pnpm build` / `pnpm preview` wrap the Astro CLI.
- **Deployment:** Cloudflare (Wrangler). `pnpm deploy` runs `astro build` then `wrangler deploy`, serving the prerendered `./dist` as static assets. Config in `wrangler.jsonc`.
- **Release management:** `release-please` automates versioning and `CHANGELOG.md` from Conventional Commits.

## Core Features & Sections

- **Pages:** `/` (landing), `/experience` (full work history), `/cookies` (cookie policy), and a `404`. Every route is mirrored under `/en` for English; Spanish is served at the root.
- **Landing composition:** `HomeSections.astro` stacks the page in order — **Hero → About (01) → Services (02) → Experience (03) → Side Projects (04) → Method (05) → Contact (footer)**. Numbered sections share a `SectionHeader` (`num` / `label` / `title`); all copy comes from `i18n/ui.ts`.
  - **Hero** — headline, contact links, and a decorative UML *sequence* diagram (Client → Architect → Deployment).
  - **About (01)** — profile photo, lead statement, and a stats list, behind an isometric "stacking layers" diagram.
  - **Services (02)** — the offer: the high-ticket engineering services on the table, framed for client/employer conversion. Leads with what's offered before the proof that follows.
  - **Experience (03)** — curated to 3 items on the landing with a link to `/experience`, which renders all items as a bento grid (`full` / `bento` props drive the layout).
  - **Side Projects (04)** — flip cards: a browser-window mock (per-project generated pattern + logo) on the front.
  - **Method (05)** — merges the former Approach and Working With AI sections into one: the process steps (`P.01`…) wired together with script-drawn UML-style connectors, plus the term/description list framing how AI augments delivery.
  - **Contact (footer)** — CTA + contact bar behind a decorative UML *activity* diagram (Specify → Clarify loop).
- **Header & navigation:** Rendered on the landing page only (its anchors are same-document hash links with smooth scroll). Holds the `Logo`, `Nav` (desktop bar / mobile burger panel), `LangSwitcher`, and `ThemeToggle`.
- **Theming:** Light / dark / system toggle. An inline pre-paint script sets `data-theme` to avoid a flash of the wrong theme; the choice applies for the session but is only *persisted* across visits once functional storage is consented to.
- **Internationalization UX:** `LangSwitcher` keeps the visitor on the same page when switching locale by stripping and re-applying the locale prefix.
- **Privacy / consent:** Informational `CookieBanner` (strictly-necessary storage by default, shown only until a choice is made) plus a full `CookiePolicy` page. Consent state gates whether theme/preferences are persisted (see `consent.ts`).
- **Motion:** Progressive enhancement only — content is fully visible without JS. An `IntersectionObserver` fades blocks up on scroll, draws section rules in, and orchestrates the hero entrance; all of it is skipped under `prefers-reduced-motion`.
- **Visual signature:** Hand-drawn SVG line-art (UML sequence/activity diagrams, isometric layers, connectors) recurs across sections to carry the "spaceship instruction manual" aesthetic. Fonts: Space Grotesk + Inter, loaded async to avoid blocking first paint.

## Copywriting & Tone Guidelines

- **Tone:** Professional, authoritative, minimalist, and intellectually sharp.
- **Language:** Spanish (ES) and English (US)
- **Rules:**
  - Avoid generic corporate fluff (e.g., "passionate developer", "results-driven leader").
  - Use engineering and aerospace metaphors subtly (matching the spaceship manual theme) without becoming a caricature.
  - Focus on outcomes, systems thinking, and technical precision.

## Development Workflow & AI Guardrails

- **Code Style:** Functional, clean, and self-documenting code. Prefer early returns and meaningful variable names over comments.
- **Component Strategy:** Always design components with accessibility (ARIA) and responsive design (mobile-first) in mind.
- **Response Rule:** Keep explanations concise. When writing code, provide full file updates or clearly marked snippets to avoid placeholders like `// ... rest of the code`.
