import * as React from "react"

type MenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
  shortcut?: string
}

export function MenuItem({ active = false, shortcut, className = "", children, ...props }: MenuItemProps) {
  return (
    <button aria-current={active ? "page" : undefined} className={`s13-menu-item ${className}`} {...props}>
      <span className="s13-menu-item__marker" aria-hidden="true" />
      <span>{children}</span>
      {shortcut && <span className="s13-menu-item__shortcut">{shortcut}</span>}
    </button>
  )
}

export const menuItemStyles = `
.s13-menu-item{min-height:44px;display:grid;grid-template-columns:18px minmax(0,1fr) auto;align-items:center;gap:11px;width:100%;border:1px solid transparent;background:transparent;color:var(--s13-muted);padding:8px 10px;text-align:left;cursor:pointer}
.s13-menu-item__marker{position:relative;width:14px;height:14px;border:1px solid var(--s13-border)}
.s13-menu-item__marker::after{content:"";position:absolute;inset:3px;background:transparent}
.s13-menu-item:hover,.s13-menu-item[aria-current="page"]{border-color:var(--s13-accent);color:var(--s13-foreground)}
.s13-menu-item[aria-current="page"]{background:var(--s13-accent-soft)}
.s13-menu-item[aria-current="page"] .s13-menu-item__marker{border-color:var(--s13-accent)}
.s13-menu-item[aria-current="page"] .s13-menu-item__marker::after{background:var(--s13-accent)}
.s13-menu-item__shortcut{font-size:10px;color:var(--s13-muted)}
`
