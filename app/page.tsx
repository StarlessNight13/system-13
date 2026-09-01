"use client"

import { useState } from "react"
import { Button, buttonStyles } from "@/registry/system13/button"
import { Input, inputStyles } from "@/registry/system13/input"
import { Toggle, toggleStyles } from "@/registry/system13/toggle"
import { Switch, switchStyles } from "@/registry/system13/switch"
import { MenuItem, menuItemStyles } from "@/registry/system13/menu-item"

const styles = `${buttonStyles}${inputStyles}${toggleStyles}${switchStyles}${menuItemStyles}`

export default function Home() {
  const [active, setActive] = useState("Components")
  return (
    <main className="site-shell">
      <style>{styles}</style>
      <aside className="site-nav">
        <div className="brand">SYSTEM / 13</div>
        {["Overview", "Components", "Tokens", "Registry"].map((item) => (
          <MenuItem key={item} active={active === item} onClick={() => setActive(item)}>{item}</MenuItem>
        ))}
      </aside>

      <section className="site-main">
        <header className="hero">
          <div className="eyebrow">DESIGN SYSTEM / REGISTRY</div>
          <h1>System 13</h1>
          <p>A sharp, TUI-inspired component language for modern web interfaces.</p>
        </header>

        <section className="demo-panel">
          <span className="panel-label">INPUTS + ACTIONS</span>
          <div className="demo-grid">
            <Input label="Project name" defaultValue="System 13" />
            <Input label="Username" />
          </div>
          <div className="actions">
            <Button variant="primary">SAVE</Button>
            <Button>CANCEL</Button>
            <Button variant="danger">DELETE</Button>
          </div>
        </section>

        <section className="demo-panel">
          <span className="panel-label">TOGGLE + SWITCH</span>
          <div className="control-row"><span>Notifications</span><Toggle defaultPressed /></div>
          <div className="control-row"><span>Interface motion</span><Switch defaultChecked /></div>
        </section>
      </section>
    </main>
  )
}
