import * as React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "danger"
}

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  return <button className={`s13-button s13-button--${variant} ${className}`} {...props} />
}

export const buttonStyles = `
.s13-button{position:relative;min-height:42px;border:0;background:transparent;color:var(--s13-foreground);padding:9px 17px;letter-spacing:.05em;cursor:pointer}
.s13-button::before,.s13-button::after{content:"";position:absolute;top:0;bottom:0;width:8px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);transition:width var(--s13-transition),border-color var(--s13-transition)}
.s13-button::before{left:0;border-left:1px solid var(--s13-border)}
.s13-button::after{right:0;border-right:1px solid var(--s13-border)}
.s13-button:hover::before,.s13-button:hover::after,.s13-button:focus-visible::before,.s13-button:focus-visible::after{border-color:var(--s13-accent);width:12px}
.s13-button--primary{background:var(--s13-accent-soft)}
.s13-button--primary::before,.s13-button--primary::after{border-color:var(--s13-accent)}
.s13-button--danger{color:var(--s13-danger)}
.s13-button--danger::before,.s13-button--danger::after{border-color:var(--s13-danger)}
`
