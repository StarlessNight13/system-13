import * as React from "react"

export function Notification({ status, children, tone = "accent", dismissLabel = "DISMISS", onDismiss, className = "" }: { status: string; children: React.ReactNode; tone?: "accent" | "danger" | "warning" | "success"; dismissLabel?: string; onDismiss?: () => void; className?: string }) {
  return <section className={`s13-notification s13-notification--${tone} ${className}`}><header><strong>{status}</strong>{onDismiss && <button type="button" onClick={onDismiss}>{dismissLabel}</button>}</header><div className="s13-notification__body">{children}</div></section>
}

export const notificationStyles = `
.s13-notification{border:1px solid var(--s13-border);background:var(--s13-surface)}.s13-notification>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 10px;border-bottom:1px solid var(--s13-accent);font-size:10px;letter-spacing:.08em}.s13-notification>header strong{color:var(--s13-accent)}.s13-notification>header button{border:0;background:transparent;color:var(--s13-muted);padding:0;cursor:pointer}.s13-notification__body{padding:12px;color:var(--s13-muted);font-size:12px;line-height:1.5}.s13-notification--danger>header{border-bottom-color:var(--s13-danger)}.s13-notification--danger>header strong{color:var(--s13-danger)}.s13-notification--warning>header{border-bottom-color:var(--s13-warning)}.s13-notification--warning>header strong{color:var(--s13-warning)}.s13-notification--success>header{border-bottom-color:var(--s13-success)}.s13-notification--success>header strong{color:var(--s13-success)}
`
