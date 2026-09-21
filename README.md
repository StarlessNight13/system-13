# System 13

System 13 is a TUI-inspired web design system and shadcn-compatible code registry, influenced by the visual language of System24.

## Repository

- `SKILL.md` — canonical visual and interaction rules for System 13
- `registry.json` — shadcn source registry catalog
- `registry/system13/` — canonical component source and theme CSS
- `registry/system13/system13-daisyui.css` — standalone daisyUI 5 adapter for non-React websites
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

## Use System 13 with daisyUI 5 (no React required)

System 13 also includes a standalone CSS adapter for normal HTML websites that use daisyUI 5.

The adapter does **not** replace your daisyUI theme. It keeps the active daisyUI colors, semantic variants, sizes, and component markup, then applies the System 13 structural language on top: square geometry, restrained borders, bracket actions, rail controls, monospace UI text, functional motion, and reduced shadows.

This means normal daisyUI markup stays normal:

```html
<button class="btn btn-primary">Save</button>
<input class="input input-primary" placeholder="Username" />
<input type="checkbox" class="toggle toggle-primary" checked />
<div class="badge badge-success">Online</div>
```

You do not need React and you do not need `s13-*` classes.

### Option 1: plain HTML / CDN

Load daisyUI first and the System 13 adapter last:

```html
<link
  href="https://cdn.jsdelivr.net/npm/daisyui@5"
  rel="stylesheet"
  type="text/css"
/>

<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<link
  href="https://cdn.jsdelivr.net/gh/StarlessNight13/system-13@main/registry/system13/system13-daisyui.css"
  rel="stylesheet"
/>
```

The last stylesheet is the important part. It lets System 13 override daisyUI component structure without replacing daisyUI theme variables.

### Option 2: Tailwind CSS + daisyUI build

Keep your normal daisyUI setup:

```css
@import "tailwindcss";
@plugin "daisyui";
```

Copy the adapter into your project:

```bash
curl -L   https://raw.githubusercontent.com/StarlessNight13/system-13/main/registry/system13/system13-daisyui.css   -o public/system13-daisyui.css
```

Then load it after your compiled Tailwind/daisyUI stylesheet:

```html
<link href="/output.css" rel="stylesheet" />
<link href="/system13-daisyui.css" rel="stylesheet" />
```

If your project uses a different asset directory, put `system13-daisyui.css` there instead. The only requirement is that the adapter is loaded after the daisyUI CSS.

### Themes still work

Because the adapter reads daisyUI variables instead of redefining them, theme switching continues to work:

```html
<html data-theme="dracula">
  ...
</html>
```

You can still use classes such as:

```html
<button class="btn btn-error">Delete</button>
<button class="btn btn-outline btn-secondary">Cancel</button>
<div class="alert alert-warning">Check this value.</div>
<span class="badge badge-info">Syncing</span>
```

System 13 changes the component shape and interaction language. daisyUI continues to provide the active theme colors and semantic component states.

### Components currently adapted

The standalone adapter covers the common daisyUI building blocks used by System 13:

- Buttons and button variants
- Inputs, selects, textareas, and file inputs
- Checkboxes, radios, toggles, and ranges
- Tabs
- Cards, collapses, stats, and modals
- Alerts and badges
- Tables
- Menus and lists
- KBD and skeleton
- Progress
- Common navbar/footer depth cleanup

The adapter is intentionally separate from `system13.css`. React/shadcn users can continue to use the native System 13 components, while plain HTML/daisyUI projects can use `system13-daisyui.css` without changing their component markup.

You can also install the adapter through the registry:

```bash
npx shadcn@latest add StarlessNight13/system-13/system-13-daisyui
```

That command is only a distribution convenience. The resulting file is plain CSS and has no React dependency.


## CSS releases

GitHub Actions publishes `registry/system13/system13-daisyui.css` as a release asset named `system13-daisyui.css`.

For websites that want the latest released CSS instead of tracking `main`, use:

```html
<link
  href="https://github.com/StarlessNight13/system-13/releases/latest/download/system13-daisyui.css"
  rel="stylesheet"
/>
```

### Create a release with a tag

Create and push a semantic version tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

The `Release CSS` GitHub Actions workflow creates the GitHub Release, generates release notes, and attaches `system13-daisyui.css`.

### Create a release manually

Open the repository on GitHub, go to **Actions → Release CSS → Run workflow**, and enter a version tag such as:

```text
v0.1.0
```

If the tag does not exist, the workflow creates the release and tag from the selected branch commit. If the release already exists, the workflow replaces its CSS asset.

Release tags must start with `v` and use semantic-version style numbering, for example `v0.1.0` or `v0.2.0-beta.1`.

## Design principle

**Text communicates meaning. Structure communicates state.**

System 13 uses square geometry, thin borders, partial bracket borders, restrained accent color, monospace typography, and functional motion instead of rounded SaaS controls, pills, gradients, glass effects, or heavy shadows.
