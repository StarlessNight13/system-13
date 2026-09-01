"use client"

import * as React from "react"

export function Tabs({ items, defaultValue, onValueChange, className = "" }: { items: Array<{ value: string; label: React.ReactNode }>; defaultValue?: string; onValueChange?: (value: string) => void; className?: string }) {
  const [value, setValue] = React.useState(defaultValue ?? items[0]?.value)
  const select = (next: string) => { setValue(next); onValueChange?.(next) }
  return <div className={`s13-tabs ${className}`} role="tablist">{items.map(item => <button key={item.value} role="tab" aria-selected={value === item.value} className="s13-tabs__tab" onClick={() => select(item.value)}>{item.label}</button>)}</div>
}

export const tabsStyles = `
.s13-tabs{display:flex;align-items:flex-end;gap:2px;border-bottom:1px solid var(--s13-border)}
.s13-tabs__tab{position:relative;border:0;background:transparent;color:var(--s13-muted);padding:9px 12px;cursor:pointer}
.s13-tabs__tab:hover{color:var(--s13-foreground)}
.s13-tabs__tab[aria-selected="true"]{color:var(--s13-foreground)}
.s13-tabs__tab[aria-selected="true"]::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:3px;background:var(--s13-accent)}
.s13-tabs__tab:focus-visible{outline:1px solid var(--s13-accent);outline-offset:2px}
`
