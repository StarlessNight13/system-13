"use client"

import * as React from "react"

export function CommandList({ items, defaultActive, onSelect, className = "" }: { items: Array<{ id: string; label: React.ReactNode; shortcut?: React.ReactNode }>; defaultActive?: string; onSelect?: (id: string) => void; className?: string }) {
  const [active, setActive] = React.useState(defaultActive ?? items[0]?.id)
  return <div className={`s13-command ${className}`} role="menu">{items.map((item, index) => <button key={item.id} type="button" role="menuitem" data-active={active === item.id} onClick={() => { setActive(item.id); onSelect?.(item.id) }}><span className="s13-command__index">{String(index + 1).padStart(2,"0")}</span><span>{item.label}</span><span className="s13-command__shortcut">{item.shortcut}</span></button>)}</div>
}

export const commandListStyles = `
.s13-command{border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border)}.s13-command>button{width:100%;min-height:42px;display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;border:0;border-bottom:1px solid var(--s13-border);background:transparent;color:var(--s13-muted);padding:8px 8px;text-align:left;cursor:pointer}.s13-command>button:last-child{border-bottom:0}.s13-command>button:hover,.s13-command>button[data-active="true"]{color:var(--s13-foreground)}.s13-command>button[data-active="true"]{box-shadow:inset 3px 0 0 var(--s13-accent)}.s13-command__index{font-size:10px}.s13-command>button[data-active="true"] .s13-command__index{color:var(--s13-accent)}.s13-command__shortcut{font-size:10px;color:var(--s13-muted)}
`
