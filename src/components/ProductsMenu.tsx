import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronRight, Laptop, MonitorSmartphone, Smartphone, ShieldCheck, BadgePlus } from 'lucide-react'
import './ProductsMenu.css'

const categories = [
  { title: 'Buy and swap crypto', description: 'Manage thousands of digital assets', icon: MonitorSmartphone, items: [
    { title: 'Mobile Wallet', description: 'Control your wealth anywhere', icon: Smartphone, href: '/mobile' },
    { title: 'Desktop Wallet', description: 'Swap and transfer digital assets', icon: Laptop, href: '/desktop' },
  ] },
  { title: 'Enhance security', description: 'Secure your assets with Trezor and Ledger', icon: ShieldCheck, items: [
    { title: 'Trezor Hardware Wallet', description: 'Advanced security for Desktop', icon: ShieldCheck, href: '/trezor-wallet' },
    { title: 'Ledger Hardware Wallet', description: 'Advanced security for Mobile', icon: ShieldCheck, href: '/ledger-wallet' },
  ] },
  { title: 'Stake and earn', description: 'Stake multiple assets in one place', icon: BadgePlus, items: [
    { title: 'Crypto Staking', description: 'Earn rewards on your digital assets', icon: BadgePlus, href: '/staking-crypto' },
  ] },
]

export default function ProductsMenu() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [open])
  return <div className="products-menu" ref={root} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false)
  }}>
    <button ref={trigger} type="button" className="products-trigger" aria-expanded={open} aria-controls="products-panel" onClick={() => {
      if (!open) setActive(0)
      setOpen(!open)
    }}>Products <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : undefined }} /></button>
    {open && <div id="products-panel" className="products-panel">
      <div className="products-categories">
        <p className="products-heading">Control your wealth</p>
        {categories.map((category, index) => <button key={category.title} type="button" className={`products-row products-category${active === index ? ' is-active' : ''}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-pressed={active === index}>
          <span className="products-icon"><category.icon size={24} strokeWidth={1.8} /></span>
          <span className="products-copy"><span>{category.title}</span><small>{category.description}</small></span>
          <ChevronRight size={16} className="products-arrow" />
        </button>)}
      </div>
      <div className="products-options">
        <p className="products-heading">{categories[active].title}</p>
        {categories[active].items.map(item => <a className="products-row" key={item.title} href={item.href} onClick={() => setOpen(false)}>
          <span className="products-icon"><item.icon size={24} strokeWidth={1.8} /></span>
          <span className="products-copy"><span>{item.title}</span><small>{item.description}</small></span>
        </a>)}
      </div>
    </div>}
  </div>
}
