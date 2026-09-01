"use client"

import * as React from "react"

export function Select({ label, options, defaultValue, value, onValueChange, className = "" }: { label?: string; options: Array<{ value: string; label: React.ReactNode }>; defaultValue?: string; value?: string; onValueChange?: (value: string) => void; className?: string }) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState(defaultValue ?? options[0]?.value)
  const current = value ?? internal
  const selected = options.find(option => option.value === current)
  const select = (next: string) => { if (value === undefined) setInternal(next); onValueChange?.(next); setOpen(false) }
  return <div className={`s13-select ${className}`} data-open={open}><button type="button" className="s13-select__trigger" aria-expanded={open} onClick={() => setOpen(v => !v)}><span><small>{label}</small><b>{selected?.label}</b></span><i>↕</i></button>{open && <div className="s13-select__menu" role="listbox">{options.map(option => <button key={option.value} type="button" role="option" aria-selected={current === option.value} onClick={() => select(option.value)}><span className="s13-select__marker"><i /></span><span>{option.label}</span></button>)}</div>}</div>
}

export const selectStyles = `
.s13-select{position:relative;min-width:220px}.s13-select__trigger{width:100%;min-height:50px;display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--s13-border);background:var(--s13-surface);color:var(--s13-foreground);padding:7px 11px;text-align:left;cursor:pointer}.s13-select__trigger:hover,.s13-select[data-open="true"] .s13-select__trigger{border-color:var(--s13-accent)}.s13-select__trigger span{display:grid;gap:2px}.s13-select__trigger small{color:var(--s13-muted);font-size:9px;letter-spacing:.08em;text-transform:uppercase}.s13-select__trigger b{font-size:12px}.s13-select__trigger>i{font-style:normal;color:var(--s13-muted)}.s13-select__menu{position:absolute;left:0;right:0;top:100%;z-index:20;border:1px solid var(--s13-accent);border-top:0;background:var(--s13-surface)}.s13-select__menu>button{width:100%;display:grid;grid-template-columns:14px 1fr;gap:9px;align-items:center;border:0;border-bottom:1px solid var(--s13-border);background:transparent;color:var(--s13-muted);padding:9px 10px;text-align:left;cursor:pointer}.s13-select__menu>button:last-child{border-bottom:0}.s13-select__menu>button:hover,.s13-select__menu>button[aria-selected="true"]{color:var(--s13-foreground);background:var(--s13-accent-soft)}.s13-select__marker{position:relative;width:12px;height:12px;border:1px solid var(--s13-border)}.s13-select__marker i{position:absolute;inset:3px}.s13-select__menu>button[aria-selected="true"] .s13-select__marker{border-color:var(--s13-accent)}.s13-select__menu>button[aria-selected="true"] .s13-select__marker i{background:var(--s13-accent)}
`
