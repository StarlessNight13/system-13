"use client"

import * as React from "react"

export function FileUpload({ label = "Drop file here", hint = "or click to browse", onFiles, className = "" }: { label?: string; hint?: string; onFiles?: (files: FileList | null) => void; className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  return <div className={`s13-upload ${className}`} role="button" tabIndex={0} onClick={() => inputRef.current?.click()} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click() }}><input ref={inputRef} type="file" hidden onChange={e => onFiles?.(e.target.files)} /><span className="s13-upload__icon" /><strong>{label}</strong><span>{hint}</span></div>
}

export const fileUploadStyles = `
.s13-upload{min-height:150px;display:grid;place-items:center;align-content:center;gap:6px;border:1px dashed var(--s13-border);background:transparent;padding:22px;text-align:center;cursor:pointer;transition:border-color var(--s13-transition)}.s13-upload:hover,.s13-upload:focus-visible{border-color:var(--s13-accent);outline:0}.s13-upload__icon{position:relative;width:28px;height:28px;border:1px solid var(--s13-border);margin-bottom:4px}.s13-upload__icon::before{content:"";position:absolute;left:50%;top:5px;width:1px;height:12px;background:var(--s13-accent);transform:translateX(-50%)}.s13-upload__icon::after{content:"";position:absolute;left:8px;right:8px;bottom:5px;height:1px;background:var(--s13-border)}.s13-upload strong{font-size:12px}.s13-upload>span:last-child{color:var(--s13-muted);font-size:11px}
`
