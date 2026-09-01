# System 13 UI Design Skill

## Purpose
System 13 is a TUI-inspired web design system influenced by System24. Apply it as a modern web UI language, not as literal terminal ASCII art.

## Core rules
- Use square corners and 1px borders.
- Prefer borders, spacing, partial borders, and alignment over shadows and decorative cards.
- Default interactive borders are muted; hover, focus, and selection use the accent color.
- Accent color communicates interaction and active state. Do not flood large surfaces with it.
- Prefer monospace typography for controls, labels, navigation, and metadata.
- Structural labels may be uppercase; normal content does not need to be.
- Avoid pills, gradients, glassmorphism, large shadows, excessive cards, and rounded SaaS controls.

## Component rules
### Input
Use a Material-inspired floating label. The label begins inside an empty input and moves into the top border on focus or when filled. Keep corners square.

### Button
Buttons use bracket-like partial borders built with CSS or pseudo-elements. The label itself contains only the action. Never put literal `[` or `]` characters in button text.

### Toggle
A Toggle is a compact ON/OFF control using the same CSS bracket-border language as buttons.

### Switch
A Switch uses a horizontal rail and a rectangular moving block cursor. Never use a rounded pill track.

### Menu item
Use a small CSS square marker. Inactive items show an empty square. Active items use an accent border and filled inner square. Do not use a `>` character as the canonical marker.

### Checkboxes and radios
Use square geometry with a small filled inner core for selected state. Radios may remain square; exclusivity comes from behavior rather than circular shape.

### Select
Dropdown menus attach directly to the field. Avoid floating rounded dropdown cards.

### Status
Use compact bracket-border labels. Brackets are structural CSS, not text characters.

### Panels
Use square 1px borders and optional labels interrupting the top border. Avoid nesting cards without a structural reason.

## Interaction
- idle: muted border
- hover: accent border
- focus: clearly visible accent state
- selected: accent border plus structural selection marker
- disabled: reduced contrast and no misleading hover state
- motion: functional and restrained, usually 120–180ms

## Principle
Text communicates meaning. Structure communicates state.
