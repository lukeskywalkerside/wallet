import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Apple, Terminal } from 'lucide-react'
import { ExodusMark } from '../pages/ui.tsx'
import { DESKTOP_DOWNLOAD_LINKS } from '../downloads.ts'
import './DesktopDownload.css'

export default function DesktopDownload({ links = DESKTOP_DOWNLOAD_LINKS }: { links?: string[][] }) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const sorted = [...links].sort((a, b) => Number(b[0].includes('Windows')) - Number(a[0].includes('Windows')))
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false) }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() } }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape) }
  }, [open])
  return <div className="desktop-download" ref={root} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false)
  }}>
    <button className="desktop-download-trigger" type="button" ref={trigger} aria-expanded={open} aria-controls="desktop-download-options" onClick={() => setOpen(!open)}>
      <span><ExodusMark size={22} /> Download Exodus</span><ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : undefined }} />
    </button>
    {open && <div id="desktop-download-options" className="desktop-download-options">
      <ul>{sorted.map(([label, href]) => <li key={label}><a href={href} onClick={() => setOpen(false)}>
        <span className="desktop-platform-icon">{label.includes('Windows') ? <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 4.5l8-1.1v8H2zm9-1.3L22 1.6v9.8H11zM2 12.5h8v8L2 19.4zm9 0h11v9.9l-11-1.6z" /></svg> : label.includes('Mac') ? <Apple size={22} /> : <Terminal size={22} />}</span>
        <span>{label}</span>
      </a></li>)}</ul>
      <p>By downloading Exodus, you agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
    </div>}
  </div>
}
