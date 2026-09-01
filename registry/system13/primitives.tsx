import * as React from "react"

const cx = (...v: Array<string | false | null | undefined>) => v.filter(Boolean).join(" ")

export function Panel({ label, className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement> & { label?: string }) {
  return <section className={cx("s13-panel", className)} data-label={label} {...props}>{children}</section>
}

export function Card({ label, className = "", children, ...props }: React.HTMLAttributes<HTMLElement> & { label?: string }) {
  return <article className={cx("s13-card", className)} data-label={label} {...props}>{children}</article>
}

export function Separator({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="separator" className={cx("s13-separator", className)} {...props} />
}

export function Tooltip({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="tooltip" className={cx("s13-tooltip", className)} {...props}>{children}</div>
}

export function Status({ children, tone = "accent", className = "", ...props }: React.HTMLAttributes<HTMLSpanElement> & { tone?: "accent" | "muted" | "danger" | "warning" | "success" }) {
  return <span className={cx("s13-status", `s13-status--${tone}`, className)} {...props}>{children}</span>
}

export function Kbd({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement>) {
  return <kbd className={cx("s13-kbd", className)} {...props}>{children}</kbd>
}

export function Avatar({ fallback, status, className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { fallback: React.ReactNode; status?: boolean }) {
  return <div className={cx("s13-avatar", className)} {...props}>{fallback}{status && <span className="s13-avatar__status" />}</div>
}

export function Spinner({ label = "LOADING", className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { label?: string }) {
  return <div className={cx("s13-spinner", className)} role="status" {...props}><span className="s13-spinner__cells" aria-hidden>{[0,1,2,3].map(i => <i key={i} />)}</span><span>{label}</span></div>
}

export function Progress({ value, max = 100, cells = 16, className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { value: number; max?: number; cells?: number }) {
  const filled = Math.round(Math.max(0, Math.min(1, value / max)) * cells)
  return <div className={cx("s13-progress", className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} {...props}>{Array.from({ length: cells }, (_, i) => <span key={i} data-filled={i < filled} />)}</div>
}

export function Pagination({ current, total, onPrevious, onNext, className = "" }: { current: number; total: number; onPrevious?: () => void; onNext?: () => void; className?: string }) {
  return <nav className={cx("s13-pagination", className)} aria-label="Pagination"><button className="s13-button" onClick={onPrevious}>PREV</button><span className="s13-pagination__counter"><b>{String(current).padStart(2,"0")}</b><i>/</i>{String(total).padStart(2,"0")}</span><button className="s13-button" onClick={onNext}>NEXT</button></nav>
}

export function Breadcrumbs({ items, className = "" }: { items: Array<{ label: React.ReactNode; href?: string }>; className?: string }) {
  return <nav className={cx("s13-breadcrumbs", className)} aria-label="Breadcrumb">{items.map((item, i) => <React.Fragment key={i}>{i > 0 && <span className="s13-breadcrumbs__divider" />}{item.href && i < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current={i === items.length - 1 ? "page" : undefined}>{item.label}</span>}</React.Fragment>)}</nav>
}

export function Alert({ label, children, tone = "accent", className = "" }: { label: string; children: React.ReactNode; tone?: "accent" | "danger" | "warning" | "success"; className?: string }) {
  return <div className={cx("s13-alert", `s13-alert--${tone}`, className)} role="status"><span className="s13-alert__marker" /><div><strong>{label}</strong><div>{children}</div></div></div>
}

export function CodeBlock({ language, filename, children, className = "" }: { language: string; filename?: string; children: React.ReactNode; className?: string }) {
  return <div className={cx("s13-code", className)}><div className="s13-code__head"><span>{language}</span><span>{filename}</span></div><pre><code>{children}</code></pre></div>
}

export function EmptyState({ status = "EMPTY", title, children, action, className = "" }: { status?: string; title: string; children?: React.ReactNode; action?: React.ReactNode; className?: string }) {
  return <div className={cx("s13-empty", className)}><strong>{status}</strong><h3>{title}</h3>{children && <div>{children}</div>}{action}</div>
}

export const primitivesStyles = `
.s13-panel,.s13-card{position:relative;border:1px solid var(--s13-border);padding:20px 14px 14px;background:var(--s13-surface);transition:border-color var(--s13-transition)}
.s13-panel[data-label]::before,.s13-card[data-label]::before{content:attr(data-label);position:absolute;top:-8px;left:12px;padding:0 7px;background:var(--s13-surface);color:var(--s13-muted);font:700 10px/16px var(--s13-font-mono);letter-spacing:.08em;text-transform:uppercase}
.s13-card:hover{border-color:var(--s13-accent)}
.s13-separator{position:relative;height:1px;background:var(--s13-border)}.s13-separator::before,.s13-separator::after{content:"";position:absolute;top:-3px;width:1px;height:7px;background:var(--s13-border)}.s13-separator::before{left:0}.s13-separator::after{right:0}
.s13-tooltip{width:max-content;max-width:260px;border:1px solid var(--s13-accent);background:var(--s13-surface);padding:6px 8px;font-size:11px;color:var(--s13-foreground)}
.s13-status{position:relative;display:inline-flex;padding:4px 9px;font:700 10px/1.2 var(--s13-font-mono);letter-spacing:.07em}.s13-status::before,.s13-status::after{content:"";position:absolute;top:0;bottom:0;width:5px;border-top:1px solid currentColor;border-bottom:1px solid currentColor}.s13-status::before{left:0;border-left:1px solid currentColor}.s13-status::after{right:0;border-right:1px solid currentColor}.s13-status--accent{color:var(--s13-accent)}.s13-status--muted{color:var(--s13-muted)}.s13-status--danger{color:var(--s13-danger)}.s13-status--warning{color:var(--s13-warning)}.s13-status--success{color:var(--s13-success)}
.s13-kbd{display:inline-flex;min-width:28px;min-height:26px;align-items:center;justify-content:center;padding:4px 8px;border:1px solid var(--s13-border);box-shadow:inset 0 -3px 0 var(--s13-border);font:700 10px/1 var(--s13-font-mono);color:var(--s13-foreground);background:transparent}
.s13-avatar{position:relative;width:48px;height:48px;display:grid;place-items:center;font-weight:700}.s13-avatar::before,.s13-avatar::after{content:"";position:absolute;top:0;bottom:0;width:10px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border)}.s13-avatar::before{left:0;border-left:1px solid var(--s13-border)}.s13-avatar::after{right:0;border-right:1px solid var(--s13-border)}.s13-avatar__status{position:absolute;right:3px;bottom:3px;width:6px;height:6px;background:var(--s13-accent)}
.s13-spinner{display:inline-flex;align-items:center;gap:10px;color:var(--s13-muted);font:700 11px/1 var(--s13-font-mono)}.s13-spinner__cells{display:grid;grid-template-columns:repeat(4,8px);gap:3px}.s13-spinner__cells i{width:8px;height:8px;border:1px solid var(--s13-border);animation:s13-cell 800ms steps(1) infinite}.s13-spinner__cells i:nth-child(2){animation-delay:200ms}.s13-spinner__cells i:nth-child(3){animation-delay:400ms}.s13-spinner__cells i:nth-child(4){animation-delay:600ms}@keyframes s13-cell{0%,24%{background:var(--s13-accent);border-color:var(--s13-accent)}25%,100%{background:transparent;border-color:var(--s13-border)}}
.s13-progress{display:flex;gap:4px}.s13-progress span{width:16px;height:12px;border:1px solid var(--s13-border)}.s13-progress span[data-filled="true"]{border-color:var(--s13-accent);background:var(--s13-accent)}
.s13-pagination{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.s13-pagination__counter{min-height:38px;min-width:92px;display:flex;align-items:center;justify-content:center;gap:8px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border)}.s13-pagination__counter b{color:var(--s13-accent)}.s13-pagination__counter i{color:var(--s13-muted);font-style:normal}
.s13-breadcrumbs{display:flex;align-items:center;flex-wrap:wrap;font-size:12px}.s13-breadcrumbs a,.s13-breadcrumbs span:not(.s13-breadcrumbs__divider){position:relative;padding:6px 10px;color:var(--s13-muted);text-decoration:none}.s13-breadcrumbs [aria-current="page"]{color:var(--s13-foreground);border-bottom:2px solid var(--s13-accent)}.s13-breadcrumbs__divider{width:1px;height:18px;background:var(--s13-border)}
.s13-alert{display:grid;grid-template-columns:auto 1fr;gap:12px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);padding:11px 0;color:var(--s13-muted);font-size:12px}.s13-alert strong{display:block;margin-bottom:4px;font-size:10px;letter-spacing:.08em}.s13-alert__marker{position:relative;width:12px;height:12px;border:1px solid currentColor;margin-top:2px}.s13-alert__marker::after{content:"";position:absolute;inset:3px;background:currentColor}.s13-alert--accent strong,.s13-alert--accent .s13-alert__marker{color:var(--s13-accent)}.s13-alert--danger strong,.s13-alert--danger .s13-alert__marker{color:var(--s13-danger)}.s13-alert--warning strong,.s13-alert--warning .s13-alert__marker{color:var(--s13-warning)}.s13-alert--success strong,.s13-alert--success .s13-alert__marker{color:var(--s13-success)}
.s13-code{border:1px solid var(--s13-border);overflow:auto}.s13-code__head{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--s13-accent);padding:7px 10px;color:var(--s13-muted);font-size:10px;letter-spacing:.08em}.s13-code__head span:first-child{color:var(--s13-accent)}.s13-code pre{margin:0;padding:12px 14px;font:11px/1.6 var(--s13-font-mono)}
.s13-empty{position:relative;min-height:170px;border-top:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);display:grid;place-items:center;align-content:center;gap:6px;padding:22px;text-align:center}.s13-empty::before,.s13-empty::after{content:"";position:absolute;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--s13-border) 0 16px,transparent 16px calc(100% - 16px),var(--s13-border) calc(100% - 16px))}.s13-empty::before{left:0}.s13-empty::after{right:0}.s13-empty>strong{color:var(--s13-accent);font-size:10px;letter-spacing:.08em}.s13-empty h3{margin:0;font-size:13px}.s13-empty>div{color:var(--s13-muted);font-size:12px}
`
