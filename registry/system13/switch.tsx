"use client"

import * as React from "react"

type SwitchProps = {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
}

export function Switch({ checked, defaultChecked = false, onCheckedChange, label }: SwitchProps) {
  const [internal, setInternal] = React.useState(defaultChecked)
  const value = checked ?? internal
  const setValue = (next: boolean) => {
    if (checked === undefined) setInternal(next)
    onCheckedChange?.(next)
  }
  return (
    <button type="button" role="switch" aria-checked={value} className="s13-switch" onClick={() => setValue(!value)}>
      <span className="s13-switch__rail"><span className="s13-switch__cursor" /></span>
      <span className="s13-switch__state">{label ?? (value ? "ON" : "OFF")}</span>
    </button>
  )
}

export const switchStyles = `
.s13-switch{display:inline-flex;align-items:center;gap:10px;border:0;background:transparent;color:var(--s13-foreground);padding:0;min-height:42px;cursor:pointer}
.s13-switch__rail{position:relative;width:54px;height:20px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border)}
.s13-switch__rail::before,.s13-switch__rail::after{content:"";position:absolute;top:-5px;bottom:-5px;width:1px;background:var(--s13-border)}
.s13-switch__rail::before{left:0}.s13-switch__rail::after{right:0}
.s13-switch__cursor{position:absolute;top:3px;left:5px;width:14px;height:12px;background:var(--s13-muted);transition:left var(--s13-transition),background var(--s13-transition)}
.s13-switch[aria-checked="true"] .s13-switch__cursor{left:34px;background:var(--s13-accent)}
.s13-switch__state{font-size:12px;font-weight:700;letter-spacing:.06em;color:var(--s13-muted)}
.s13-switch[aria-checked="true"] .s13-switch__state{color:var(--s13-accent)}
`
