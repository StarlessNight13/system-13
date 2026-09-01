"use client"

import * as React from "react"

export function RadioGroup({ options, defaultValue, value, onValueChange, name, className = "" }: { options: Array<{ value: string; label: React.ReactNode }>; defaultValue?: string; value?: string; onValueChange?: (value: string) => void; name?: string; className?: string }) {
  const [internal, setInternal] = React.useState(defaultValue ?? options[0]?.value)
  const current = value ?? internal
  const select = (next: string) => { if (value === undefined) setInternal(next); onValueChange?.(next) }
  return <div role="radiogroup" aria-label={name} className={`s13-radio-group ${className}`}>{options.map(option => <button key={option.value} type="button" role="radio" aria-checked={current === option.value} className="s13-radio" onClick={() => select(option.value)}><span className="s13-radio__frame"><i /></span><span>{option.label}</span></button>)}</div>
}

export const radioStyles = `
.s13-radio-group{display:grid;gap:8px}.s13-radio{display:inline-flex;align-items:center;gap:9px;width:max-content;border:0;background:transparent;color:var(--s13-foreground);padding:3px 0;cursor:pointer}.s13-radio__frame{position:relative;width:16px;height:16px;border:1px solid var(--s13-border)}.s13-radio__frame i{position:absolute;inset:4px;background:transparent}.s13-radio:hover .s13-radio__frame,.s13-radio[aria-checked="true"] .s13-radio__frame{border-color:var(--s13-accent)}.s13-radio[aria-checked="true"] .s13-radio__frame i{background:var(--s13-accent)}
`
