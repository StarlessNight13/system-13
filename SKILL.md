# System 13 UI Design Skill

## Purpose
System 13 is a TUI-inspired web design system influenced by System24. Apply it as a modern web UI language, not as literal terminal ASCII art.

## Core language
- Square geometry; default radius is `0`.
- Use thin `1px` structural borders.
- Prefer borders, partial borders, rails, spacing, alignment, and compact typography over shadows or decorative cards.
- Resting borders are muted. Hover, focus, active, and selected states use the accent color.
- Accent is restrained; it should identify interaction and state rather than flood surfaces.
- Prefer monospace typography for controls, labels, navigation, metadata, and technical content.
- Structural labels may sit inside/cut through the top border.
- Motion is short and functional, roughly 120–180ms.
- Text communicates meaning. Structure communicates state.

## Avoid
- Pills and rounded SaaS controls.
- Large border radii.
- Gradients, glassmorphism, and heavy shadows.
- Literal ASCII decoration when CSS borders can communicate the same structure.
- Decorative brackets in button, toggle, or status text.
- Excessive nested cards.

## Canonical components

### Input
Material-style floating label. The label begins inside an empty input and moves into the top border on focus or when filled. Hover/focus changes the border to accent.

### Button
Bracket-like partial borders built with CSS pseudo-elements. The text contains only the action. Primary may use a subtle accent surface; destructive uses semantic danger.

### Toggle
Bracket toggle with plain ON/OFF text. Active state uses accent brackets and a subtle accent surface.

### Switch
Cursor rail: a horizontal terminal rail with a rectangular block cursor moving between positions. Never use a rounded pill track.

### Menu item
Small square selection marker. Inactive is empty; active uses an accent border plus filled inner core.

### Tabs
Rail tabs. Flat text sits on a horizontal separator; active tab gets a short thick accent rail underneath.

### Tooltip
Compact square box with a full 1px accent border and tight padding.

### Panel and dialog
Square 1px frame. A structural title may cut into the top border. Dialog is a focused panel, not a rounded modal card.

### Checkbox
Split-frame square control using the partial-border family. Checked state fills a small accent core.

### Radio
Square outer frame with a small square center fill. Exclusivity comes from behavior, not circular geometry.

### Select
Square field with compact metadata/value. Open menu attaches directly below the trigger; rows use subtle separators and square selection markers.

### Status
Compact CSS bracket label. Semantic variants may use accent, danger, warning, or muted colors.

### Notification
Header-line notification. Full square frame with a thin header region separated by a semantic-colored line; status lives in the header and message body sits below.

### Table
Full grid. Use visible 1px cell boundaries. Selection/hover may use a subtle accent surface.

### Textarea
Fixed border label. The label always sits in the top border; textarea is vertically resizable and behaves more like a content panel.

### Progress
Cell strip. Progress is represented by discrete rectangular cells filled one-by-one.

### Slider
Thin rail with an accent completed portion and a square block thumb containing a smaller accent core.

### Skeleton
Framed rectangular skeleton blocks with 1px borders and subtle accent-tinted fill. Never rounded.

### Pagination
Counter pagination: bracket PREV/NEXT controls around a compact `current / total` state indicator.

### Breadcrumbs
Divider path. Levels are separated by thin vertical dividers; current level is stronger and gets a short accent rail.

### Separator
Terminal rail: a 1px horizontal line with small vertical end caps.

### Popover
Border-label popover. Reuse the canonical labeled panel treatment for contextual floating content.

### Accordion
Framed sections. Each section is independently bordered; the open section takes the accent frame and may use a subtle accent surface.

### Command / menu list
Indexed list. Use small numeric indexes, horizontal row separators, and a thin accent rail for the active row.

### Avatar
Bracket frame. Use partial side borders around initials/image and a small square status indicator.

### KBD
Square keycap with a 1px frame and stronger bottom rail. No rounded keyboard keys.

### Card
Labeled frame. Reuse the top-border label treatment; hoverable cards change border to accent.

### Empty state
Terminal state. Present a compact status label such as EMPTY, descriptive copy, and an optional bracket action inside a restrained frame.

### Alert / inline message
Inline marker. Use top/bottom rails or minimal separators plus a small square semantic marker; keep it lighter than a notification.

### Code block
Header rail. Use a square frame with a thin header row for language/file metadata and a code region below.

### Spinner
Cell cycle. Animate a small sequence of discrete square cells rather than a circular spinner.

### File upload
Dashed drop zone. Square dashed frame, compact geometric upload mark, and accent border on hover/drag state.

## Interaction states
- idle: muted structure
- hover: accent border/rail
- focus: clearly visible accent state
- selected: accent structure plus filled square core, rail, or subtle accent surface
- disabled: reduced contrast and no misleading hover treatment
