"use client"

import * as React from "react"

export function Accordion({ items, defaultOpen, className = "" }: { items: Array<{ id: string; title: React.ReactNode; content: React.ReactNode }>; defaultOpen?: string; className?: string }) {
  const [open, setOpen] = React.useState(defaultOpen ?? items[0]?.id)
  return <div className={`s13-accordion ${className}`}>{items.map(item => { const active = open === item.id; return <section key={item.id} className="s13-accordion__item" data-open={active}><button type="button" aria-expanded={active} onClick={() => setOpen(active ? "" : item.id)}><span>{item.title}</span><span>{active ? "−" : "+"}</span></button>{active && <div className="s13-accordion__content">{item.content}</div>}</section> })}</div>
}

export const accordionStyles = `
.s13-accordion{display:grid;gap:6px}.s13-accordion__item{border:1px solid var(--s13-border);transition:border-color var(--s13-transition)}.s13-accordion__item[data-open="true"]{border-color:var(--s13-accent)}.s13-accordion__item>button{width:100%;min-height:44px;display:flex;align-items:center;justify-content:space-between;gap:12px;border:0;background:transparent;color:var(--s13-foreground);padding:10px 12px;text-align:left;cursor:pointer}.s13-accordion__item[data-open="true"]>button{background:var(--s13-accent-soft)}.s13-accordion__content{border-top:1px solid var(--s13-border);padding:12px;color:var(--s13-muted);font-size:12px;line-height:1.5}
`
