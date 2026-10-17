import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './MobileNavigation.css'

const groups = [
  { title: 'Products', links: [['Mobile Wallet', '/mobile'], ['Desktop Wallet', '/desktop'], ['Enhance security — Ledger', '/ledger-wallet'], ['Enhance security — Trezor', '/trezor-wallet'], ['Stake and earn', '/staking-crypto']] },
  { title: 'Support', links: [['24/7 Customer Support', '/contact-support'], ['Crypto Assets', '/assets']] },
  { title: 'Learn', links: [['YouTube', 'https://www.youtube.com/c/exodus'], ['Newsletter', '/newsletter']] },
  { title: 'Company', links: [['About Us', '/about'], ['Careers', '/careers'], ['Contact Us', '/contact'], ['Security', '/security']] },
]
export default function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const outside = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false) }
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus() } }
    const resize = () => { if (window.innerWidth >= 1100) setOpen(false) }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    window.addEventListener('resize', resize)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); window.removeEventListener('resize', resize) }
  }, [open])
  return <div className="mobile-navigation" ref={root} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false) }}>
    <button ref={trigger} type="button" className="mobile-navigation-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation-panel" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    {open && <nav id="mobile-navigation-panel" className="mobile-navigation-panel" aria-label="Mobile navigation">
      {groups.map(group => <section key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} {...(href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>)}</section>)}
    </nav>}
  </div>
}
