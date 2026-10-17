import React, { useMemo, useState } from 'react'
import { Search, Mail, ChevronDown, Info } from 'lucide-react'
import { Btn, H1, H2, Lead, Lines, Tag, Card, IMG, PageTitleBlock, AllDevices } from './ui.tsx'
import { Md } from './Md.tsx'
import privacyMd from '../content/privacy.md?raw'
import legalMd from '../content/legal-inquiries.md?raw'

/* ------------------------------ SUPPORT / KB ------------------------------ */
const collections: [string, string, number, string, string][] = [
    ['Getting started', 'Beginning your crypto journey with Exodus', 17, '6990819-getting-started', 'b5f47c4ed12d7ad4228d4ded42604952'],
    ['Swap', 'How to swap one asset for another', 7, '6990822-swap', '3e4b2245db6e1cbd01937d831540dfd7'],
    ['Exodus Pay', 'Send cash and pay with a crypto card', 3, '19647814-exodus-pay', '62a85947ccd0c8bd508b335c13e553f4'],
    ['Buy & sell Bitcoin & crypto', 'Learn how to buy and sell Bitcoin and crypto', 5, '6990820-buy-and-sell-bitcoin-and-crypto', '132f5395d5458bd0ccc837311bad5a8e'],
    ['FAQ', 'Frequently asked questions and general information', 31, '6990818-faq', '7ce6a3b299b72ec5c0eb243de8c9689f'],
    ['Staking', 'Learn how you can passively earn crypto rewards right inside of your Exodus wallet', 13, '6990823-staking', 'd108bedd54075f0e8fc95b6c208ae12d'],
    ['Investors', 'Everything you need to know about trading Exodus shares', 10, '6990817-investors', 'c401c2e871a627b74b53d84fa13bd425'],
    ['Security', 'How to keep your crypto safe', 15, '6990825-security', '8c5307382f4a243779b8dc2de432d072'],
    ['Backup and restore', 'Ensure you can always recover your wallet', 7, '6990821-backup-and-restore', '4aaaca565ad7909b7687035e8a2d1418'],
    ['Hardware wallets', 'Taking your Exodus security to the next level', 4, '6990824-hardware-wallets', '979bfaecc066a4cac4dc731d7223c504'],
    ['Education', 'Learn about crypto and blockchain', 21, '6990826-education', '6bd0d8ff84f7f376e341b4b9b04bb192'],
    ['Assets', 'Everything you need to know about assets in Exodus', 21, '6990827-assets', '92a7251155fb14be66a0a5919fdbd3f6'],
    ['Troubleshooting', "Fix-it guides for the DIY'er", 24, '6990828-troubleshooting', '0bbe72a184364bdfb197f7fab3e4113f'],
]

export function SupportPage() {
    const [q, setQ] = useState('')
    const shown = collections.filter(([t, d]) => (t + d).toLowerCase().includes(q.toLowerCase()))
    return (
        <>
            <section className="relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-48">
                <img src={IMG('hero-glow-background.8e803691.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 [mask-image:linear-gradient(180deg,#000_60%,transparent)]" />
                <div className="container-xl relative z-1 mx-auto flex max-w-[800px] flex-col items-center gap-6 px-4 pb-16 text-center">
                    <H1 className="!text-[40px] md:!text-[64px]">How can we help you today?</H1>
                    <Lead>Find quick solutions in our extensive Knowledge Base.<br />Need help? Contact our support team using our chat.</Lead>
                    <label className="flex w-full items-center gap-3 rounded-full border border-white/16 bg-black/60 px-5 py-4 backdrop-blur">
                        <Search size={20} className="text-white/48" />
                        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for articles..." className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/40" />
                    </label>
                </div>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 pb-20 sm:grid-cols-2 md:px-9 lg:grid-cols-3">
                {shown.map(([t, d, n, slug, img]) => (
                    <a key={t} href={`https://www.exodus.com/support/en/collections/${slug}`} target="_blank" rel="noopener noreferrer" className="no-underline">
                        <Card className="flex h-full flex-col gap-3 transition hover:border-white/24">
                            <h3 className="font-eudoxus text-xl font-bold">{t}</h3>
                            <p className="text-sm text-white/64">{d}</p>
                            <span className="mt-auto pt-2 text-xs text-white/48">{n} articles</span>
                        </Card>
                    </a>
                ))}
                {shown.length === 0 && <p className="col-span-full text-center text-white/48">No collections match "{q}".</p>}
            </section>
            <AllDevices />
        </>
    )
}

/* ------------------------------ CONTACT SUPPORT ------------------------------ */
export function ContactSupportPage() {
    return (
        <>
            <section className="relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-48">
                <img src={IMG('contact-support-header.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 [mask-image:linear-gradient(180deg,#000_60%,transparent)]" />
                <div className="container-xl relative z-1 mx-auto flex max-w-[860px] flex-col items-center gap-6 px-4 pb-16 text-center">
                    <H1 className="!text-[40px] md:!text-[64px]">How can we help you?</H1>
                    
                </div>
            </section>
            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-4 px-4 py-16 text-center">
                <H2 className="!text-[28px] md:!text-[40px]">Didn’t find what you were looking for?</H2>
                <Lead>Please reach out to us, we will be glad to answer any of your questions.</Lead>
            </section>
            <section className="container-xl mx-auto max-w-[800px] px-4 pb-24">
                <Card className="flex flex-col items-center gap-4 text-center">
                    <h2 className="font-eudoxus text-3xl font-bold">Support</h2>
                    <p className="text-white/64">We will help you as soon as possible via our chat.</p>
                    <button type="button" onClick={() => alert('Chat is not available in this prototype.')} className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(169deg,#5C6CF6,#A371F4_53%)] px-8 text-base font-medium text-white"><Mail size={18} /> Send us a message</button>
                    <p className="mt-2 flex items-start gap-2 text-sm text-white/48"><Info size={16} className="mt-0.5 shrink-0" /> Exodus Staff will NEVER ask for sensitive information, including passwords, 12-word phrases or private keys.</p>
                </Card>
            </section>
        </>
    )
}

/* ------------------------------ NEWSLETTER ------------------------------ */
export function NewsletterPage() {
    const [email, setEmail] = useState('')
    const [done, setDone] = useState(false)
    return (
        <section className="container-xl relative mx-auto flex min-h-[70vh] max-w-[640px] flex-col items-center justify-center gap-6 px-4 py-24 text-center">
            <img src={IMG('subscribe-pop-up-background.jpg')} alt="" className="pointer-events-none absolute inset-0 -z-1 h-full w-full rounded-3xl object-cover opacity-40" />
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-[#8161FF]/24 text-[#B19DFF]"><Mail size={28} /></span>
            <H1 className="!text-[36px] md:!text-[56px]">Subscribe to the Newsletter</H1>
            <h2 className="text-lg text-white/80">Don’t miss out on the latest Exodus news and product updates!</h2>
            <Lead>Enter your email to get the Exodus Newsletter delivered straight to your inbox.</Lead>
            {done ? (
                <p className="rounded-2xl border border-[#8EF06A]/40 bg-[#8EF06A]/10 px-6 py-4 text-[#8EF06A]">Thanks! You're subscribed.</p>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }} className="flex w-full flex-col gap-3 sm:flex-row">
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email address…" className="min-h-14 flex-1 rounded-full border border-white/16 bg-black/60 px-6 text-base text-white outline-none placeholder:text-white/40 focus:border-[#8161FF]" />
                    <button type="submit" className="min-h-14 cursor-pointer rounded-full bg-[linear-gradient(169deg,#5C6CF6,#A371F4_53%)] px-8 text-base font-medium text-white">Submit</button>
                </form>
            )}
            <p className="text-xs text-white/48">We’ll only use your email to send information about Exodus. You can unsubscribe at any time.</p>
        </section>
    )
}

/* ------------------------------ DOCS ------------------------------ */
function DocShell({ children, narrow = true }: { children: React.ReactNode; narrow?: boolean }) {
    return <div className={'container-xl mx-auto px-4 pb-24 pt-16 md:pt-24 ' + (narrow ? 'max-w-[860px]' : 'max-w-screen-xl')}>{children}</div>
}

export function PrivacyPage() {
    return <DocShell><Md source={privacyMd} /></DocShell>
}

export function LegalInquiriesPage() {
    return <DocShell><Md source={legalMd} /></DocShell>
}

export function PdfDocPage({ title, href }: { title: string; href: string }) {
    return (
        <DocShell>
            <div className="flex flex-col items-center gap-6 text-center">
                <H1 className="!text-[40px] md:!text-[56px]">{title}</H1>
                <Lead>This document is published by Exodus as a PDF.</Lead>
                <Btn href={href} external>Open the PDF on exodus.com</Btn>
            </div>
        </DocShell>
    )
}

/* ------------------------------ ASSETS ------------------------------ */
type Asset = { n: string; s: string; color: string; apy?: number; mobile: boolean; desktop: boolean; trezor: boolean; ledger: boolean; buy: boolean; swap: boolean }
const A = (n: string, s: string, color: string, apy: number | undefined, f: string): Asset => ({ n, s, color, apy, mobile: f[0] === '1', desktop: f[1] === '1', trezor: f[2] === '1', ledger: f[3] === '1', buy: f[4] === '1', swap: f[5] === '1' })
const ASSETS: Asset[] = [
    A('Bitcoin', 'BTC', '#F7931A', undefined, '111111'),
    A('Ethereum', 'ETH', '#627EEA', 2.9, '111111'),
    A('Tether', 'USDT', '#26A17B', undefined, '111111'),
    A('BNB', 'BNB', '#F3BA2F', undefined, '110011'),
    A('XRP', 'XRP', '#23292F', undefined, '111011'),
    A('Solana', 'SOL', '#9945FF', 6.3, '111111'),
    A('USD Coin', 'USDC', '#2775CA', undefined, '111111'),
    A('Dogecoin', 'DOGE', '#C2A633', undefined, '111011'),
    A('Cardano', 'ADA', '#0033AD', 3.1, '111011'),
    A('Tron', 'TRX', '#EB0029', 4.2, '111111'),
    A('Avalanche', 'AVAX', '#E84142', undefined, '111011'),
    A('Chainlink', 'LINK', '#2A5ADA', undefined, '111011'),
    A('Polkadot', 'DOT', '#E6007A', 11.4, '111011'),
    A('Litecoin', 'LTC', '#345D9D', undefined, '111111'),
    A('Cosmos', 'ATOM', '#2E3148', 16.5, '111011'),
    A('NEAR Protocol', 'NEAR', '#00C08B', 8.9, '110011'),
    A('Stellar', 'XLM', '#14B6E7', undefined, '111011'),
    A('Algorand', 'ALGO', '#2D2D2D', 4.5, '111011'),
    A('Polygon', 'POL', '#8247E5', undefined, '111111'),
    A('Shiba Inu', 'SHIB', '#E8420F', undefined, '111011'),
]

const Check = ({ on }: { on: boolean }) => <span className={on ? 'text-[#8EF06A]' : 'text-white/16'}>{on ? '✓' : '–'}</span>

export function AssetsPage() {
    const [q, setQ] = useState('')
    const [sort, setSort] = useState<'index' | 'apy' | 'alpha'>('index')
    const rows = useMemo(() => {
        let r = ASSETS.map((a, i) => ({ ...a, i: i + 1 })).filter((a) => (a.n + a.s).toLowerCase().includes(q.toLowerCase()))
        if (sort === 'apy') r = [...r].sort((a, b) => (b.apy ?? -1) - (a.apy ?? -1))
        if (sort === 'alpha') r = [...r].sort((a, b) => a.n.localeCompare(b.n))
        return r
    }, [q, sort])
    return (
        <>
            <section className="relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-48">
                <img src={IMG('hero-glow-background.8e803691.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 [mask-image:linear-gradient(180deg,#000_60%,transparent)]" />
                <div className="container-xl relative z-1 mx-auto flex max-w-[800px] flex-col items-center gap-6 px-4 pb-12 text-center">
                    <div className="rounded-full border border-white/12 bg-black/40 px-4 py-2"><Tag icon="lock">Trusted by millions since 2015</Tag></div>
                    <H1 className="!text-[40px] md:!text-[64px]">Crypto assets support</H1>
                    <Lead>Explore the assets you can hold in Exodus, earn rewards on, and everything in between.</Lead>
                </div>
            </section>

            <section className="container-xl mx-auto max-w-screen-xl px-4 pb-20 md:px-9">
                <label className="mx-auto mb-6 flex max-w-[480px] items-center gap-3 rounded-full border border-white/16 bg-black/60 px-5 py-3">
                    <Search size={18} className="text-white/48" />
                    <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search assets" className="w-full bg-transparent text-white outline-none placeholder:text-white/40" />
                </label>
                <div className="overflow-hidden rounded-3xl border border-white/8 bg-[#0b0a14]">
                    <div className="flex flex-col items-start justify-between gap-3 border-b border-white/8 p-5 sm:flex-row sm:items-center">
                        <h4 className="flex items-center gap-2 font-eudoxus text-lg font-bold">Supported Crypto Assets <Info size={16} className="text-white/48" /></h4>
                        <label className="flex items-center gap-2 text-sm text-white/64">Sort by:
                            <span className="relative">
                                <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="cursor-pointer appearance-none rounded-full border border-white/16 bg-black py-2 pl-4 pr-9 text-white">
                                    <option value="index">CoinMarketCap Index</option>
                                    <option value="apy">APY Rewards</option>
                                    <option value="alpha">Alphabetical</option>
                                </select>
                                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                            </span>
                        </label>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[820px] text-left text-sm">
                            <thead className="text-xs uppercase tracking-wide text-white/48">
                                <tr className="border-b border-white/8">
                                    {['#', 'Digital Asset', 'APY Rewards', 'Mobile', 'Desktop', 'Trezor', 'Ledger', 'Buy / Sell', 'Swap'].map((h, i) => <th key={h} className={'px-5 py-3 font-medium ' + (i > 2 ? 'text-center' : '')}>{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((a) => (
                                    <tr key={a.s} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                                        <td className="px-5 py-4 text-white/48">{a.i}</td>
                                        <td className="px-5 py-4"><span className="flex items-center gap-3"><span className="inline-flex size-9 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: a.color }}>{a.s.slice(0, 4)}</span><span><span className="font-medium">{a.n}</span> <span className="text-white/48">{a.s}</span></span></span></td>
                                        <td className="px-5 py-4">{a.apy ? <span className="text-[#8EF06A]">{a.apy}%</span> : <span className="text-white/24">–</span>}</td>
                                        <td className="px-5 py-4 text-center"><Check on={a.mobile} /></td>
                                        <td className="px-5 py-4 text-center"><Check on={a.desktop} /></td>
                                        <td className="px-5 py-4 text-center"><Check on={a.trezor} /></td>
                                        <td className="px-5 py-4 text-center"><Check on={a.ledger} /></td>
                                        <td className="px-5 py-4 text-center"><Check on={a.buy} /></td>
                                        <td className="px-5 py-4 text-center"><Check on={a.swap} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="mt-4 text-center text-xs text-white/40">Sample of supported assets. Live status data loads from Exodus in production.</p>
            </section>
            <AllDevices />
        </>
    )
}


