import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EXT = {
    xoramp: 'https://xoramp.com',
    xoswap: 'https://xoswap.com',
    passkeys: 'https://passkeys.foundation/',
    youtube: 'https://www.youtube.com/c/exodus',
    ramp: 'https://www.exodus.com/support/en/articles/10776618-how-do-i-buy-crypto-with-xo-ramp-in-exodus',
    earn: 'https://www.exodus.com/earn-crypto',
}

/** label (lowercased) -> href. Applied to <a> elements that have no href. */
const MAP: Record<string, string> = {
    'exodus pay': '/pay',
    'mobile wallet': '/mobile',
    'desktop wallet': '/desktop',
    'ledger hardware wallet': '/ledger-wallet',
    'trezor hardware wallet': '/trezor-wallet',
    'stake and earn': '/staking-crypto',
    'xo ramp': EXT.xoramp,
    'xo swap': EXT.xoswap,
    'passkeys wallet & sdk': EXT.passkeys,
    '24/7 customer support': '/contact-support',
    'crypto assets': '/assets',
    'legal inquiries': '/legal-inquiries',
    'knowledge base': '/support',
    'youtube': EXT.youtube,
    'newsletter': '/newsletter',
    'about us': '/about',
    'investors': '/investors',
    'careers': '/careers',
    'contact us': '/contact',
    'brand guidelines': '/brand',
    'security': '/security',
    'intellectual property': '/trademarks',
    'privacy policy': '/privacy',
    'terms of service': '/terms',
    'trademarks': '/trademarks',
    'terms': '/terms',
    'privacy': '/privacy',
    'subscribe': '/newsletter',
    'download': '/download',
    'get exodus': '/download',
    'download exodus': '/download',
    'download for mac': '/download',
    'download for mac (apple silicon)': 'https://downloads.exodus.com/releases/exodus-macos-arm64-26.10.7.dmg',
    'download for mac (intel)': 'https://downloads.exodus.com/releases/exodus-macos-26.10.7.dmg',
    'available on other devices': '/download',
    'browse assets': '/assets',
    'contact support': '/contact-support',
    'learn more about buying crypto with xo ramp': EXT.ramp,
    'learn more about staking and earning crypto': '/staking-crypto',
    'subscribe to the newsletter!': '/newsletter',
    'about us learn more about exodus': '/about',
}

const norm = (t: string) => t.replace(/\s+/g, '').toLowerCase()
const NORM = Object.entries(MAP).map(([k, v]) => [norm(k), v] as [string, string]).sort((a, b) => b[0].length - a[0].length)

function resolve(a: HTMLAnchorElement): string | undefined {
    const t = norm(a.textContent || '')
    if (!t) return undefined
    for (const [k, v] of NORM) {
        if (t === k) return v
        if (k.length >= 14 && t.startsWith(k)) return v
    }
    return undefined
}

/** Fills in hrefs on anchors captured without one and routes internal links through react-router. */
export default function LinkResolver() {
    const navigate = useNavigate()
    const location = useLocation()

    // scroll to top / hash on navigation
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) { el.scrollIntoView(); return }
        }
        window.scrollTo(0, 0)
    }, [location.pathname, location.hash])

    useEffect(() => {
        const apply = () => {
            document.querySelectorAll('a:not([href])').forEach((n) => {
                const a = n as HTMLAnchorElement
                const href = resolve(a)
                if (href) {
                    a.setAttribute('href', href)
                    if (/^https?:/.test(href)) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener noreferrer') }
                    else a.removeAttribute('target')
                }
            })
        }
        apply()
        const mo = new MutationObserver(apply)
        mo.observe(document.documentElement, { childList: true, subtree: true })
        return () => mo.disconnect()
    }, [location.pathname])

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
            const a = (e.target as HTMLElement).closest?.('a') as HTMLAnchorElement | null
            if (!a) return
            const raw = a.getAttribute('href')
            if (!raw || raw.startsWith('mailto:') || raw.startsWith('tel:')) return
            let url: URL
            try { url = new URL(raw, window.location.origin) } catch { return }
            const isInternal = url.origin === window.location.origin ||
                (url.hostname === 'www.exodus.com' && ROUTES.has(url.pathname.replace(/\/$/, '') || '/'))
            if (!isInternal) return
            const path = url.pathname.replace(/\/$/, '') || '/'
            if (url.origin === window.location.origin && !ROUTES.has(path)) return
            e.preventDefault()
            navigate(path + url.search + url.hash)
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [navigate])

    return null
}

export const ROUTES = new Set([
    '/', '/pay', '/download', '/mobile', '/desktop', '/assets', '/staking-crypto', '/ledger-wallet', '/trezor-wallet',
    '/about', '/investors', '/careers', '/contact', '/brand', '/security', '/support', '/contact-support', '/legal-inquiries',
    '/newsletter', '/privacy', '/terms', '/trademarks',
])
