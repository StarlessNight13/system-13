# System 13 — Canonical Components

This file records the component directions selected during the initial System 13 design pass. These are product decisions, not alternative concepts.

| Component | Canonical direction |
| --- | --- |
| Input | Material-style floating label; label starts inside and moves into top border on focus/filled |
| Button | CSS bracket borders; clean text label |
| Toggle | Bracket toggle |
| Switch | Cursor rail |
| Menu item | Box marker with filled inner core when active |
| Tabs | Rail tabs; short accent rail marks active tab |
| Tooltip | Compact square box |
| Panel | Labeled frame |
| Dialog | Labeled/focused panel |
| Checkbox | Split frame |
| Radio | Square core |
| Select | Attached menu rows with square selection marker |
| Status | Bracket status |
| Notification | Header line; semantic status in a thin header region |
| Table | Full grid |
| Textarea | Fixed label in top border |
| Progress | Cell strip |
| Slider | Thin rail with block thumb |
| Skeleton | Framed skeleton blocks |
| Pagination | Counter: PREV + current/total + NEXT |
| Breadcrumbs | Divider path with vertical separators and active rail |
| Separator | Terminal rail with end caps |
| Popover | Border label |
| Accordion | Framed sections |
| Command/Menu list | Indexed list with thin active rail |
| Avatar | Bracket frame |
| KBD | Square keycap with bottom rail |
| Card | Labeled frame |
| Empty state | Terminal state |
| Alert / inline message | Inline marker |
| Code block | Header rail |
| Spinner | Cell cycle |
| File upload | Dashed drop zone |

## Shared interaction rules

- `0px` radius by default.
- `1px` structural borders.
- Muted borders at rest; mauve/accent border on hover and focus.
- Active/selected state may combine accent border, subtle accent fill, a filled square core, or a short accent rail.
- Prefer geometry, borders, spacing, and CSS pseudo-elements over literal terminal punctuation.
- Do not put decorative brackets in button/toggle/status strings.
- Keep motion functional and restrained (roughly 120–180ms).
- Text communicates meaning. Structure communicates state.
