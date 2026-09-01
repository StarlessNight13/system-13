import * as React from "react"

export function Textarea({ label, className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return <label className={`s13-textarea ${className}`}><span>{label}</span><textarea {...props} /></label>
}

export const textareaStyles = `
.s13-textarea{position:relative;display:block;border:1px solid var(--s13-border);background:var(--s13-surface);padding:12px;transition:border-color var(--s13-transition)}
.s13-textarea:hover,.s13-textarea:focus-within{border-color:var(--s13-accent)}
.s13-textarea>span{position:absolute;top:-8px;left:10px;padding:0 7px;background:var(--s13-surface);color:var(--s13-muted);font:700 10px/16px var(--s13-font-mono);letter-spacing:.08em;text-transform:uppercase}
.s13-textarea:focus-within>span{color:var(--s13-accent)}
.s13-textarea textarea{display:block;width:100%;min-height:120px;resize:vertical;border:0;outline:0;background:transparent;color:var(--s13-foreground);padding:4px 0;font:inherit}
`
