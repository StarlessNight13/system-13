import * as React from "react"

type ButtonVariant = "default" | "outline" | "ghost" | "link"
type ButtonColor = "default" | "secondary" | "destructive"
type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

export function Button({ className = "", variant = "default", color = "default", size = "default", ...props }: ButtonProps) {
  return <button className={`s13-button s13-button--${variant} s13-button--color-${color} s13-button--size-${size} ${className}`} {...props} />
}

export function ButtonGroup({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`s13-button-group ${className}`} role="group" {...props} />
}

export const buttonStyles = `
.s13-button{position:relative;min-height:42px;border:0;background:transparent;color:var(--s13-foreground);padding:9px 17px;letter-spacing:.05em;cursor:pointer}
.s13-button::before,.s13-button::after{content:"";position:absolute;top:0;bottom:0;width:8px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);transition:width var(--s13-transition),border-color var(--s13-transition)}
.s13-button::before{left:0;border-left:1px solid var(--s13-border)}
.s13-button::after{right:0;border-right:1px solid var(--s13-border)}
.s13-button:hover::before,.s13-button:hover::after,.s13-button:focus-visible::before,.s13-button:focus-visible::after{border-color:var(--s13-accent);width:12px}
.s13-button--default{background:var(--s13-accent-soft)}
.s13-button--default::before,.s13-button--default::after{border-color:var(--s13-accent)}
.s13-button--outline{background:transparent;border:1px solid var(--s13-border)}
.s13-button--outline::before,.s13-button--outline::after{display:none}
.s13-button--outline:hover{border-color:var(--s13-accent)}
.s13-button--ghost{background:transparent}
.s13-button--ghost::before,.s13-button--ghost::after{border-color:transparent}
.s13-button--ghost:hover::before,.s13-button--ghost:hover::after,.s13-button--ghost:focus-visible::before,.s13-button--ghost:focus-visible::after{border-color:transparent;width:8px}
.s13-button--ghost:hover{background:var(--s13-accent-soft)}
.s13-button--link{min-height:auto;padding:0 2px;color:var(--s13-accent)}
.s13-button--link::before,.s13-button--link::after{display:none}
.s13-button--link:hover{text-decoration:underline;text-underline-offset:4px}
.s13-button--color-secondary.s13-button--default{background:var(--s13-surface-2)}
.s13-button--color-secondary.s13-button--default::before,.s13-button--color-secondary.s13-button--default::after{border-color:var(--s13-muted)}
.s13-button--color-secondary.s13-button--outline{border-color:var(--s13-muted)}
.s13-button--color-secondary.s13-button--ghost{color:var(--s13-muted)}
.s13-button--color-secondary.s13-button--ghost:hover{background:var(--s13-surface-2);color:var(--s13-foreground)}
.s13-button--color-secondary.s13-button--link{color:var(--s13-muted)}
.s13-button--color-destructive.s13-button--default{background:color-mix(in srgb,var(--s13-danger) 12%,transparent);color:var(--s13-danger)}
.s13-button--color-destructive.s13-button--default::before,.s13-button--color-destructive.s13-button--default::after{border-color:var(--s13-danger)}
.s13-button--color-destructive.s13-button--outline{border-color:var(--s13-danger);color:var(--s13-danger)}
.s13-button--color-destructive.s13-button--ghost{color:var(--s13-danger)}
.s13-button--color-destructive.s13-button--ghost:hover{background:color-mix(in srgb,var(--s13-danger) 12%,transparent)}
.s13-button--color-destructive.s13-button--link{color:var(--s13-danger)}
.s13-button--size-xs{min-height:28px;padding:5px 10px;font-size:10px}
.s13-button--size-sm{min-height:34px;padding:7px 13px;font-size:11px}
.s13-button--size-lg{min-height:50px;padding:12px 22px;font-size:14px}
.s13-button--size-icon,.s13-button--size-icon-xs,.s13-button--size-icon-sm,.s13-button--size-icon-lg{display:inline-grid;place-items:center;padding:0}
.s13-button--size-icon{width:42px;height:42px}
.s13-button--size-icon-xs{width:28px;height:28px}
.s13-button--size-icon-sm{width:34px;height:34px}
.s13-button--size-icon-lg{width:50px;height:50px}
.s13-button-group{display:inline-flex;align-items:stretch;vertical-align:middle;border:1px solid var(--s13-border);background:var(--s13-surface)}
.s13-button-group>.s13-button{border:0}
.s13-button-group>.s13-button::before,.s13-button-group>.s13-button::after{display:none}
.s13-button-group>.s13-button+.s13-button{border-left:1px solid var(--s13-border)}
.s13-button-group>.s13-button:focus-visible{position:relative;z-index:1}
`
