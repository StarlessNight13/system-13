"use client"

import { useState } from "react"
import { Button, buttonStyles } from "@/registry/system13/button"
import { Input, inputStyles } from "@/registry/system13/input"
import { Toggle, toggleStyles } from "@/registry/system13/toggle"
import { Switch, switchStyles } from "@/registry/system13/switch"
import { MenuItem, menuItemStyles } from "@/registry/system13/menu-item"
import { Panel, Card, Status, Progress, Pagination, Breadcrumbs, Alert, CodeBlock, EmptyState, Spinner, Avatar, Kbd, primitivesStyles } from "@/registry/system13/primitives"
import { Tabs, tabsStyles } from "@/registry/system13/tabs"
import { Textarea, textareaStyles } from "@/registry/system13/textarea"
import { Checkbox, checkboxStyles } from "@/registry/system13/checkbox"
import { RadioGroup, radioStyles } from "@/registry/system13/radio"
import { Select, selectStyles } from "@/registry/system13/select"
import { Notification, notificationStyles } from "@/registry/system13/notification"
import { Table, tableStyles } from "@/registry/system13/table"
import { Slider, sliderStyles } from "@/registry/system13/slider"
import { Skeleton, skeletonStyles } from "@/registry/system13/skeleton"
import { Accordion, accordionStyles } from "@/registry/system13/accordion"
import { CommandList, commandListStyles } from "@/registry/system13/command-list"
import { Popover, popoverStyles } from "@/registry/system13/popover"
import { FileUpload, fileUploadStyles } from "@/registry/system13/file-upload"

const styles = [buttonStyles,inputStyles,toggleStyles,switchStyles,menuItemStyles,primitivesStyles,tabsStyles,textareaStyles,checkboxStyles,radioStyles,selectStyles,notificationStyles,tableStyles,sliderStyles,skeletonStyles,accordionStyles,commandListStyles,popoverStyles,fileUploadStyles].join("\n")

export default function Home() {
  const [active, setActive] = useState("Components")
  return <main className="site-shell">
    <style>{styles}</style>
    <aside className="site-nav">
      <div className="brand">SYSTEM / 13</div>
      {["Overview","Components","Tokens","Registry"].map(item => <MenuItem key={item} active={active === item} onClick={() => setActive(item)}>{item}</MenuItem>)}
    </aside>
    <section className="site-main">
      <header className="hero"><div className="eyebrow">DESIGN SYSTEM / REGISTRY</div><h1>System 13</h1><p>Sharp, TUI-inspired primitives built from borders, rails, cells, square markers, and restrained accent states.</p></header>

      <Panel label="INPUTS + ACTIONS" className="demo-section">
        <div className="demo-grid"><Input label="Project name" defaultValue="System 13"/><Input label="Username"/><Textarea label="Notes" defaultValue="Canonical System 13 field treatment."/></div>
        <div className="actions"><Button variant="primary">SAVE</Button><Button>CANCEL</Button><Button variant="danger">DELETE</Button><Checkbox label="Enabled" defaultChecked/><Toggle defaultPressed/><Switch defaultChecked/></div>
      </Panel>

      <Panel label="SELECTION + NAVIGATION" className="demo-section">
        <Tabs items={[{value:"overview",label:"OVERVIEW"},{value:"components",label:"COMPONENTS"},{value:"tokens",label:"TOKENS"}]} defaultValue="components"/>
        <div className="demo-grid demo-spaced"><RadioGroup options={[{value:"a",label:"ALPHA"},{value:"b",label:"BETA"}]} defaultValue="a"/><Select label="Mode" options={[{value:"stable",label:"Stable"},{value:"preview",label:"Preview"}]}/></div>
        <Breadcrumbs items={[{label:"ROOT",href:"#"},{label:"COMPONENTS",href:"#"},{label:"BUTTON"}]}/>
        <Pagination current={2} total={12}/>
      </Panel>

      <Panel label="STATE + FEEDBACK" className="demo-section">
        <div className="actions"><Status>ACTIVE</Status><Status tone="danger">ERROR</Status><Spinner/><Kbd>CTRL</Kbd><Kbd>K</Kbd><Avatar fallback="SN" status/></div>
        <Progress value={10} max={16} cells={16}/>
        <Slider defaultValue={62}/>
        <Notification status="SUCCESS" tone="success">Registry component installed successfully.</Notification>
        <Alert label="INFO">System 13 uses structure rather than decorative terminal characters.</Alert>
      </Panel>

      <Panel label="STRUCTURE" className="demo-section">
        <Accordion defaultOpen="general" items={[{id:"general",title:"GENERAL",content:"General configuration for the current module."},{id:"appearance",title:"APPEARANCE",content:"Theme and density preferences."}]}/>
        <CommandList items={[{id:"open",label:"Open component",shortcut:"ENTER"},{id:"copy",label:"Copy command",shortcut:"C"},{id:"source",label:"View source",shortcut:"S"}]}/>
        <Table columns={["Name","State","Version"]} rows={[["Button",<Status key="s">ACTIVE</Status>,"0.1"],["Input",<Status key="s2" tone="muted">DRAFT</Status>,"0.1"]]}/>
      </Panel>

      <Panel label="CONTENT + UTILITIES" className="demo-section">
        <div className="demo-grid"><Card label="COMPONENT"><h3>System 13 Button</h3><p className="muted-copy">Bracket-border action control.</p></Card><div><Skeleton width="82%"/><div style={{height:8}}/><Skeleton width="56%"/></div></div>
        <CodeBlock language="TSX" filename="button.tsx">{`<Button variant="primary">SAVE</Button>`}</CodeBlock>
        <Popover trigger={<Button>OPEN POPOVER</Button>}><strong>Component options</strong><p className="muted-copy">Contextual content in a labeled frame.</p></Popover>
        <FileUpload/>
        <EmptyState title="No components found" action={<Button>ADD COMPONENT</Button>}>This collection does not contain any items yet.</EmptyState>
      </Panel>
    </section>
  </main>
}
