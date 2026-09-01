import * as React from "react"

export function Table({ columns, rows, className = "" }: { columns: string[]; rows: Array<Array<React.ReactNode>>; className?: string }) {
  return <div className={`s13-table-wrap ${className}`}><table className="s13-table"><thead><tr>{columns.map((column, i) => <th key={i}>{column}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>
}

export const tableStyles = `
.s13-table-wrap{overflow:auto;border:1px solid var(--s13-border)}.s13-table{width:100%;border-collapse:collapse;font-size:12px}.s13-table th,.s13-table td{padding:9px 10px;border-right:1px solid var(--s13-border);border-bottom:1px solid var(--s13-border);text-align:left}.s13-table th:last-child,.s13-table td:last-child{border-right:0}.s13-table tbody tr:last-child td{border-bottom:0}.s13-table th{color:var(--s13-muted);font-size:10px;letter-spacing:.08em;text-transform:uppercase}.s13-table tbody tr:hover{background:var(--s13-accent-soft)}
`
