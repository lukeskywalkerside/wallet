import React from 'react'
import DesktopDownload from '../components/DesktopDownload.tsx'
import { WEB_APP_SIGN_IN } from '../downloads.ts'
import { ArrowRight, ShieldCheck, ScanFace, LifeBuoy, ArrowDownToLine, Heart, Bitcoin, Star } from 'lucide-react'
import { Btn, ExodusMark, H2, Lead, Lines, Tag, Faq, Card, IMG, SectionHead, AssetsBlock } from './ui.tsx'


function Legal() {
    return <p className="text-xs text-white/48"><a className="underline" href="/terms">Terms</a> &amp; <a className="underline" href="/privacy">Privacy</a> apply</p>
}

function Stores({ dark }: { dark?: boolean }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={WEB_APP_SIGN_IN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/16 bg-black px-4 py-2 no-underline">
                <span className="text-2xl"></span>
                <span className="flex flex-col text-left leading-tight"><span className="text-[10px] text-white/64">Download on the</span><span className="text-base font-semibold">App Store</span></span>
            </a>
            <a href={WEB_APP_SIGN_IN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/16 bg-black px-4 py-2 no-underline">
                <span className="text-xl">▶</span>
                <span className="flex flex-col text-left leading-tight"><span className="text-[10px] text-white/64">GET IT ON</span><span className="text-base font-semibold">Google Play</span></span>
            </a>
        </div>
    )
}

function Rating() {
    return (
        <div className="flex items-center gap-6 text-sm text-white/64">
            <span className="flex items-center gap-1"><span className="text-xl font-semibold text-white">4.7</span><Star size={16} className="fill-[#F5C451] text-[#F5C451]" /> Rating</span>
            <span><span className="text-xl font-semibold text-white">118k</span> Reviews</span>
        </div>
    )
}

function Row({ title, text, cta, href, image, flip }: { title: string; text: string; cta: string; href: string; image: string; flip?: boolean }) {
    return (
        <div className={'flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ' + (flip ? 'lg:flex-row-reverse' : '')}>
            <div className="flex w-full max-w-[460px] flex-col items-start gap-5">
                <h3 className="font-eudoxus text-[32px] leading-[1.1] font-bold md:text-[44px]"><Lines text={title} /></h3>
                <Lead><Lines text={text} /></Lead>
                <a href={href} className="inline-flex items-center gap-2 text-base font-medium text-[#B19DFF] no-underline hover:text-white">{cta} <ArrowRight size={18} /></a>
            </div>
            <img src={image} alt={title} className="w-full max-w-[560px]! rounded-3xl" />
        </div>
    )
}

export function PayPage() {
    const features = [
        { icon: <ShieldCheck />, t: 'Fully self-custodial', d: 'Your money is truly yours. Your funds stay in your custody until you’re ready to send or spend.' },
        { icon: <ScanFace />, t: 'Easy setup with passkey', d: 'Onboard in less than 2 minutes with your passkey and login securely with Face ID.' },
        { icon: <LifeBuoy />, t: '24/7 human support', d: 'Exodus provides an online help desk and 24/7 customer support to get your questions answered, fast.' },
        { icon: <ArrowDownToLine />, t: 'Fast and free deposits', d: 'Adding to your balance is fast and free for a limited time, whether by credit card, bank transfer or stablecoin transfers.' },
        { icon: <Heart />, t: 'Send money freely', d: 'No limits. Send quick payments with just a phone number.' },
        { icon: <Bitcoin />, t: 'Use crypto in your everyday life', d: 'Access the world of Bitcoin and crypto within the app.' },
    ]
    return (
        <>
            {/* hero */}
            <section className="relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-48">
                <img src={IMG('hero-bg-gradient.1d6e5f59.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90 [mask-image:linear-gradient(180deg,#000_60%,transparent)]" />
                <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 pb-24 text-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/40 px-4 py-2 text-sm"><ExodusMark size={16} /> Built on self-custody</div>
                    <h1 className="font-eudoxus text-[48px] leading-[1.05] font-bold tracking-[-0.02em] md:text-[80px]">Your money<br />is yours. Truly.</h1>
                    <div className="font-eudoxus text-2xl font-bold">Exodus <span className="text-[#8EF06A]">Pay</span></div>
                    <Rating />
                    <Stores />
                    <p className="max-w-[560px] text-lg text-white/64">Send, spend, and earn. Move money worldwide and pay with your free debit card, while staying in control.</p>
                    <Btn href="#getting-started">Get started</Btn>
                    <Legal />
                </div>
            </section>

            {/* built for the way you move */}
            <section className="container-xl mx-auto flex max-w-screen-xl flex-col gap-24 px-4 py-20 md:px-9">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Tag icon="hex" center>Money made simple</Tag>
                    <H2><Lines text={'Built for the way\nyou move'} /></H2>
                </div>
                <Row title={'Send money as\nquick as a DM'} text={'Pay instantly with just a phone number. No fees.\nNo limits or borders. Just payments that work.'} cta="Get started" href="#getting-started" image={IMG('pay-showcase-send.jpg')} />
                <Row flip title={'Spend anywhere debit\nis accepted'} text={'Use your free Exodus Card to pay in-store or online. Add it to your mobile wallet and simply tap away.'} cta="Get your free virtual card" href="#getting-started" image={IMG('pay-showcase-spend.jpg')} />
                <Row title={'Earn back\nin real time'} text={'Get cashback on spending and rewards based on your activity. Watch your rewards grow every second. Invite your friends to earn more.'} cta="Learn more" href="https://www.exodus.com/support/en/articles/12626651-getting-started-with-exodus-pay" image={IMG('pay-showcase-earn.jpg')} />
                <div className="flex flex-col items-center gap-3"><Btn href="#getting-started">Get Exodus</Btn><Legal /></div>
            </section>

            {/* rewards grow */}
            <section className="relative overflow-hidden py-28 text-center">
                <img src={IMG('grow-bg-gradient-left.c45a23ee.jpg')} alt="" className="pointer-events-none absolute left-0 top-0 h-full w-1/2 object-cover opacity-70" />
                <img src={IMG('grow-bg-gradient-right.3ed0c55a.jpg')} alt="" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-70" />
                <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4">
                    <Tag icon="stack" center>Real-time rewards</Tag>
                    <H2><Lines text={'Balance that grows\nby the second'} /></H2>
                    <Lead className="max-w-[460px]"><Lines text={'Earn rewards in real time. Watch rewards accumulate every second and redeem to spend.'} /></Lead>
                    <div className="mt-4 flex items-center gap-4 rounded-3xl border border-white/12 bg-black/50 px-8 py-6 backdrop-blur">
                        <img src={IMG('icon-gem.d9207f45.png')} alt="" className="size-14" />
                        <span className="font-eudoxus text-5xl font-bold text-[#8EF06A] md:text-6xl">1,284.<span className="text-white/64">0731</span></span>
                    </div>
                </div>
            </section>

            {/* card */}
            <section className="container-xl relative mx-auto max-w-screen-xl overflow-hidden px-4 py-20 md:px-9">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
                    <div className="flex w-full max-w-[460px] flex-col items-start gap-5">
                        <Tag icon="hex">Exodus Card</Tag>
                        <H2><Lines text={'Your money.\nReady to move.'} /></H2>
                        <Lead><Lines text={'Use your Exodus Card anywhere debit is accepted. Tap to pay in-store or online, all managed in one app.'} /></Lead>
                        <Btn href="#getting-started">Get your card</Btn>
                        <Legal />
                    </div>
                    <div className="relative flex w-full max-w-[560px] justify-center">
                        <img src={IMG('cat-ears-glow.845f9123.png')} alt="" className="pointer-events-none absolute bottom-0 left-1/2 w-[160%] max-w-none! -translate-x-1/2 opacity-80" />
                        <img src={IMG('phone-no-card.57b58a9c.png')} alt="Exodus Pay Card spending screen" className="relative z-1 w-[70%]" />
                    </div>
                </div>
            </section>

            {/* freedom */}
            <section className="container-xl mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 py-24 text-center">
                <Tag icon="hex" center>Freedom made yours</Tag>
                <H2><Lines text={'Spend. Send.\nLive your life.'} /></H2>
                <Lead className="max-w-[520px]">Your money doesn’t need permission to move. Exodus Pay keeps your money truly yours while being a part of your everyday life.</Lead>
                <Btn href="#getting-started">Download Exodus</Btn>
                <Legal />
            </section>

            {/* getting started */}
            <section id="getting-started" className="container-xl mx-auto max-w-screen-xl scroll-mt-28 px-4 py-20 md:px-9">
                <div className="mb-10 flex flex-col items-center gap-4 text-center">
                    <Tag icon="hex" center>Getting started</Tag>
                    <H2>New to Exodus?</H2>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <Card className="flex flex-col items-center gap-6 text-center">
                        <img src={IMG('qr-code.ea21e1d3.png')} alt="QR code" className="size-40 rounded-xl bg-white p-2" />
                        <p className="text-lg">Scan to download the Exodus app</p>
                        <Rating />
                        <Stores />
                    </Card>
                    <Card className="flex flex-col items-center gap-6 md:flex-row">
                        <img src={IMG('pay-phone-w-card.png')} alt="Phone with Exodus Pay card" className="w-[200px]" />
                        <div className="flex flex-col gap-4">
                            <h4 className="font-eudoxus text-2xl font-bold">Already have Exodus?<br />Follow these steps:</h4>
                            <ol className="flex flex-col gap-4 text-white/64">
                                <li className="flex gap-3"><b className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8161FF] text-white">1</b><span><b className="text-white">Open Exodus</b><br />Open the app and swipe down from the home screen to access your profile.</span></li>
                                <li className="flex gap-3"><b className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8161FF] text-white">2</b><span><b className="text-white">Tap Pay</b><br />Select "Pay" to start.</span></li>
                                <li className="flex gap-3"><b className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8161FF] text-white">3</b><span><b className="text-white">Follow the setup steps</b><br />Complete all the onboarding steps for a reward. <a className="underline" href="https://www.exodus.com/support/en/articles/12626651-getting-started-with-exodus-pay">Learn more</a>.</span></li>
                            </ol>
                        </div>
                    </Card>
                </div>
            </section>

            {/* features */}
            <section className="container-xl mx-auto max-w-screen-xl px-4 py-20 md:px-9">
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <H2>More Exodus Pay features</H2>
                    <Lead>From setup to first spend, it’s money made simple.</Lead>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <Card key={f.t} className="flex flex-col gap-4">
                            <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#8161FF]/20 text-[#B19DFF]">{f.icon}</span>
                            <h4 className="font-eudoxus text-xl font-bold">{f.t}</h4>
                            <p className="text-white/64">{f.d}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <Faq items={[
                { q: 'What is Exodus Pay?', a: <p>Exodus Pay is for everyday payments. Send money, spend with a card, and earn real-time rewards, all in one place. Exodus Pay is designed to grow with your financial life, from simple payments to daily spending. Unlike traditional digital payment apps, Exodus Pay is self-custodial, which means you are in full control of your money. <a className="underline" href="https://www.exodus.com/support/en/articles/12626651-getting-started-with-exodus-pay">Learn more</a>.</p> },
                { q: 'Where is Exodus Pay available?', a: 'Exodus Pay is available in the United States, and rolling out worldwide.' },
                { q: 'How is Exodus Pay different from Exodus wallet?', a: 'Exodus Pay is the evolution of the Exodus wallet. While the Exodus wallet helps you securely manage your crypto, with Exodus Pay you can easily make payments and spend your money with a debit card powered by crypto.' },
                { q: 'How do I sign up for Exodus Pay?', a: <><p>You can sign up directly inside the Exodus app. If you haven’t already, download Exodus first. Next:</p><ol className="mt-3 list-decimal pl-5"><li>Open the Exodus app</li><li>Swipe down to access your profile screen</li><li>Tap "Pay"</li><li>Follow the setup steps</li></ol><p className="mt-3">Getting started takes just a few minutes.</p></> },
                { q: 'Does Exodus Pay offer cashback rewards?', a: 'Yes. Exodus Pay offers real-time cashback rewards that accumulate by the second. It’s a simple way to earn rewards automatically while you use the app.' },
                { q: 'Do I have to KYC to use the app?', a: 'No. While certain functions may be possible without KYC, it is recommended that you verify your account to unlock the full Exodus Pay experience and the Exodus Card.' },
                { q: 'How does the Exodus Card work?', a: 'The Exodus Card works like a regular debit card, using funds from your Exodus Pay balance.' },
                { q: 'How do I add funds to Exodus Pay?', a: <><p>You can add funds to your Exodus Pay balance in several ways:</p><ul className="mt-3 list-disc pl-5"><li>Debit card</li><li>Apple Pay (iOS only)</li><li>Request via QR code</li><li>USDC and USDT</li></ul><p className="mt-3">Methods vary by location and eligibility.</p></> },
                { q: 'What makes Exodus Pay different from other payment apps?', a: <><p>Exodus Pay offers the simplicity you expect from payment apps:</p><ul className="mt-3 list-disc pl-5"><li>Send cash instantly using a phone number</li><li>Spend anywhere debit is accepted</li><li>Earn cashback rewards in real time</li><li>Stay in control of your money</li></ul></> },
                { q: 'What is a self-custodial payment app?', a: 'A self-custodial payment app lets you control your funds directly. Most payment apps are custodial, meaning someone else manages your balance and transactions. Exodus is self-custodial, combining everyday convenience with true ownership.' },
                { q: 'How do digital payment apps work?', a: 'Digital payment apps let you send, receive, and spend money through your phone. Exodus Pay allows free transfers, debit card spending, and real-time rewards while keeping you in control of your funds.' },
            ]} />

            <section className="container-xl relative mx-auto max-w-screen-xl overflow-hidden px-4 py-24 text-center">
                <img src={IMG('cat-ears-glow.845f9123.png')} alt="" className="pointer-events-none absolute bottom-0 left-1/2 w-[1400px] max-w-none! -translate-x-1/2 opacity-60" />
                <div className="relative z-1 flex flex-col items-center gap-6">
                    <H2><Lines text={'Start moving your\nmoney, your way'} /></H2>
                    <Lead>Download Exodus and get started with Pay in under 2 minutes.</Lead>
                    <Btn href="#getting-started">Download the app</Btn>
                    <Legal />
                    <Stores />
                    <img src={IMG('banner-phone.99021dff.png')} alt="Phone showing Exodus Pay app" className="relative z-1 mt-6 w-full max-w-[520px]!" />
                </div>
            </section>
        </>
    )
}

/* ------------------------------ DOWNLOAD ------------------------------ */
export function DownloadPage() {
    return (
        <>
            <section className="relative -mt-20 pt-32 md:-mt-24 md:pt-44">
                <img src={IMG('hero-background.91b6bdbb.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 [mask-image:linear-gradient(180deg,#000_70%,transparent)]" />
                <div className="container-xl relative z-1 mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-4 pb-20 md:px-9 lg:grid-cols-[1.4fr_1fr]">
                    {/* Desktop */}
                    <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur md:p-10">
                        <img src={IMG('hero-desktop.971a2007.png')} alt="Desktop Exodus" className="relative z-1 w-full max-w-[520px]!" />
                        <h2 className="relative z-1 font-eudoxus text-[48px] leading-tight font-bold">Desktop</h2>
                        <DesktopDownload />
                        <p className="relative z-1 max-w-[420px] text-white/64">Seamless, secure, self-custodial. Swap, buy, and manage a diverse portfolio in one place.</p>
                    </div>
                    {/* Mobile */}
                    <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur md:p-10">
                        <img src={IMG('hero-mobile.92ed57f4.png')} alt="Exodus mobile app showing portfolio balance with Exodus Pay card" className="w-full max-w-[280px]!" />
                        <h2 className="font-eudoxus text-3xl font-bold">Mobile</h2>
                        <Stores />
                        <p className="max-w-[320px] text-white/64">The only money app you need. Send payments. Manage your crypto. Stay in control.</p>
                    </div>
                </div>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-2 md:px-9">
                <a href="/trezor-wallet" className="no-underline"><Card className="flex h-full flex-col gap-4 transition hover:border-white/24">
                    <h3 className="font-eudoxus text-2xl font-bold">Trezor x Exodus</h3>
                    <p className="max-w-[320px] text-white/64">Boost wallet security when you pair Exodus Desktop or Mobile with a Trezor hardware wallet.</p>
                    <span className="font-medium text-[#B19DFF]">Learn More</span>
                    <img src={IMG('trezor.5bf8acf6.png')} alt="Trezor device preview with Exodus logo" className="mt-2 w-full max-w-[360px]! self-end" />
                </Card></a>
                <a href="/ledger-wallet" className="no-underline"><Card className="flex h-full flex-col gap-4 transition hover:border-white/24">
                    <h3 className="font-eudoxus text-2xl font-bold">Ledger x Exodus</h3>
                    <p className="max-w-[320px] text-white/64">Enhance asset protection with Exodus Mobile and a Ledger hardware wallet.</p>
                    <span className="font-medium text-[#B19DFF]">Learn More</span>
                    <img src={IMG('ledger.786a0d39.png')} alt="Ledger device showing home page screen" className="mt-2 w-full max-w-[360px]! self-end" />
                </Card></a>
            </section>

            <AssetsBlock text="Buy and sell, send and receive, swap and stake your favorite assets across Bitcoin, Ethereum, Solana, and more." />

            <section className="container-xl mx-auto max-w-screen-xl px-4 py-16 md:px-9">
                <SectionHead title="How to get started" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                        ['1', 'Download the app', 'Quick installation on your device brings crypto access right to your fingertips.'],
                        ['2', 'Create a wallet', 'Set up your new personal wallet in seconds, protected by advanced encryption. Your financial gateway is just moments away.'],
                        ['3', 'Control your assets', 'Manage millions of assets, swap between thousands of your favorite tokens across multiple devices.'],
                    ].map(([n, t, d]) => (
                        <Card key={n} className="flex flex-col gap-3">
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#8161FF] font-bold">{n}</span>
                            <h3 className="font-eudoxus text-2xl font-bold">{t}</h3>
                            <p className="text-white/64">{d}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden py-24 md:py-32">
                <img src={IMG('background-glow.18906d57.jpg')} alt="" className="pointer-events-none absolute left-1/2 top-0 w-[2000px] max-w-none! -translate-x-1/2 opacity-70" />
                <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 text-center">
                    <Tag icon="hex" center>Download Exodus Wallet for your device</Tag>
                    <H2><Lines text={'A faster, more focused\nexperience awaits.'} /></H2>
                    <Lead className="max-w-[520px]">Download EXODUS for Windows or macOS, including Apple Silicon and Intel Macs.</Lead>
                </div>
            </section>
        </>
    )
}



