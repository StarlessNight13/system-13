export type ApiRow = readonly [name: string, type: string, description: string]

export type ComponentInfo = {
  slug: string
  name: string
  description: string
  source: string
  exportName: string
  registryItem: string
  importPath: string
  dependencies: readonly string[]
  registryDependencies: readonly string[]
  attributes: readonly ApiRow[]
  variants: readonly ApiRow[]
  sizes: readonly ApiRow[]
  variables: readonly string[]
  composition: string
  example: string
}

const none: ApiRow = ["—", "—", "No named options."]
const baseVariables = ["--s13-border", "--s13-surface", "--s13-foreground", "--s13-muted", "--s13-accent", "--s13-transition"]

export const components: readonly ComponentInfo[] = [
  {
    slug: "button", name: "Button", description: "Bracket-border action control.", source: "registry/system13/button.tsx", exportName: "Button", registryItem: "system-13-button", importPath: "@/components/ui/system13-button", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["variant", "default | outline | ghost | link", "Visual treatment."], ["color", "default | secondary | destructive", "Color treatment."], ["size", "default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg", "Button dimensions."], ["className", "string", "Additional classes."], ["...props", "ButtonHTMLAttributes<HTMLButtonElement>", "Native button attributes and events."]],
    variants: [["default", "—", "Accent surface and bracket border."], ["outline", "—", "Full transparent outline border."], ["ghost", "—", "Minimal treatment with hover surface."], ["link", "—", "Accent text action without a frame."]], sizes: [["default", "—", "Standard button height."], ["xs", "—", "Extra-small button."], ["sm", "—", "Small button."], ["lg", "—", "Large button."], ["icon", "—", "Square standard icon button."], ["icon-xs", "—", "Square extra-small icon button."], ["icon-sm", "—", "Square small icon button."], ["icon-lg", "—", "Square large icon button."]], variables: ["--s13-border", "--s13-surface", "--s13-surface-2", "--s13-accent", "--s13-accent-soft", "--s13-danger", "--s13-muted", "--s13-foreground", "--s13-transition"], composition: "Pass the action label or custom children. Use variant for structure and color for semantic emphasis. Native button attributes such as disabled, type, and onClick are forwarded.", example: "<Button variant=\"outline\" color=\"destructive\">DELETE</Button>",
  },
  {
    slug: "button-group", name: "Button Group", description: "Connected rail for related actions.", source: "registry/system13/button.tsx", exportName: "ButtonGroup", registryItem: "system-13-button-group", importPath: "@/components/ui/system13-button", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["className", "string", "Additional classes."], ["children", "ReactNode", "Button elements to connect."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native group container attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-accent", "--s13-transition"], composition: "Place related Button elements inside the group. The group removes individual bracket caps and joins the buttons with a shared rail.", example: "<ButtonGroup><Button>PREV</Button><Button>NEXT</Button></ButtonGroup>",
  },
  {
    slug: "input", name: "Input", description: "Square floating-label input.", source: "registry/system13/input.tsx", exportName: "Input", registryItem: "system-13-input", importPath: "@/components/ui/system13-input", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["label", "string", "Visible floating field label."], ["id", "string", "Optional input id."], ["...props", "InputHTMLAttributes<HTMLInputElement>", "Native input attributes and events."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-foreground", "--s13-muted", "--s13-accent", "--s13-transition"], composition: "Use label with native input attributes. The label floats when the field is focused or contains a value.", example: "<Input label=\"Project name\" placeholder=\"System 13\" />",
  },
  {
    slug: "textarea", name: "Textarea", description: "Fixed-border labeled textarea.", source: "registry/system13/textarea.tsx", exportName: "Textarea", registryItem: "system-13-components", importPath: "@/components/ui/system13-textarea", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["label", "string", "Border label."], ["className", "string", "Additional classes."], ["...props", "TextareaHTMLAttributes<HTMLTextAreaElement>", "Native textarea attributes and events."]], variants: [none], sizes: [none], variables: baseVariables, composition: "Use the component as a labeled native textarea. Its content area remains vertically resizable.", example: "<Textarea label=\"Notes\" placeholder=\"Write a note...\" />",
  },
  {
    slug: "toggle", name: "Toggle", description: "Bracket ON/OFF control.", source: "registry/system13/toggle.tsx", exportName: "Toggle", registryItem: "system-13-toggle", importPath: "@/components/ui/system13-toggle", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["pressed", "boolean", "Controlled pressed state."], ["defaultPressed", "boolean", "Initial uncontrolled state."], ["onPressedChange", "(pressed: boolean) => void", "Called after the state changes."], ["...props", "ButtonHTMLAttributes<HTMLButtonElement>", "Native button attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-accent-soft", "--s13-muted", "--s13-foreground", "--s13-transition"], composition: "Use controlled state when the parent owns the value; otherwise use defaultPressed. The component supplies ON/OFF text.", example: "<Toggle defaultPressed />",
  },
  {
    slug: "switch", name: "Switch", description: "Terminal rail switch with a moving cursor.", source: "registry/system13/switch.tsx", exportName: "Switch", registryItem: "system-13-switch", importPath: "@/components/ui/system13-switch", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["checked", "boolean", "Controlled checked state."], ["defaultChecked", "boolean", "Initial uncontrolled state."], ["onCheckedChange", "(checked: boolean) => void", "Called after the state changes."], ["label", "string", "Optional state label override."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-muted", "--s13-foreground", "--s13-transition"], composition: "The switch is a self-contained button with an accessible switch role. Supply label to replace the automatic ON/OFF state text.", example: "<Switch defaultChecked label=\"Enabled\" />",
  },
  {
    slug: "menu-item", name: "Menu Item", description: "Navigation row with a square selection marker.", source: "registry/system13/menu-item.tsx", exportName: "MenuItem", registryItem: "system-13-menu-item", importPath: "@/components/ui/system13-menu-item", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["active", "boolean", "Shows the selected marker state."], ["shortcut", "string", "Optional shortcut text."], ["...props", "ButtonHTMLAttributes<HTMLButtonElement>", "Native button attributes and events."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-accent-soft", "--s13-muted", "--s13-foreground"], composition: "Use MenuItem for navigation or indexed command surfaces. Pass children as the visible label and use active with aria-current semantics.", example: "<MenuItem active>COMPONENTS</MenuItem>",
  },
  {
    slug: "panel", name: "Panel", description: "Labeled structural frame for grouped content.", source: "registry/system13/primitives.tsx", exportName: "Panel", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["label", "string", "Text cut into the top border."], ["children", "ReactNode", "Panel content."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native section attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-muted", "--s13-transition"], composition: "Use Panel as a structural container. Nest content directly; avoid adding another decorative card when a panel already provides the frame.", example: "<Panel label=\"SETTINGS\">...</Panel>",
  },
  {
    slug: "card", name: "Card", description: "Labeled frame for standalone content.", source: "registry/system13/primitives.tsx", exportName: "Card", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["label", "string", "Text cut into the top border."], ["children", "ReactNode", "Card content."], ["...props", "HTMLAttributes<HTMLElement>", "Native article attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-muted", "--s13-transition"], composition: "Use Card for a self-contained piece of content inside a page or Panel. Put the primary heading and supporting copy inside.", example: "<Card label=\"COMPONENT\"><h3>Button</h3></Card>",
  },
  {
    slug: "separator", name: "Separator", description: "Terminal rail with capped ends.", source: "registry/system13/primitives.tsx", exportName: "Separator", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["className", "string", "Additional classes."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native separator attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent"], composition: "Place between related content groups. The component exposes role=separator for assistive technology.", example: "<Separator />",
  },
  {
    slug: "tooltip", name: "Tooltip", description: "Compact square contextual message.", source: "registry/system13/primitives.tsx", exportName: "Tooltip", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["children", "ReactNode", "Tooltip message."], ["className", "string", "Additional classes."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native tooltip attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-surface", "--s13-muted"], composition: "Tooltip is the visual message primitive. Pair it with your own trigger and visibility logic when building a fully interactive tooltip.", example: "<Tooltip>Helpful contextual information.</Tooltip>",
  },
  {
    slug: "status", name: "Status", description: "Compact semantic bracket label.", source: "registry/system13/primitives.tsx", exportName: "Status", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["tone", "accent | muted | danger | warning | success", "Semantic color treatment."], ["children", "ReactNode", "Status label."], ["...props", "HTMLAttributes<HTMLSpanElement>", "Native span attributes."]], variants: [["accent", "—", "Default interaction state."], ["muted", "—", "Low-emphasis state."], ["danger", "—", "Error or destructive state."], ["warning", "—", "Caution state."], ["success", "—", "Successful state."]], sizes: [none], variables: ["--s13-accent", "--s13-muted", "--s13-danger", "--s13-warning", "--s13-success", "--s13-border"], composition: "Use short, uppercase labels. Status communicates state through structure and semantic color rather than decoration.", example: "<Status tone=\"success\">READY</Status>",
  },
  {
    slug: "progress", name: "Progress", description: "Discrete cell-strip progress indicator.", source: "registry/system13/primitives.tsx", exportName: "Progress", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["value", "number", "Current progress value."], ["max", "number", "Maximum value; defaults to 100."], ["cells", "number", "Number of visual cells; defaults to 16."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native progressbar attributes."]], variants: [none], sizes: [["cells", "number", "Adjusts visual density rather than physical size."]], variables: ["--s13-border", "--s13-accent", "--s13-accent-soft"], composition: "Choose max and cells to match the precision of the task. The component exposes progressbar aria values.", example: "<Progress value={6} max={10} cells={10} />",
  },
  {
    slug: "pagination", name: "Pagination", description: "Counter pagination with PREV and NEXT controls.", source: "registry/system13/primitives.tsx", exportName: "Pagination", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["current", "number", "Current page number."], ["total", "number", "Total page count."], ["onPrevious", "() => void", "Previous-page handler."], ["onNext", "() => void", "Next-page handler."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-foreground", "--s13-muted"], composition: "Pass page state from the parent and wire onPrevious/onNext to your data or router. The component renders an accessible pagination nav.", example: "<Pagination current={2} total={12} onNext={goNext} />",
  },
  {
    slug: "breadcrumbs", name: "Breadcrumbs", description: "Divider path for hierarchical navigation.", source: "registry/system13/primitives.tsx", exportName: "Breadcrumbs", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["items", "Array<{ label: ReactNode; href?: string }>", "Path levels in display order."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-muted", "--s13-foreground"], composition: "Give every non-current item an href. The final item is rendered as the current page.", example: "<Breadcrumbs items={[{label: \"ROOT\", href: \"/\"}, {label: \"BUTTON\"}]} />",
  },
  {
    slug: "alert", name: "Alert", description: "Inline semantic message with a square marker.", source: "registry/system13/primitives.tsx", exportName: "Alert", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["label", "string", "Short semantic heading."], ["tone", "accent | danger | warning | success", "Semantic treatment."], ["children", "ReactNode", "Message body."], ["className", "string", "Additional classes."]], variants: [["accent", "—", "Informational message."], ["danger", "—", "Error message."], ["warning", "—", "Warning message."], ["success", "—", "Success message."]], sizes: [none], variables: ["--s13-accent", "--s13-danger", "--s13-warning", "--s13-success", "--s13-border"], composition: "Use Alert for inline feedback that belongs near the triggering content. Use Notification for a more prominent header/body message.", example: "<Alert label=\"INFO\">Your changes are saved.</Alert>",
  },
  {
    slug: "code-block", name: "Code Block", description: "Header-rail code display with language and filename metadata.", source: "registry/system13/primitives.tsx", exportName: "CodeBlock", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["language", "string", "Language label in the header."], ["filename", "string", "Optional filename label."], ["children", "ReactNode", "Code content."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-muted", "--s13-foreground"], composition: "Keep source content as children so the code remains copyable text. Add syntax highlighting separately if a project needs it.", example: "<CodeBlock language=\"TSX\">{`<Button>SAVE</Button>`}</CodeBlock>",
  },
  {
    slug: "empty-state", name: "Empty State", description: "Terminal state message with an optional action.", source: "registry/system13/primitives.tsx", exportName: "EmptyState", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["status", "string", "State label; defaults to EMPTY."], ["title", "string", "Primary empty-state heading."], ["children", "ReactNode", "Supporting copy."], ["action", "ReactNode", "Optional action control."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-surface", "--s13-accent", "--s13-muted"], composition: "Explain what is empty and offer one clear next action when possible. Keep the action as a child component.", example: "<EmptyState title=\"No results\">Try another query.</EmptyState>",
  },
  {
    slug: "spinner", name: "Spinner", description: "Discrete cell-cycle loading indicator.", source: "registry/system13/primitives.tsx", exportName: "Spinner", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["label", "string", "Accessible visible status label."], ["className", "string", "Additional classes."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native status attributes."]], variants: [none], sizes: [none], variables: ["--s13-accent", "--s13-muted", "--s13-transition"], composition: "Use alongside the operation or region being loaded. The default role=status announces the loading label.", example: "<Spinner label=\"LOADING\" />",
  },
  {
    slug: "avatar", name: "Avatar", description: "Bracket-framed identity marker.", source: "registry/system13/primitives.tsx", exportName: "Avatar", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["fallback", "ReactNode", "Initials, icon, or image content."], ["status", "boolean", "Shows the square status marker."], ["className", "string", "Additional classes."], ["...props", "HTMLAttributes<HTMLDivElement>", "Native div attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-success", "--s13-surface"], composition: "Use fallback for initials or a compact image. Add status when the identity has an online or active state.", example: "<Avatar fallback=\"SN\" status />",
  },
  {
    slug: "kbd", name: "KBD", description: "Square keyboard keycap with a stronger bottom rail.", source: "registry/system13/primitives.tsx", exportName: "Kbd", registryItem: "system-13-primitives", importPath: "@/components/ui/system13-primitives", dependencies: ["react"], registryDependencies: ["system-13-style"],
    attributes: [["children", "ReactNode", "Key label."], ["className", "string", "Additional classes."], ["...props", "HTMLAttributes<HTMLElement>", "Native kbd attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-foreground", "--s13-muted"], composition: "Use one Kbd per key. Combine multiple Kbd elements with a visible separator or gap for shortcuts.", example: "<Kbd>CTRL</Kbd><Kbd>K</Kbd>",
  },
  {
    slug: "tabs", name: "Tabs", description: "Rail tabs for switching between related views.", source: "registry/system13/tabs.tsx", exportName: "Tabs", registryItem: "system-13-components", importPath: "@/components/ui/system13-tabs", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["items", "Array<{ value: string; label: ReactNode }>", "Tab labels and values."], ["defaultValue", "string", "Initial active tab."], ["onValueChange", "(value: string) => void", "Called after selection."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-muted", "--s13-foreground"], composition: "Tabs manages the selected tab rail. Pair it with your own conditional panel content or use it as a compact navigation control.", example: "<Tabs items={[{value: \"preview\", label: \"PREVIEW\"}]} />",
  },
  {
    slug: "checkbox", name: "Checkbox", description: "Split-frame square boolean control.", source: "registry/system13/checkbox.tsx", exportName: "Checkbox", registryItem: "system-13-components", importPath: "@/components/ui/system13-checkbox", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["label", "ReactNode", "Optional visible label."], ["checked", "boolean", "Controlled checked state."], ["defaultChecked", "boolean", "Initial uncontrolled state."], ["onCheckedChange", "(checked: boolean) => void", "Called after toggling."], ["...props", "ButtonHTMLAttributes<HTMLButtonElement>", "Native button attributes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-foreground"], composition: "Use label for the visible description and control checked externally when the form owns the value. The component exposes role=checkbox.", example: "<Checkbox label=\"Enabled\" defaultChecked />",
  },
  {
    slug: "radio", name: "Radio Group", description: "Square exclusive-choice group.", source: "registry/system13/radio.tsx", exportName: "RadioGroup", registryItem: "system-13-components", importPath: "@/components/ui/system13-radio", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["options", "Array<{ value: string; label: ReactNode }>", "Available choices."], ["defaultValue", "string", "Initial selected value."], ["value", "string", "Controlled selected value."], ["onValueChange", "(value: string) => void", "Called after selection."], ["name", "string", "Accessible group label."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-foreground"], composition: "Provide stable option values and a name for context. Use controlled value/onValueChange for form state managed by a parent.", example: "<RadioGroup name=\"Mode\" options={[{value: \"a\", label: \"ALPHA\"}]} />",
  },
  {
    slug: "select", name: "Select", description: "Square trigger with an attached option menu.", source: "registry/system13/select.tsx", exportName: "Select", registryItem: "system-13-components", importPath: "@/components/ui/system13-select", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["label", "string", "Compact trigger label."], ["options", "Array<{ value: string; label: ReactNode }>", "Available options."], ["defaultValue", "string", "Initial uncontrolled value."], ["value", "string", "Controlled value."], ["onValueChange", "(value: string) => void", "Called after selection."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-accent-soft", "--s13-surface", "--s13-muted"], composition: "Options are rendered in the attached menu. Use controlled value/onValueChange when the selection drives external state.", example: "<Select label=\"Mode\" options={[{value: \"stable\", label: \"Stable\"}]} />",
  },
  {
    slug: "notification", name: "Notification", description: "Header-line message for prominent feedback.", source: "registry/system13/notification.tsx", exportName: "Notification", registryItem: "system-13-components", importPath: "@/components/ui/system13-notification", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["status", "string", "Header status label."], ["children", "ReactNode", "Message body."], ["tone", "accent | danger | warning | success", "Semantic treatment."], ["dismissLabel", "string", "Dismiss button label."], ["onDismiss", "() => void", "Enables the dismiss button."]], variants: [["accent", "—", "Default notification."], ["danger", "—", "Error notification."], ["warning", "—", "Warning notification."], ["success", "—", "Success notification."]], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-danger", "--s13-warning", "--s13-success", "--s13-surface"], composition: "Use Notification for feedback that needs a distinct header and body. Pass onDismiss only when the message can be dismissed.", example: "<Notification status=\"SUCCESS\" tone=\"success\">Saved.</Notification>",
  },
  {
    slug: "table", name: "Table", description: "Full-grid data table with visible cell boundaries.", source: "registry/system13/table.tsx", exportName: "Table", registryItem: "system-13-components", importPath: "@/components/ui/system13-table", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["columns", "string[]", "Column headings."], ["rows", "ReactNode[][]", "Rows and cell content."], ["className", "string", "Additional wrapper classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent-soft", "--s13-muted", "--s13-foreground"], composition: "Keep columns and rows aligned. Pass React nodes for cells that need statuses, actions, or other composed content.", example: "<Table columns={[\"NAME\", \"STATE\"]} rows={[[\"Button\", \"ACTIVE\"]]} />",
  },
  {
    slug: "slider", name: "Slider", description: "Thin rail with a square block thumb.", source: "registry/system13/slider.tsx", exportName: "Slider", registryItem: "system-13-components", importPath: "@/components/ui/system13-slider", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["value", "number", "Controlled value."], ["defaultValue", "number", "Initial uncontrolled value."], ["min", "number", "Minimum; defaults to 0."], ["max", "number", "Maximum; defaults to 100."], ["onValueChange", "(value: number) => void", "Called after movement."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-surface"], composition: "Use min and max to define the domain. The native range input is visually hidden but remains the interaction surface.", example: "<Slider defaultValue={62} min={0} max={100} />",
  },
  {
    slug: "skeleton", name: "Skeleton", description: "Framed loading placeholder block.", source: "registry/system13/skeleton.tsx", exportName: "Skeleton", registryItem: "system-13-components", importPath: "@/components/ui/system13-skeleton", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["width", "string | number", "Rendered width; defaults to 100%."], ["height", "string | number", "Rendered height; defaults to 18."], ["className", "string", "Additional classes."]], variants: [none], sizes: [["width", "string | number", "Set the block width."], ["height", "string | number", "Set the block height."]], variables: ["--s13-border", "--s13-accent-soft", "--s13-transition"], composition: "Match skeleton dimensions to the content it replaces. Remove it when the real content is ready.", example: "<Skeleton width=\"70%\" height={18} />",
  },
  {
    slug: "accordion", name: "Accordion", description: "Framed expandable sections.", source: "registry/system13/accordion.tsx", exportName: "Accordion", registryItem: "system-13-components", importPath: "@/components/ui/system13-accordion", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["items", "Array<{ id: string; title: ReactNode; content: ReactNode }>", "Expandable sections."], ["defaultOpen", "string", "Initially open item id."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-accent-soft", "--s13-foreground"], composition: "Give each item a stable id and concise title. The current implementation permits one open item at a time.", example: "<Accordion items={[{id: \"general\", title: \"GENERAL\", content: \"...\"}]} />",
  },
  {
    slug: "command-list", name: "Command List", description: "Indexed command menu with active rail.", source: "registry/system13/command-list.tsx", exportName: "CommandList", registryItem: "system-13-components", importPath: "@/components/ui/system13-command-list", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["items", "Array<{ id: string; label: ReactNode; shortcut?: ReactNode }>", "Command rows."], ["defaultActive", "string", "Initially active item id."], ["onSelect", "(id: string) => void", "Called after selection."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-muted", "--s13-foreground"], composition: "Use stable ids and short labels. The list handles active selection while the parent handles the selected command.", example: "<CommandList items={[{id: \"open\", label: \"Open\", shortcut: \"ENTER\"}]} />",
  },
  {
    slug: "popover", name: "Popover", description: "Border-label contextual floating panel.", source: "registry/system13/popover.tsx", exportName: "Popover", registryItem: "system-13-components", importPath: "@/components/ui/system13-popover", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["trigger", "ReactNode", "Element that opens the panel."], ["label", "string", "Panel border label."], ["children", "ReactNode", "Popover content."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-surface", "--s13-muted"], composition: "Pass a compact trigger and keep contextual content short. The trigger is toggled by the component and the panel is positioned beneath it.", example: "<Popover trigger={<Button>OPTIONS</Button>}>...</Popover>",
  },
  {
    slug: "file-upload", name: "File Upload", description: "Dashed drop zone with native file picker.", source: "registry/system13/file-upload.tsx", exportName: "FileUpload", registryItem: "system-13-components", importPath: "@/components/ui/system13-file-upload", dependencies: ["react"], registryDependencies: ["system-13-style", "system-13-primitives"],
    attributes: [["label", "string", "Primary upload message."], ["hint", "string", "Secondary upload message."], ["onFiles", "(files: FileList | null) => void", "Called when files are selected."], ["className", "string", "Additional classes."]], variants: [none], sizes: [none], variables: ["--s13-border", "--s13-accent", "--s13-muted", "--s13-surface"], composition: "Use onFiles to pass selected files to application state or an upload request. The drop-zone visual currently represents the native picker trigger.", example: "<FileUpload label=\"Upload source\" onFiles={handleFiles} />",
  },
]

export function getComponent(slug: string) {
  return components.find(component => component.slug === slug)
}
