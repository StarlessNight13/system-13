"use client"

import * as React from "react"

export function Checkbox({ label, checked, defaultChecked, onCheckedChange, className = "", ...props }: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & { label?: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onCheckedChange?: (checked: boolean) => void }) {
  const [internal, setInternal] = React.useState(defaultChecked ?? false)
  const value = checked ?? internal
  const toggle = () => { const next = !value; if (checked === undefined) setInternal(next); onCheckedChange?.(next) }
  return <button type="button" role="checkbox" aria-checked={value} className={`s13-checkbox ${className}`} onClick={toggle} {...props}><span className="s13-checkbox__frame"><i /></span>{label && <span>{label}</span>}</button>
}

export const checkboxStyles = `
.s13-checkbox{display:inline-flex;align-items:center;gap:9px;border:0;background:transparent;color:var(--s13-foreground);padding:4px 0;cursor:pointer}
.s13-checkbox__frame{position:relative;width:18px;height:18px}
.s13-checkbox__frame::before,.s13-checkbox__frame::after{content:"";position:absolute;top:0;bottom:0;width:6px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border)}
.s13-checkbox__frame::before{left:0;border-left:1px solid var(--s13-border)}.s13-checkbox__frame::after{right:0;border-right:1px solid var(--s13-border)}
.s13-checkbox__frame i{position:absolute;inset:5px;background:transparent}
.s13-checkbox:hover .s13-checkbox__frame::before,.s13-checkbox:hover .s13-checkbox__frame::after,.s13-checkbox[aria-checked="true"] .s13-checkbox__frame::before,.s13-checkbox[aria-checked="true"] .s13-checkbox__frame::after{border-color:var(--s13-accent)}
.s13-checkbox[aria-checked="true"] .s13-checkbox__frame i{background:var(--s13-accent)}
`
