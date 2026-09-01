import * as React from "react"

export function Skeleton({ width = "100%", height = 18, className = "" }: { width?: string | number; height?: string | number; className?: string }) {
  return <span className={`s13-skeleton ${className}`} style={{ width, height }} aria-hidden />
}

export const skeletonStyles = `
.s13-skeleton{display:block;border:1px solid var(--s13-border);background:var(--s13-accent-soft);animation:s13-skeleton 1.2s ease-in-out infinite alternate}@keyframes s13-skeleton{from{opacity:.38}to{opacity:.8}}
`
