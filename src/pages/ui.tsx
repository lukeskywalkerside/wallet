import './pages.css'
import React, { useState } from 'react'
import { ChevronDown, Plus, Minus, Play, Search, ArrowRight, ShieldCheck, Eye, Star, Layers, Zap, ArrowDownToLine, ArrowLeftRight, Lock, Info, Hexagon } from 'lucide-react'

export const IMG = (name: string) => `/images/site/${name}`

export const gradientBg =
    'bg-[linear-gradient(169deg,#5C6CF6,#A371F4_53%),linear-gradient(0deg,#fff,#A371F4_67%,#DA9EFF)] bg-[length:160%_160%]'

type BtnProps = {
    href?: string
    children: React.ReactNode
    variant?: 'gradient' | 'light' | 'outline'
    icon?: React.ReactNode
    className?: string
    external?: boolean
}

export function Btn({ href = '/download', children, variant = 'gradient', icon, className = '', external }: BtnProps) {
    const base =
        'relative inline-flex min-h-12 md:min-h-14 items-center justify-center gap-x-3 px-8 py-2 rounded-full no-underline font-medium text-base md:text-lg tracking-[-0.005em] transition-all duration-300 hover:scale-[1.02] active:scale-[1.01] '
    const v =
        variant === 'gradient'
            ? `${gradientBg} text-white hover:bg-bottom`
            : variant === 'light'
            ? 'bg-white text-black hover:shadow-[0_8px_32px_rgba(255,255,255,0.24)]'
            : 'border border-white/24 text-white hover:bg-white/8'
    return (
        <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={base + v + ' ' + className}
        >
            {icon}
            <span>{children}</span>
        </a>
    )
}

export function ExodusMark({ size = 20 }: { size?: number }) {
    return <img src={IMG('Exodus_symbol.svg')} width={size} height={size} alt="" style={{ width: size, height: size }} />
}

const tagIcons: Record<string, React.ReactNode> = {
    lock: <ShieldCheck size={16} />,
    eye: <Eye size={16} />,
    star: <Star size={16} />,
    stack: <Layers size={16} />,
    bolt: <Zap size={16} />,
    buy: <ArrowDownToLine size={16} />,
    swap: <ArrowLeftRight size={16} />,
    secure: <Lock size={16} />,
    hex: <Hexagon size={16} />,
}

export function Tag({ icon = 'hex', children, center }: { icon?: string; children: React.ReactNode; center?: boolean }) {
    return (
        <div className={'flex items-center gap-2 text-[#B19DFF] ' + (center ? 'justify-center' : '')}>
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#8161FF]/20 text-[#B19DFF]">
                {tagIcons[icon] ?? tagIcons.hex}
            </span>
            <span className="text-base font-medium">{children}</span>
        </div>
    )
}

export function H1({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <h1 className={'font-eudoxus text-[44px] leading-[1.05] font-bold tracking-[-0.02em] md:text-[72px] ' + className}>
            {children}
        </h1>
    )
}

export function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <h2 className={'font-eudoxus text-[32px] leading-[1.1] font-bold tracking-[-0.02em] md:text-[48px] ' + className}>
            {children}
        </h2>
    )
}

export function Lines({ text }: { text: string }) {
    const parts = text.split('\n')
    return (
        <>
            {parts.map((p, i) => (
                <React.Fragment key={i}>
                    {p}
                    {i < parts.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    )
}

export function Lead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <p className={'text-base leading-[1.6] text-white/64 md:text-xl ' + className}>{children}</p>
}

/** Page hero with background art that fades into black */
export function Hero({
    bg,
    tag,
    tagIcon,
    title,
    subtitle,
    children,
    preview,
    previewClass = 'max-w-[880px]',
    badges,
    minH = 'md:min-h-[820px]',
}: {
    bg: string
    tag?: React.ReactNode
    tagIcon?: string
    title: React.ReactNode
    subtitle?: React.ReactNode
    children?: React.ReactNode
    preview?: React.ReactNode
    previewClass?: string
    badges?: React.ReactNode
    minH?: string
}) {
    return (
        <section className={'relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-48 ' + minH}>
            <img
                src={bg}
                alt=""
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-full object-cover object-top opacity-90 [mask-image:linear-gradient(180deg,#000_55%,transparent_100%)]"
            />
            <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-y-8 px-4 text-center">
                {tag && (
                    <div className="inline-flex items-center rounded-full border border-white/12 bg-black/40 px-4 py-2 backdrop-blur">
                        <Tag icon={tagIcon}>{tag}</Tag>
                    </div>
                )}
                <H1>{title}</H1>
                {subtitle && <Lead className="max-w-[640px]">{subtitle}</Lead>}
                {children && <div className="flex flex-col items-center gap-y-4">{children}</div>}
                {badges}
                {preview && <div className={'relative mt-6 w-full ' + previewClass}>{preview}</div>}
            </div>
        </section>
    )
}

export function TrustBar({ left, right }: { left?: React.ReactNode; right?: React.ReactNode }) {
    return (
        <div className="mt-2 flex w-full max-w-[880px] flex-col items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/60 px-4 py-3 text-sm text-white/64 backdrop-blur md:flex-row">
            <div className="flex items-center gap-3">
                <span className="rounded bg-white/8 px-2 py-0.5 font-medium text-white">11+</span>
                <span>Years in crypto</span>
            </div>
            <div className="flex items-center gap-3">
                <a href="/security" className="text-white/64 no-underline hover:text-white">Advanced Security</a>
                {right}
            </div>
            {left}
        </div>
    )
}

export function Showcase({
    tag,
    tagIcon,
    title,
    text,
    cta,
    ctaHref = '/download',
    glow,
    images,
    flip,
}: {
    tag: string
    tagIcon?: string
    title: string
    text: string
    cta: string
    ctaHref?: string
    glow?: string
    images: string[]
    flip?: boolean
}) {
    return (
        <section className="container-xl relative z-3 mx-auto max-w-screen-xl px-4 py-16 md:px-9 md:py-28">
            <div className={'flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-x-12 ' + (flip ? 'lg:flex-row-reverse' : '')}>
                <div className="flex w-full max-w-[460px] flex-col items-start gap-y-6">
                    <Tag icon={tagIcon}>{tag}</Tag>
                    <H2><Lines text={title} /></H2>
                    <Lead>{text}</Lead>
                    <Btn href={ctaHref}>{cta}</Btn>
                </div>
                <div className="relative flex w-full max-w-[640px] items-center justify-center">
                    {glow && (
                        <img src={glow} alt="" className="pointer-events-none absolute left-1/2 top-1/2 -z-1 w-[150%] max-w-none! -translate-x-1/2 -translate-y-1/2 opacity-80" />
                    )}
                    <div className="relative z-1 flex w-full items-center justify-center gap-4">
                        {images.map((src, i) => (
                            <img key={i} src={src} alt={title} className="h-auto min-w-0 flex-1 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AssetsBlock({ text }: { text: string }) {
    return (
        <section className="container-xl relative mx-auto max-w-screen-xl px-4 py-16 md:py-24">
            <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/8 bg-[#0b0a14] px-6 py-16 text-center md:px-16">
                <img src={IMG('showcase-background.d404896e.png')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
                <H2 className="relative z-1"><Lines text={'1,000,000+ assets\nsupported'} /></H2>
                <Lead className="relative z-1 max-w-[640px]">{text}</Lead>
                <div className="relative z-1"><Btn href="/assets">Browse Assets</Btn></div>
            </div>
        </section>
    )
}

export function AllDevices() {
    return (
        <section className="relative overflow-hidden py-24 md:py-36">
            <img src={IMG('background-glow.18906d57.jpg')} alt="Curved peak background glow" className="pointer-events-none absolute left-1/2 top-0 w-[2000px] max-w-none! -translate-x-1/2 opacity-70" />
            <div className="container-xl relative z-1 mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 text-center">
                <H2><Lines text={'Get Exodus on all\nyour devices'} /></H2>
                <Lead>A faster, more focused experience awaits.</Lead>
                <Btn icon={<ExodusMark />}>Download Exodus Wallet</Btn>
                <p className="max-w-[560px] text-sm text-white/48">
                    Exodus works seamlessly across macOS (Apple Silicon and Intel), Windows (64-bit), Linux (.deb and .zip), iOS and Android.
                </p>
            </div>
        </section>
    )
}

export type FaqItem = { q: string; a: React.ReactNode }

export function Faq({ items, tagLabel = 'FAQs', title = 'Common questions', action }: { items: FaqItem[]; tagLabel?: string; title?: string; action?: React.ReactNode }) {
    const [open, setOpen] = useState<number | null>(null)
    return (
        <section className="container-xl relative z-3 mx-auto max-w-screen-xl px-4 py-16 md:py-24">
            <div className="mb-10 flex flex-col items-center gap-4 text-center">
                <Tag icon="star" center>{tagLabel}</Tag>
                <H2>{title}</H2>
                {action}
            </div>
            <div className="mx-auto flex max-w-[800px] flex-col gap-3">
                {items.map((item, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
                        <button
                            type="button"
                            onClick={() => setOpen(open === i ? null : i)}
                            className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium md:text-lg"
                            aria-expanded={open === i}
                        >
                            <span>{item.q}</span>
                            <ChevronDown size={20} className={'shrink-0 transition-transform duration-300 ' + (open === i ? 'rotate-180' : '')} />
                        </button>
                        <div className={'grid transition-all duration-300 ' + (open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                            <div className="overflow-hidden">
                                <div className="px-5 pb-5 text-sm leading-[1.7] text-white/64 md:text-base">{item.a}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function Banner({ bg, title, text, href, children, tag }: { bg: string; title: string; text: string; href: string; children?: React.ReactNode; tag?: React.ReactNode }) {
    return (
        <section className="container-xl relative z-3 mx-auto max-w-screen-xl px-4 py-16 md:py-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/8">
                <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative z-1 flex flex-col items-start gap-6 p-8 md:p-16">
                    {tag}
                    <H2>{title}</H2>
                    <Lead className="max-w-[420px]"><Lines text={text} /></Lead>
                    <Btn href={href}>Learn More</Btn>
                    {children}
                </div>
            </div>
        </section>
    )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={'relative overflow-hidden rounded-3xl border border-white/8 bg-[#0d0c17] p-6 md:p-8 ' + className}>{children}</div>
    )
}

export function Bento({ items }: { items: { title: string; text: string; cta?: string; href: string; glow: string; image?: string }[] }) {
    return (
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-9">
            {items.map((it, i) => (
                <Card key={i} className="flex min-h-[420px] flex-col justify-between">
                    <img src={it.glow} alt="" className="pointer-events-none absolute bottom-0 right-0 w-full max-h-[80%] object-contain opacity-80" />
                    <div className="relative z-1 flex flex-col gap-4">
                        <h3 className="font-eudoxus text-[28px] leading-[1.15] font-bold md:text-[36px]"><Lines text={it.title} /></h3>
                        <p className="max-w-[360px] text-base leading-[1.6] text-white/64"><Lines text={it.text} /></p>
                    </div>
                    {it.image && <img src={it.image} alt="" className="relative z-1 mx-auto mt-6 w-[240px]" />}
                    {it.cta && <div className="relative z-1 mt-6"><Btn href={it.href} variant="outline" className="!min-h-11 !px-6 !text-sm">{it.cta}</Btn></div>}
                </Card>
            ))}
        </div>
    )
}

export function Steps({ steps }: { steps: { n: number; title: string; sub: string; text: string; cta?: string; href?: string }[] }) {
    return (
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 md:grid-cols-3 md:px-9">
            {steps.map((s) => (
                <Card key={s.n} className="flex flex-col gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.08em] text-[#B19DFF]">Step {s.n}</span>
                    <h3 className="font-eudoxus text-[28px] leading-[1.15] font-bold">
                        {s.title}
                        <br />
                        {s.sub}
                    </h3>
                    <p className="text-base leading-[1.6] text-white/64">{s.text}</p>
                    {s.cta && s.href && <div className="mt-auto pt-4"><Btn href={s.href} variant="outline" className="!min-h-11 !px-6 !text-sm">{s.cta}</Btn></div>}
                </Card>
            ))}
        </div>
    )
}

export function SectionHead({ tag, tagIcon, title, sub }: { tag?: string; tagIcon?: string; title: string; sub?: string }) {
    return (
        <div className="container-xl mx-auto mb-10 flex max-w-screen-xl flex-col items-center gap-4 px-4 text-center md:mb-14">
            {tag && <Tag icon={tagIcon} center>{tag}</Tag>}
            <H2><Lines text={title} /></H2>
            {sub && <Lead className="max-w-[560px]"><Lines text={sub} /></Lead>}
        </div>
    )
}

export function WatchVideo({ href }: { href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-white no-underline hover:text-white/80">
            <Play size={18} /> Watch video
        </a>
    )
}

export function PageTitleBlock({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: React.ReactNode }) {
    return (
        <section className="container-xl relative z-1 mx-auto flex max-w-[900px] flex-col items-center gap-5 px-4 pb-10 pt-16 text-center md:pt-28">
            {eyebrow && <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">{eyebrow}</span>}
            <H1 className="!text-[40px] md:!text-[64px]">{title}</H1>
            {subtitle && <Lead>{subtitle}</Lead>}
        </section>
    )
}

export { ChevronDown, Plus, Minus, Search, ArrowRight, Info }


