# System 13

System 13 is a TUI-inspired web design system and shadcn-compatible code registry, influenced by the visual language of System24.

## Repository

- `SKILL.md` — canonical visual and interaction rules for System 13
- `registry.json` — shadcn source registry catalog
- `registry/system13/` — canonical component source and theme CSS
- `src/pages/` — Astro site pages and one MDX page per component
- `src/components/docs/` — shared documentation UI
- `src/data/components.ts` — component catalog and API metadata

## Initial components

- Button — CSS bracket-border action
- Input — Material-style floating label with square borders
- Toggle — bracket-border ON/OFF control
- Switch — terminal rail with moving block cursor
- Menu Item — square active-state marker

## Develop

```bash
bun install
bun run dev
```

Component documentation is available at `/components/`. Each MDX page includes a live preview, source tab, installation command, attributes, variables, variants, sizes, and composition reference.

Build the static registry payloads used by the showcase site:

```bash
bun run build:registry
```

Shadcn writes generated items to `public/r`.

## Install from GitHub

Because this repository is public, shadcn can consume it directly as a GitHub registry:

```bash
npx shadcn@latest add StarlessNight13/system-13/system-13
```

Or install one primitive:

```bash
npx shadcn@latest add StarlessNight13/system-13/system-13-button
```

The initial style is installed to `app/system13.css`; import it from your root stylesheet or layout.

## Design principle

**Text communicates meaning. Structure communicates state.**

System 13 uses square geometry, thin borders, partial bracket borders, restrained accent color, monospace typography, and functional motion instead of rounded SaaS controls, pills, gradients, glass effects, or heavy shadows.
