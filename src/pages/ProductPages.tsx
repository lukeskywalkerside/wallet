import React, { useMemo, useState } from 'react'
import DesktopDownload from '../components/DesktopDownload.tsx'
import {
    Btn, ExodusMark, Hero, TrustBar, Showcase, AssetsBlock, AllDevices, Faq, Banner, Bento, Steps,
    SectionHead, WatchVideo, Tag, H2, Lead, Lines, Card, IMG, gradientBg,
} from './ui.tsx'

const GLOW = IMG('showcase-background.d404896e.png')
const PURPLE_GLOW = IMG('purple-background-glow.d12828f4.png')

const Cta = () => <Btn icon={<ExodusMark />}>Download Exodus Wallet</Btn>

/* ------------------------------ MOBILE ------------------------------ */
export function MobilePage() {
    return (
        <>
            <Hero
                bg={IMG('hero-background.8a6ed99c.jpg')}
                tag="Exodus mobile"
                tagIcon="hex"
                title={<>Simple,<br />secure, smart</>}
                subtitle="Access millions of tokens, swap instantly, and stay in control."
                badges={<WatchVideo href="https://youtu.be/B64xnI_ZH60?si=3y5pY6R2LF9vl8AC" />}
                preview={
                    <div className="flex items-end justify-center gap-3 md:gap-6">
                        <img src={IMG('hero-preview-left.ac39e0f9.png')} alt="Exodus iOS app interface showing the swap process" className="w-[28%]" />
                        <img src={IMG('hero-preview-center.e9cbe2b8.png')} alt="Exodus iOS app interface showing your total portfolio value" className="w-[38%]" />
                        <img src={IMG('hero-preview-right.19e62484.png')} alt="Exodus iOS app interface showing the buying SOL process" className="w-[28%]" />
                    </div>
                }
                previewClass="max-w-[820px]"
            >
                <Cta />
            </Hero>
            <div className="container-xl mx-auto -mt-12 max-w-screen-xl px-4"><div className="flex justify-center"><TrustBar right={<a href="/ledger-wallet" className="font-medium text-white no-underline">LEDGER</a>} /></div></div>

            <section className="container-xl mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 py-20 text-center">
                <H2><Lines text={'Portfolio management\nthat moves with you'} /></H2>
                <Lead>for iOS and Android: swap, buy and sell, stake and earn.</Lead>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <StoreBadge store="App Store" sub="Download on the" rating="4.7" reviews="118k" href="https://apps.apple.com/app/apple-store/id1414384820?pt=118366236&ct=download&mt=8" />
                    <StoreBadge store="Google Play" sub="GET IT ON" rating="4.6" reviews="25k" href="https://play.google.com/store/apps/details?id=exodusmovement.exodus&referrer=utm_source%3Dexodus-website%26utm_campaign%3DMobile%26utm_content%3DMobile" />
                </div>
            </section>

            <Showcase tag="Swap" tagIcon="swap" title={'Swap directly\nfrom your wallet'} text="Access thousands of trading pairs in your pocket with swap fees as low as 0.5%." cta="Start Swapping" glow={GLOW} images={[IMG('showcase-swap.007bd168.jpg')]} />
            <Showcase tag="Buy" tagIcon="buy" title="Buy effortlessly" text="Pay for your favorite tokens by card, bank transfer, Venmo, PayPal, Apple Pay or Google Pay." cta="Download" glow={GLOW} images={[IMG('showcase-buy.738e3af2.jpg'), IMG('showcase-buy-back.9c11effa.jpg')]} flip />
            <Showcase tag="Secure" tagIcon="secure" title={'Ledger hardware\nwallet support'} text="Connect your Ledger device to Exodus and boost your wallet security with enhanced protection made easy." cta="Learn More" ctaHref="/ledger-wallet" glow={GLOW} images={[IMG('showcase-secure.4cb59602.jpg')]} />
            <AssetsBlock text="Securely send and receive assets across 50+ networks. Manage a diverse crypto portfolio, monitor prices, and track performance from anywhere - all in one place." />
        </>
    )
}

function StoreBadge({ store, sub, rating, reviews, href }: { store: string; sub: string; rating: string; reviews: string; href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex min-w-[240px] items-center justify-between gap-6 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-left no-underline transition hover:bg-white/8">
            <span className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wide text-white/64">{sub}</span>
                <span className="text-xl font-semibold">{store}</span>
            </span>
            <span className="flex flex-col items-end text-xs text-white/64">
                <span className="text-sm font-medium text-white">★ {rating}</span>
                <span>{reviews} reviews</span>
            </span>
        </a>
    )
}

/* ------------------------------ DESKTOP ------------------------------ */
export function DesktopPage() {
    return (
        <>
            <Hero
                bg={IMG('hero-background.af81b9fa.jpg')}
                tag="Exodus desktop"
                title={<>Effortless<br />portfolio<br />management</>}
                subtitle="Engineered for security, designed for ease. Manage your crypto with confidence."
                badges={
                    <div className="flex flex-col items-center gap-3">
                        <WatchVideo href="https://youtu.be/B64xnI_ZH60?si=3y5pY6R2LF9vl8AC" />
                    </div>
                }
                preview={<img src={IMG('hero-preview.a5ed490b.png')} alt="Preview image" className="mx-auto w-full" />}
            >
                <Cta />
            </Hero>
            <div className="container-xl mx-auto -mt-8 max-w-screen-xl px-4"><div className="flex justify-center"><TrustBar right={<a href="/trezor-wallet" className="font-medium text-white no-underline">TREZOR</a>} /></div></div>

            <section className="container-xl mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 py-20 text-center">
                <H2><Lines text={'Exodus gives you a way to secure,\nmanage, and swap your blockchain\nassets in one beautiful application'} /></H2>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <DesktopDownload />
                </div>
                <p className="text-xs text-white/48">By downloading Exodus, you agree to the <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a></p>
            </section>

            <Showcase tag="Swap" tagIcon="swap" title={'Swap directly\nfrom your wallet'} text="Buy and sell one cryptocurrency for another from the comfort of your wallet, in seconds – no registration required." cta="Start Swapping" glow={PURPLE_GLOW} images={[IMG('showcase-swap.b796d100.jpg')]} />
            <Showcase tag="Transact" tagIcon="swap" title={'Send and receive\ndigital assets'} text="Send and receive any of the supported digital assets easily with an address or scannable QR code." cta="Get Started" glow={PURPLE_GLOW} images={[IMG('showcase-transact.02180869.jpg')]} flip />
            <Showcase tag="Secure" tagIcon="secure" title={'Trezor hardware\nwallet support'} text="Take your security to the next-level by managing and exchanging your cryptocurrencies in Exodus securely from your Trezor Hardware Wallet." cta="Learn More" ctaHref="/trezor-wallet" glow={PURPLE_GLOW} images={[IMG('showcase-secure.2ef7a551.jpg')]} />

            <section className="relative overflow-hidden py-24 md:py-32">
                <img src={PURPLE_GLOW} alt="Curved peak background glow" className="pointer-events-none absolute left-1/2 top-0 w-[1800px] max-w-none! -translate-x-1/2 opacity-70" />
                <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 text-center">
                    <H2><Lines text={'Diversify your portfolio\nwith quick and easy swaps'} /></H2>
                    <Lead><Lines text={'Securely send and receive crypto\non 50+ networks with full self-custody control.'} /></Lead>
                    <Btn href="https://www.exodus.com/support/en/articles/8598630-how-do-i-swap-crypto-in-exodus-swap" external>Learn More</Btn>
                </div>
            </section>
            <AssetsBlock text="Manage a diverse crypto portfolio across 50+ networks, monitor prices, and track performance from anywhere – all in one place." />
        </>
    )
}

/* ------------------------------ HARDWARE (shared) ------------------------------ */
function HardwareBento({ tagLabel, kb, kbText, kbHref, withImage }: { tagLabel: string; kb: string; kbText: string; kbHref: string; withImage?: boolean }) {
    return (
        <section className="py-16 md:py-24">
            <SectionHead tag={tagLabel} tagIcon="eye" title={'The power of\nhardware security'} />
            <Bento
                items={[
                    { title: 'Supported assets', text: 'Secure the assets that matter to you,\nfrom Bitcoin to Ethereum and stablecoins,\nwith more added regularly.', cta: 'Browse Assets', href: '/assets', glow: IMG('bento-gradient-bottom-right.d6479310.png') },
                    { title: 'Never used\nhardware wallets?', text: kbText, href: kbHref, glow: IMG('bento-gradient-bottom-left.2d4971e7.png'), image: withImage ? IMG('image-hardware.29f7b64d.jpg') : undefined },
                ]}
            />
        </section>
    )
}

/* ------------------------------ LEDGER ------------------------------ */
export function LedgerPage() {
    return (
        <>
            <Hero
                bg={IMG('hero-background.5576d612.jpg')}
                tag="Ledger + Exodus Mobile"
                tagIcon="lock"
                title={<>Secure crypto<br />storage<br />on the go</>}
                subtitle="Fortify your Exodus experience with Ledger hardware wallet protection. Enhanced security meets intuitive design for next-level crypto management."
                preview={<img src={IMG('hero-preview.ce325941.png')} alt="Preview image" className="mx-auto w-full max-w-[700px]!" />}
                previewClass="max-w-[700px]"
            >
                <Cta />
            </Hero>

            <section className="py-16 md:py-24">
                <SectionHead title="Get started" />
                <Steps steps={[
                    { n: 1, title: 'Download', sub: 'Exodus Mobile', text: "Get the app from your device's app store. Available for iOS and Android.", cta: 'Download App', href: '/download' },
                    { n: 2, title: 'Get a Ledger', sub: 'and set it up', text: 'Download the Ledger Live app and install apps for the crypto networks that you want to use.' },
                    { n: 3, title: 'Pair Exodus', sub: 'with Ledger', text: 'Start managing your crypto assets with next-level security and a peace of mind.' },
                ]} />
            </section>

            <HardwareBento tagLabel="Ultimate Solution" kb="Ledger" kbText={"Visit our Knowledge Base to learn\nhow to connect your Ledger to Exodus.\nIt's easier than you think,\nand we're here to help!"} kbHref="https://www.exodus.com/support/en/articles/9811448-getting-started-with-exodus-and-ledger" withImage />

            <Faq
                items={[
                    { q: 'How does the Ledger integration work in Exodus?', a: 'Ledger hardware wallets store your recovery phrases and private keys offline, protecting your funds from malware and hackers. Connect your Ledger Nano X or Flex to Exodus Mobile to see your Ledger as a portfolio where you can send, receive, and swap funds. Your Ledger must be connected via encrypted Bluetooth to interact with these funds.' },
                    { q: 'Is my Ledger linked to my Exodus 12-word secret recovery phrase?', a: 'No. Your Ledger and Exodus wallets are completely separate. Your Ledger uses a 24-word phrase created through Ledger Live, while Exodus uses its own 12-word phrase. Write down and securely store both phrases separately, as each can only recover its respective wallet.' },
                    { q: 'Which Ledger hardware wallets does Exodus support?', a: 'Exodus Mobile supports Ledger Nano X and Ledger Flex.' },
                    { q: 'How do I set up a new Ledger?', a: <><p>Ledger devices must be set up through <a className="underline" href="https://www.ledger.com/start">Ledger Live</a> before connecting to Exodus:</p><ol className="mt-3 list-decimal pl-5"><li>Download Ledger Live from Ledger's website</li><li>Connect your Ledger to Ledger Live and complete the setup process</li><li>Install apps for the crypto networks you want to use (e.g., Bitcoin, Ethereum)</li><li>Create an asset account for each network</li><li>Connect your Ledger to Exodus Mobile</li></ol></> },
                    { q: 'Which networks are supported in the Ledger and Exodus integration?', a: <><p>The following networks are supported on Ledger in Exodus Mobile:</p><ul className="mt-3 list-disc pl-5"><li>Bitcoin</li><li>Ethereum</li><li>Solana</li><li>Base</li><li>Polygon</li><li>Tron</li></ul><p className="mt-3">Before you can use a network in Ledger and Exodus, you need to install the app for that specific network. You can install asset apps with Ledger Live.</p></> },
                ]}
            />

            <Banner
                bg={IMG('banner-background.e9b8e6b9.jpg')}
                title="Trezor x Exodus"
                text={'Using Exodus Desktop?\nLearn more about\nour Trezor Integration.'}
                href="/trezor-wallet"
                tag={<div className="flex flex-wrap gap-2"><Pill>New: Safe 7 Support</Pill><Pill>New: Exodus Mobile Support</Pill></div>}
            >
                <img src={IMG('hero-preview-sm.b3c5a5bf.png')} alt="Hardware wallet devices" className="pointer-events-none absolute bottom-0 right-0 hidden w-[46%] md:block" />
            </Banner>
        </>
    )
}

function Pill({ children }: { children: React.ReactNode }) {
    return <span className="inline-flex items-center rounded-full border border-[#8161FF]/40 bg-[#8161FF]/16 px-3 py-1 text-xs font-medium text-[#CFC2FF]">{children}</span>
}

/* ------------------------------ TREZOR ------------------------------ */
export function TrezorPage() {
    return (
        <>
            <Hero
                bg={IMG('hero-background.0aa76fde.jpg')}
                tag="Trezor Hardware Wallet + Exodus"
                tagIcon="lock"
                title={<>Boost crypto security with<br />pro-level protection</>}
                subtitle="Integrate your Trezor hardware wallet with Exodus Desktop or Mobile for an advanced defense stack."
                badges={
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-white/64">
                            Compatible with Trezor{' '}
                            <a className="underline" href="https://trezor.io/trezor-model-t">Model T</a>,{' '}
                            <a className="underline" href="https://trezor.io/trezor-model-one">One</a>,{' '}
                            <a className="underline" href="https://trezor.io/trezor-safe-3">Safe 3</a>,{' '}
                            <a className="underline" href="https://trezor.io/trezor-safe-5">Safe 5</a>, and{' '}
                            <a className="underline" href="https://trezor.io/trezor-safe-7">Safe 7</a>
                        </p>
                        <div className="flex flex-wrap justify-center gap-2"><Pill>New: Safe 7 Support</Pill><Pill>New: Exodus Mobile Support</Pill></div>
                    </div>
                }
                preview={<img src={IMG('hero-preview.331fac6b.png')} alt="Preview image" className="mx-auto w-full max-w-[760px]!" />}
                previewClass="max-w-[760px]"
            >
                <Cta />
            </Hero>

            <section className="py-16 md:py-24">
                <SectionHead title="Get started" sub="Your Trezor must be set up first with Trezor Suite before connecting to Exodus." />
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-9">
                    <Card className="flex flex-col gap-4">
                        <h3 className="font-eudoxus text-[28px] font-bold">Desktop</h3>
                        <p className="text-base leading-[1.6] text-white/64">Plug in your Trezor, then launch Exodus Desktop. Your device will connect automatically.</p>
                        <div className="pt-4"><Btn href="https://www.exodus.com/support/en/articles/8598656-getting-started-with-exodus-and-trezor" variant="outline" className="!min-h-11 !px-6 !text-sm">Learn More</Btn></div>
                    </Card>
                    <Card className="flex flex-col gap-4">
                        <h3 className="font-eudoxus text-[28px] font-bold">Trezor Safe 7 x<br />Mobile</h3>
                        <p className="text-base leading-[1.6] text-white/64">Connecting Trezor Safe 7 to Exodus Mobile is supported via Bluetooth. Turn on Bluetooth, unlock your device, and pair your Trezor via Settings in Exodus Mobile.</p>
                    </Card>
                </div>
            </section>

            <HardwareBento tagLabel="Pro-level Solution" kb="Trezor" kbText={"Visit our Knowledge Base to learn\nhow to connect your Trezor to Exodus.\nIt's easier than you think,\nand we're here to help!"} kbHref="https://www.exodus.com/support/en/articles/8598656-getting-started-with-exodus-and-trezor" />

            <Faq
                items={[
                    { q: 'How does Trezor work, and why can it improve security?', a: <><p>Trezor is a hardware wallet that securely generates and stores your secret recovery phrase and private keys in its flash memory, without connecting to the internet. This makes Trezor a true cold wallet.</p><p className="mt-3">When you connect your Trezor to a computer to send a transaction, the transaction is signed offline by the Trezor device. The signed information is then shared with the computer solely to broadcast the transaction.</p><p className="mt-3">By generating and storing your secret recovery phrase and signing transactions offline, Trezor can add an extra layer of security to protect your secret recovery phrase and private keys from malware, hackers, and other online threats.</p><p className="mt-3">Remember: your wallet is only as secure as your secret recovery phrase—never create digital copies or share it with anyone.</p></> },
                    { q: 'How does the Trezor integration work in Exodus?', a: <><p>Your Trezor connects to Exodus Desktop and appears as a separate portfolio, allowing you to send and receive funds just like with your regular Exodus wallet.</p><p className="mt-3">To send funds from your Trezor portfolio, your device must be physically connected via USB.</p></> },
                    { q: 'Which hardware wallets does Exodus support?', a: <><p>Exodus Desktop supports the following Trezor models:</p><ul className="mt-3 list-disc pl-5"><li>Trezor Model T</li><li>Trezor One</li><li>Trezor Safe 3</li><li>Trezor Safe 5</li><li>Trezor Safe 7</li></ul></> },
                    { q: 'Can I connect multiple Trezor devices?', a: <><p>Yes! You can connect multiple compatible Trezor hardware wallets to Exodus.</p><p className="mt-3">Each Trezor will appear as a separate portfolio. You will only be able to send from the Trezor that is currently connected. Others will appear as read-only portfolios in your Exodus wallet.</p></> },
                    { q: 'Which assets are supported in the Trezor and Exodus integration?', a: <p>View all supported assets by checking for a checkmark in the Trezor column on the <a className="underline" href="/assets">Exodus status page</a>.</p> },
                    { q: 'Can I stake crypto with my Trezor?', a: <><p>Staking crypto from your Exodus Trezor portfolio isn't supported. Staking is only supported with crypto in your Exodus portfolio.</p><p className="mt-3">If you have crypto on your Trezor that you want to stake, you can transfer it to your Exodus portfolio.</p></> },
                ]}
            />

            <Banner bg={IMG('banner-background.291451cc.jpg')} title="Ledger x Exodus" text={'Using Exodus Mobile?\nLearn more about our\nLedger Integration.'} href="/ledger-wallet">
                <img src={IMG('hero-preview.ce325941.png')} alt="Hardware wallet devices" className="pointer-events-none absolute bottom-0 right-0 hidden w-[40%] md:block" />
            </Banner>
        </>
    )
}

/* ------------------------------ STAKING ------------------------------ */
const STAKE_ASSETS: { sym: string; name: string; apy: number }[] = [
    { sym: 'ETH', name: 'Ethereum', apy: 2.9 },
    { sym: 'SOL', name: 'Solana', apy: 6.3 },
    { sym: 'ADA', name: 'Cardano', apy: 3.1 },
    { sym: 'ATOM', name: 'Cosmos', apy: 16.5 },
    { sym: 'DOT', name: 'Polkadot', apy: 11.4 },
    { sym: 'TRX', name: 'Tron', apy: 4.2 },
    { sym: 'NEAR', name: 'NEAR', apy: 8.9 },
    { sym: 'ALGO', name: 'Algorand', apy: 4.5 },
]

export function StakingPage() {
    const [sym, setSym] = useState('SOL')
    const [holdings, setHoldings] = useState(110000)
    const [months, setMonths] = useState(12)
    const asset = STAKE_ASSETS.find((a) => a.sym === sym)!
    const reward = useMemo(() => holdings * (asset.apy / 100) * (months / 12), [holdings, asset, months])
    const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 })

    return (
        <>
            <Hero
                bg={IMG('hero-background.4218795b.jpg')}
                title={<>Stake crypto,<br />earn rewards</>}
                subtitle="Earn crypto rewards directly in Exodus and manage your portfolio's growth. Simple, easy, automatic."
                minH="md:min-h-[640px]"
                preview={
                    <div className="relative mx-auto flex h-[220px] w-[220px] items-center justify-center md:h-[320px] md:w-[320px]">
                        <img src={IMG('rewards-icon-surrounded.eb117186.png')} alt="" className="absolute inset-0 h-full w-full object-contain" />
                        <img src={IMG('rewards-icon-center.563ea9bc.png')} alt="" className="relative z-1 w-[40%]" />
                    </div>
                }
                previewClass="max-w-[320px]"
            >
                <Cta />
            </Hero>

            <section className="container-xl mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 py-16 text-center">
                <H2><Lines text={'Track and earn\nmultiple staking rewards'} /></H2>
                <Btn href="#staking-calculator" variant="outline" className="!min-h-11 !px-6 !text-sm">Calculate Potential Rewards</Btn>
                <p className="max-w-[640px] text-xs text-white/48">All staking services are provided by third parties.* Expected Annual Percentage Yield rates vary by asset with different earning mechanisms. Rates shown are averages and subject to change over time.</p>
            </section>

            <section id="staking-calculator" className="container-xl relative mx-auto max-w-screen-xl scroll-mt-28 px-4 py-16">
                <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0b0a14] px-6 py-16 md:px-16">
                    <img src={IMG('background-gradient.d6954ed0.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50" />
                    <div className="relative z-1 flex flex-col items-center gap-4 text-center">
                        <Tag icon="stack" center>Put your assets to work</Tag>
                        <H2>Calculate your earnings</H2>
                        <Lead className="max-w-[520px]">Adjust your holding amount and term to see an estimate of your potential rewards.</Lead>
                    </div>
                    <div className="relative z-1 mx-auto mt-10 grid max-w-[880px] grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-6 rounded-2xl border border-white/8 bg-black/50 p-6 backdrop-blur">
                            <label className="flex flex-col gap-2 text-sm text-white/64">
                                Your asset
                                <select value={sym} onChange={(e) => setSym(e.target.value)} className="rounded-xl border border-white/12 bg-black px-4 py-3 text-base text-white">
                                    {STAKE_ASSETS.map((a) => <option key={a.sym} value={a.sym}>{a.name} ({a.sym}) - {a.apy}% APY</option>)}
                                </select>
                            </label>
                            <label className="flex flex-col gap-2 text-sm text-white/64">
                                Your holdings
                                <input type="number" min={0} value={holdings} onChange={(e) => setHoldings(Math.max(0, Number(e.target.value)))} className="rounded-xl border border-white/12 bg-black px-4 py-3 text-base text-white" />
                            </label>
                            <label className="flex flex-col gap-3 text-sm text-white/64">
                                <span className="flex justify-between"><span>Term</span><span className="text-white">{months} {months === 1 ? 'month' : 'months'}</span></span>
                                <input type="range" min={1} max={24} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="accent-[#8161FF]" />
                                <span className="flex justify-between text-xs"><span>1 month</span><span>24 months</span></span>
                            </label>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#8161FF]/40 bg-[#8161FF]/10 p-6 text-center">
                            <span className="text-sm text-white/64">Potential Reward</span>
                            <span className="font-eudoxus text-5xl font-bold text-[#8EF06A]">+{fmt(reward)}</span>
                            <span className="text-white/64">{sym}</span>
                            <span className="text-sm text-white/48">Estimated {asset.apy}% APY</span>
                        </div>
                    </div>
                    <p className="relative z-1 mt-8 text-center text-xs text-white/48">* Estimated Staking Calculator provided for information only. Results are not guaranteed rewards.</p>
                    <div className="relative z-1 mt-6 flex justify-center"><Cta /></div>
                </div>
            </section>

            <section className="relative overflow-hidden py-28 text-center">
                <img src={IMG('calculate-rewards-background.be4f33a7.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" />
                <div className="container-xl relative z-1 mx-auto flex max-w-[760px] flex-col items-center gap-6 px-4">
                    <H2>What is staking?</H2>
                    <Lead>Delegate your crypto assets to help secure and decentralize <a className="underline" href="https://www.exodus.com/support/en/articles/8598889-how-do-consensus-mechanisms-like-proof-of-work-pow-and-proof-of-stake-pos-work#h_3e2583e794">Proof-of-Stake networks</a> such as Ethereum, Cardano, Solana, and more while earning rewards.</Lead>
                </div>
            </section>

            <section className="container-xl relative mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 py-24 text-center">
                <img src={IMG('knowledge-base-background.72946f13.png')} alt="" className="pointer-events-none absolute inset-0 -z-1 h-full w-full object-cover opacity-60" />
                <Tag icon="bolt" center>Multichain rewards in one</Tag>
                <H2>Set and forget</H2>
                <Lead className="max-w-[520px]"><Lines text={'Manage and claim all your staking crypto rewards across multiple assets in one place with Exodus.'} /></Lead>
                <Cta />
            </section>

            <section className="container-xl mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 py-24 text-center">
                <Tag icon="stack" center>Earn crypto rewards 24/7</Tag>
                <H2><Lines text={'Auto-restaking earns\nrewards on autopilot'} /></H2>
                <Lead className="max-w-[560px]">Minimize staking fees and compound your rewards with automatic staking on select assets, available on Desktop and Mobile.</Lead>
            </section>

            <AllDevices />
        </>
    )
}









