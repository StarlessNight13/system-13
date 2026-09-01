"use client"

import * as React from "react"

export function Popover({ trigger, label = "OPTIONS", children, className = "" }: { trigger: React.ReactNode; label?: string; children: React.ReactNode; className?: string }) {
  const [open, setOpen] = React.useState(false)
  return <div className={`s13-popover ${className}`} data-open={open}><span onClick={() => setOpen(v => !v)}>{trigger}</span>{open && <div className="s13-popover__panel" data-label={label}>{children}</div>}</div>
}

export const popoverStyles = `
.s13-popover{position:relative;display:inline-block}.s13-popover__panel{position:absolute;left:50%;top:calc(100% + 10px);z-index:30;width:240px;transform:translateX(-50%);border:1px solid var(--s13-accent);background:var(--s13-surface);padding:18px 12px 12px}.s13-popover__panel::before{content:attr(data-label);position:absolute;top:-8px;left:10px;padding:0 6px;background:var(--s13-surface);color:var(--s13-accent);font:700 10px/16px var(--s13-font-mono);letter-spacing:.08em}
`
