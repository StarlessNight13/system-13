import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "System 13",
  description: "A TUI-inspired design system and shadcn registry.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
