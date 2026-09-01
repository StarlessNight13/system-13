"use client"

import * as React from "react"

type ToggleProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

export function Toggle({ pressed, defaultPressed = false, onPressedChange, className = "", ...props }: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultPressed)
  const value = pressed ?? internal
  const setValue = (next: boolean) => {
    if (pressed === undefined) setInternal(next)
    onPressedChange?.(next)
  }
  return (
    <button type="button" aria-pressed={value} className={`s13-toggle ${className}`} onClick={() => setValue(!value)} {...props}>
      {value ? "ON" : "OFF"}
    </button>
  )
}

export const toggleStyles = `
.s13-toggle{position:relative;min-width:86px;min-height:42px;border:0;background:transparent;color:var(--s13-muted);padding:9px 18px;cursor:pointer;font-weight:700;letter-spacing:.08em}
.s13-toggle::before,.s13-toggle::after{content:"";position:absolute;top:0;bottom:0;width:9px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);transition:width var(--s13-transition),border-color var(--s13-transition)}
.s13-toggle::before{left:0;border-left:1px solid var(--s13-border)}
.s13-toggle::after{right:0;border-right:1px solid var(--s13-border)}
.s13-toggle[aria-pressed="true"]{color:var(--s13-foreground);background:var(--s13-accent-soft)}
.s13-toggle[aria-pressed="true"]::before,.s13-toggle[aria-pressed="true"]::after,.s13-toggle:hover::before,.s13-toggle:hover::after{border-color:var(--s13-accent)}
.s13-toggle:hover::before,.s13-toggle:hover::after{width:13px}
`
