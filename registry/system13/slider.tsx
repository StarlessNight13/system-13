"use client"

import * as React from "react"

export function Slider({ value, defaultValue = 40, min = 0, max = 100, onValueChange, className = "" }: { value?: number; defaultValue?: number; min?: number; max?: number; onValueChange?: (value: number) => void; className?: string }) {
  const [internal, setInternal] = React.useState(defaultValue)
  const current = value ?? internal
  const pct = ((current - min) / (max - min)) * 100
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { const next = Number(e.target.value); if (value === undefined) setInternal(next); onValueChange?.(next) }
  return <div className={`s13-slider ${className}`} style={{ "--s13-slider-pct": `${pct}%` } as React.CSSProperties}><input aria-label="Slider" type="range" min={min} max={max} value={current} onChange={onChange} /><span className="s13-slider__rail"><i /></span><b>{current}</b></div>
}

export const sliderStyles = `
.s13-slider{display:grid;grid-template-columns:minmax(120px,1fr) auto;gap:12px;align-items:center;position:relative}.s13-slider input{position:absolute;inset:0 44px 0 0;opacity:0;cursor:pointer;z-index:2}.s13-slider__rail{position:relative;height:10px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);background:linear-gradient(to right,var(--s13-accent) 0 var(--s13-slider-pct),transparent var(--s13-slider-pct))}.s13-slider__rail i{position:absolute;top:50%;left:var(--s13-slider-pct);width:16px;height:18px;transform:translate(-50%,-50%);border:1px solid var(--s13-accent);background:var(--s13-surface)}.s13-slider__rail i::after{content:"";position:absolute;inset:5px;background:var(--s13-accent)}.s13-slider b{min-width:32px;color:var(--s13-muted);font-size:11px;text-align:right}
`
