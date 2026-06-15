# Design System — SPB Foundry

The visual and interaction language for the portfolio. This is the source of truth for *how things look and behave*; `CLAUDE.md` covers architecture and copy. When in doubt, the canonical implementation lives in `src/styles/global.css` (design tokens under `:root`, theme overrides under `[data-theme]`).

---

## 1. Design Concept

A fusion of **high-end luxury minimalism** and a **"spaceship instruction manual"** aesthetic. Every screen should read like a precision spec sheet: monochrome, hairline-ruled, numbered, annotated with technical line-art. The single accent color is the only warmth in the system — used like a status light, never as decoration.

Three governing principles:

1. **Restraint earns attention.** The palette is strict monochrome. The lone pop color appears only on CTAs, interactive cues, and one marked word per heading. If everything is highlighted, nothing is.
2. **Surfaces are physical.** Interactive controls (buttons, toggles, modules, cards) sit on a solid bottom *ledge* with a cast shadow — they read as hardware you can press. Press states collapse the ledge; hover states raise it.
3. **The manual is the brand.** Hand-drawn SVG line-art — UML sequence/activity/class diagrams, isometric stacking layers, connector wires — recurs as decorative backdrops at low opacity, masked into corners. It is always `aria-hidden`, never load-blocking, never essential to comprehension.

---

## 2. Color

### Primitives (theme-agnostic)

Defined once under `:root`, prefixed `--_` to mark them private. Never reference these directly in components — go through the semantic tokens.

| Dark ramp | Hex | | Light ramp | Hex |
|---|---|---|---|---|
| `--_dark-950` | `#0a0a0a` | | `--_light-50` | `#fafafa` |
| `--_dark-900` | `#141414` | | `--_light-100` | `#f0f0f0` |
| `--_dark-800` | `#1f1f1f` | | `--_light-200` | `#e0e0e0` |
| `--_dark-700` | `#2e2e2e` | | `--_light-400` | `#909090` |
| `--_dark-500` | `#666666` | | `--_light-700` | `#2a2a2a` |
| `--_dark-400` | `#888888` | | `--_light-900` | `#0f0f0f` |
| `--_dark-200…50` | `#bbbbbb`→`#f2f2f2` | | | |

### Accent (the one pop color)

| Token | Hex | Use |
|---|---|---|
| `--color-pop` | `#d7263d` | CTAs, interactive cues, one marked word per heading, focus rings, selection |
| `--color-pop-deep` | `#a81c30` | Button ledges, pressed/active states, hover fills |

The shimmer highlight `#ff7184` (lighter red) appears only inside animated gradients (`.hl`, `.accent`, beam sweeps).

### Semantic tokens (use these)

Resolved per theme under `[data-theme="dark"]` / `[data-theme="light"]`:

| Token | Role |
|---|---|
| `--color-bg` | Page background |
| `--color-surface` | Cards, controls, raised panels |
| `--color-surface-raised` | Recessed chips, selected segments, layer thickness |
| `--color-border` | Hairlines, card borders, ledges |
| `--color-accent` / `--color-accent-bright` | Max-contrast text (labels, logo) / pure black-or-white |
| `--color-text-primary` | Headings |
| `--color-text-secondary` | Body |
| `--color-text-tertiary` | Captions, descriptions, muted line-art |
| `--color-hairline` | Composite `1px solid` rule |

### Inverted band

Each theme also defines an `--inv-*` set that flips to the *opposite* palette. Used by the full-bleed Method/Approach band so it punches against the surrounding page (a dark band in light mode, a light band in dark mode). The band re-maps the shared section-header tokens locally — see `#approach` in `global.css`.

---

## 3. Typography

**One typeface for everything: Space Mono.** Loaded async (non-blocking) from Google Fonts; exposed as the `--font-mono` token (with a monospace fallback stack so first paint lands on a fixed-width face). Every `font-family` in the system references `var(--font-mono)` — there are no other families.

| Token | Value | Role |
|---|---|---|
| `--font-mono` | `"Space Mono", ui-monospace, "SFMono-Regular", "Fira Code", monospace` | Everything — display, headings, body, labels, spec folios, tags |

> **Weight is binary.** Space Mono ships only **400** (regular) and **700** (bold), plus italics. Every declaration in the codebase is normalized to one of these two — the old 300/500 collapsed to **400**, the old 600/800 to **700**. Hierarchy leans on **size, tracking, case, and color**, not fine-grained weight steps. When adding type, pick regular *or* bold; do not introduce 300/500/600/800.

### Type scale (fluid via `clamp`)

| Token | Value | Use |
|---|---|---|
| `--t-display` | `clamp(3rem, 9vw, 7.5rem)` | Hero title |
| `--t-headline` | `clamp(2.25rem, 5vw, 4.25rem)` | Section titles |
| `--t-subhead` | `clamp(1rem, 1.6vw, 1.25rem)` | Sub-headings |
| `--t-body` | `0.9375rem` | Body |
| `--t-caption` | `0.8125rem` | Captions |
| `--t-label` | `0.625rem` | Eyebrows, labels, button text, tags |

Lead paragraphs (`.about-lead`, `.svc-lead`, `.ai-lead`, `.contact-lead`) set their own larger `clamp` at weight 400.

### Tracking & weight conventions

- **Display/headings:** bold (700), *negative* letter-spacing (`-0.035em` to `-0.05em`), tight line-height (0.88–1.15). Mobile eases tracking so heavy letters don't collide (`@media max-width: 600px`).
- **Labels/eyebrows:** regular or bold (400/700), *positive* tracking (`0.18em`–`0.28em`), `text-transform: uppercase`.
- **Numerals:** `font-variant-numeric: tabular-nums` on spec folios so columns align.
- **Marked word:** wrap one word per heading in `.accent` / `.hl` → `--color-pop` at the heading's own weight. Under `.motion` it gets the shimmer sweep.

---

## 4. Spacing & Layout

### Scale

| Token | Value |
|---|---|
| `--space-xs` | `0.5rem` |
| `--space-s` | `1rem` |
| `--space-m` | `2rem` |
| `--space-ml` | `3rem` (fills the 2→5rem gap) |
| `--space-l` | `5rem` |
| `--space-xl` | `clamp(4.5rem, 9vw, 10rem)` (section padding; tightens on mobile) |

### Containers

- **Page:** `.page` — `max-width: 1100px`, centered, `--space-m` gutter (`--space-s` on ≤640px).
- **Reading width:** content blocks cap at `760px`; prose lines cap at `56–58ch`.
- **Sections:** `--space-xl` vertical padding; `scroll-margin-top: 72px` to clear the sticky header on anchor jumps.
- **Full-bleed band:** break out with `margin-inline: calc(50% - 50vw)`, then re-align inner content to the page gutter with `padding-inline: max(--space-m, calc(50vw - 550px + --space-m))`.

### Radius

Corners are nearly square — this is a technical document, not a soft consumer app. `--radius-xs: 2px`; buttons use `3px`; nothing exceeds `4px` except circular avatars/dots (`50%`).

### Dividers & asymmetry

- Sections separate with a 1px top rule (`section::before`) that **draws in from the left** under `.motion`.
- Lists deliberately stagger: Experience items zigzag (`nth-child(even) { margin-left: auto }`); Services modules interlock in two columns with an offset row; Approach cards use uneven 12-col grid spans with staggered baselines; project cards step down across the row. Asymmetry is intentional — it reads as a hand-laid spec sheet, not a CMS grid.

---

## 5. Theming

- Three modes: **light / dark / system**, driven by `data-theme` on `<html>`.
- An **inline pre-paint script** in `BaseLayout` sets `data-theme` from `localStorage` before first paint to kill the flash-of-wrong-theme. Default is `light`.
- `ThemeToggle` is a 3-segment control. The chosen theme applies for the session immediately but is only **persisted** once functional storage is consented to (`getConsent() === "accept"`; see `consent.ts`). System mode subscribes to `prefers-color-scheme` and updates live.
- Body transitions `background`/`color` at `0.25s ease` so theme switches glide rather than snap.

---

## 6. Components & Patterns

### The 3D "ledge" control (signature interaction)

The tactile-hardware look shared by buttons, the theme/lang toggles, and service modules:

- **Rest:** `box-shadow: 0 Npx 0 0 <ledge-color>, 0 Mpx Kpx rgba(0,0,0,α)` — a solid offset edge (the thickness) plus a soft cast shadow (the float).
- **Hover:** `translateY(-1px to -2px)` + taller ledge + bigger cast shadow → lifts.
- **Active:** `translateY(+4px)` + collapsed shadow → the cap drops onto the ledge.
- **Selected segment** (toggles, service code chips): recessed via `box-shadow: inset …` — pushed *into* the surface.

Buttons: `.btn` base, `.btn-primary` (pop fill, deep ledge), `.btn-ghost` (surface fill, border ledge → pop on hover). Transition timing: color `0.15s`, transform `0.08s`.

### Section header

`SectionHeader.astro` → `num` (`/ 01` spec folio, `aria-hidden`, mono) + `label` (uppercase eyebrow) + `title` (string, or marked segments where one fragment gets `.accent`). The folio left-indents the title block.

### Cards

- **Experience (list):** ruled rows, zigzag alignment, mono tags.
- **Experience (bento):** `full` (8 tiles) / `curated` (3 tiles) layouts on a 6-col grid; accent top edge (3px) with a **beam that sweeps the top rail** on hover/focus.
- **Side projects:** flip cards (`rotateY(180deg)` on hover/focus) — browser-window mock front (traffic-light dots, per-project generated CSS pattern, centered logo) → description back. A **conic-gradient beam** orbits the border on hover via the `@property --proj-beam-angle` animation.
- **Service modules:** ledge cards; the mono `svc-code` chip and border go pop on hover/focus.

### Decorative line-art

UML/isometric SVG backdrops (`.hero-uml`, `.about-layers`, `.svc-uml`, `.contact-uml`, plus mobile-only `.hero-cls` / `.contact-sm`). Conventions:

- Anchored to a corner (usually bottom-right), `z-index: -1`, `pointer-events: none`, `aria-hidden`.
- Low opacity (`0.1`–`0.5`), `currentColor` = a muted text token.
- **Masked** with layered `linear-gradient` masks (`mask-composite: intersect`) so they fade *toward the text* and stay in their corner.
- The lowest/top element often carries the pop accent (`--accent` variants) as the "lit" part of the diagram.
- Stroke vocabulary mirrors real UML: solid edges, dashed lifelines/returns (`stroke-dasharray`), filled arrowheads, dashed footprints for isometric bases.

---

## 7. Motion

Strictly **progressive enhancement** — all content is fully visible and usable without JS. A single `IntersectionObserver` in `BaseLayout` adds the `.motion` class to `<html>` and orchestrates reveals.

| Effect | Mechanism |
|---|---|
| Content fade-up | `.reveal` → `.is-visible`: `translateY(16px)`→`none`, opacity 0→1 |
| Stagger | `transition-delay` on `nth-child` (cards sharing a row: +0.08s steps) |
| Section rule draw-in | `scaleX(0)→scaleX(1)` on the top hairline |
| Hero entrance | Orchestrated on load via double `requestAnimationFrame` |
| Accent shimmer | 6s gradient sweep across marked words |
| CTA arrow breathe | 1.6s `translateX` loop; pauses on hover |
| Approach/AI connector wires | Animated `stroke-dashoffset` pulse along SVG paths; ticks draw in via `scaleX` |
| Beams (bento rail, project border) | Animated gradient position / `@property` angle |

### Timing tokens

- `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` — the reveal easing
- `--dur-reveal: 0.6s` · `--dur-rule: 0.7s`

### `prefers-reduced-motion`

Non-negotiable. The reduced-motion block kills **all** transitions and animations (`* { transition: none !important; animation: none !important }`), disables smooth scroll, and the JS short-circuits before adding `.motion` — so no observer runs at all. Beams fall back to a static pop fill; press/lift transforms are removed.

---

## 8. Accessibility

- **Focus:** visible `--focus-ring` (`2px solid --color-pop`) with `--focus-offset`; solid-fill controls get extra offset. Keyboard-reachable cards expose a real ring via `:focus-within` (the decorative beam alone is not a focus indicator).
- **Decorative art is `aria-hidden`** and never carries meaning.
- **Color is never the only signal** — state also changes shadow, border, position, or text.
- **Mobile-first, responsive.** Breakpoints in use: `1024`, `900`, `860/859`, `720`, `640`, `600`, `560`px. Grids collapse to single-column stacks; the project grid becomes a snap-scroll carousel ≤859px; tap targets stay ≥ comfortable size.
- **Selection** uses the pop color with white text for contrast.

---

## 9. Voice in the UI

Copy lives in `src/i18n/` (never hardcoded). Tone: professional, authoritative, minimalist, technically precise. Engineering/aerospace metaphors used *subtly* — the spec-folio numbering, "modules," UML diagrams, and instrument-readout mono type carry the theme without caricature. Avoid corporate fluff. Lead with outcomes and systems thinking.

---

## 10. Adding to the system

1. **Reach for tokens first.** New spacing/color/type should map to an existing token. If it genuinely doesn't exist, add a token under `:root` — don't inline a magic number.
2. **Semantic over primitive.** Components reference `--color-*` semantic tokens, never `--_dark-*` / `--_light-*` directly, so theming stays automatic.
3. **One accent rule.** A new section gets at most one marked word and pop only on its interactive affordance.
4. **Physical controls** use the ledge pattern; recessed/selected states use `inset` shadow.
5. **Decorative art** is corner-anchored, masked toward the text, `aria-hidden`, low-opacity, `currentColor`.
6. **Every animation** is gated behind `.motion` and has a static fallback; verify under `prefers-reduced-motion`.
7. **Mobile-first.** Author the stacked layout, then layer wide-screen asymmetry in `min-width` queries.

## Appendix — Reference & Inspiration

Visual/UX references that informed this system. Not canonical — ideas only.

[AltiusLabs](https://www.altiuslabs.xyz/) - Inspiration for low fidelity drawings
[MakingSoftware](https://www.makingsoftware.com/) - Steal the engineering and blueprint vibes
[Playerzero](https://playerzero.ai/) - Inspiration for clean and minimal design for "starship manual concept"
[Revolut](https://www.revolut.com/) - Inspiration for animations and transitions
[Factory](https://factory.ai/) - Inspiration for software page when focusing on "starship manual concept"