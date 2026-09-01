"use client"

import * as React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string }

export function Input({ label, id, className = "", ...props }: InputProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  return (
    <label className={`s13-field ${className}`} htmlFor={inputId}>
      <input id={inputId} placeholder=" " {...props} />
      <span>{label}</span>
    </label>
  )
}

export const inputStyles = `
.s13-field{position:relative;display:block;height:54px;border:1px solid var(--s13-border);background:var(--s13-surface);transition:border-color var(--s13-transition)}
.s13-field:hover,.s13-field:focus-within{border-color:var(--s13-accent)}
.s13-field input{width:100%;height:100%;border:0;outline:0;background:transparent;color:var(--s13-foreground);padding:15px 12px 7px}
.s13-field span{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--s13-muted);pointer-events:none;transition:all var(--s13-transition)}
.s13-field input:focus+span,.s13-field input:not(:placeholder-shown)+span{top:0;transform:translateY(-50%);padding:0 7px;background:var(--s13-surface);color:var(--s13-accent);font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
`
