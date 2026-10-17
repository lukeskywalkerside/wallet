import React from 'react'
import { Download, FileText, Mail } from 'lucide-react'
import { Btn, H1, H2, Lead, Lines, Tag, Card, IMG, PageTitleBlock } from './ui.tsx'

function PageHeroBg({ src, children }: { src: string; children: React.ReactNode }) {
    return (
        <section className="relative -mt-20 overflow-hidden pt-36 md:-mt-24 md:pt-52">
            <img src={src} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 [mask-image:linear-gradient(180deg,#000_55%,transparent)]" />
            <div className="container-xl relative z-1 mx-auto flex max-w-[960px] flex-col items-center gap-6 px-4 pb-24 text-center">{children}</div>
        </section>
    )
}

/* ------------------------------ ABOUT ------------------------------ */
export function AboutPage() {
    return (
        <>
            <PageHeroBg src={IMG('about-header.jpg')}>
                <H1 className="!text-[40px] md:!text-[64px]">Exodus empowers people to control their wealth.</H1>
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">Exodus Gives You The Power To</span>
                <Lead>Secure, Manage, and Swap cryptocurrency on desktop, mobile and hardware wallets.</Lead>
            </PageHeroBg>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-6 px-4 py-16 text-center">
                <Lead>At Exodus we pour our hearts into every detail, from pixel-perfect icons to subtle sounds, creating a cryptocurrency experience that works for everyone.</Lead>
                <Lead>Our goal is to remove the geek requirement and make it fun and easy to learn and use cryptocurrency. No technical talk. No confusing steps - we think it shows.</Lead>
                <Btn href="https://www.exodus.com/brand/dl/Exodus_Media_Kit.pdf" external variant="outline" icon={<Download size={18} />}>Download Media Kit</Btn>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 pb-10 md:grid-cols-3 md:px-9">
                {['Safe', 'Reliable', 'Trusted'].map((w, i) => (
                    <Card key={w} className="flex items-baseline gap-4">
                        <span className="text-sm text-[#B19DFF]">0{i + 1}</span>
                        <span className="font-eudoxus text-4xl font-bold">{w}</span>
                    </Card>
                ))}
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-2 gap-4 px-4 py-10 md:grid-cols-4 md:px-9">
                {[
                    ['Founded in', '2015', 'By JP Richardson and Daniel Castagnoli'],
                    ['Product Updates', '200+', 'New releases across desktop, mobile and hardware'],
                    ['New Release Every', '2 Weeks', 'Released software every two weeks since 2015'],
                    ['Digital Assets', '100,000+', 'Supported cryptocurrencies inside Exodus products'],
                ].map(([l, v, d]) => (
                    <Card key={l} className="flex flex-col gap-2">
                        <span className="text-sm text-white/48">{l}</span>
                        <span className="font-eudoxus text-4xl font-bold text-[#B19DFF]">{v}</span>
                        <span className="text-sm text-white/64">{d}</span>
                    </Card>
                ))}
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col gap-5 px-4 py-20 text-center">
                <H2>Built for Trust</H2>
                <Lead>Exodus was founded in 2015 by JP Richardson and Daniel Castagnoli. JP brings the technical magic behind the scenes to Exodus. JP has published <a className="underline" href="https://www.npmjs.com/~jprichardson">over 200 open source libraries</a> and has written code in use by most Bitcoin and cryptocurrency software on the web today. On the creative side, from subtle sounds to smooth animations, Daniel oversees each detail of the Exodus creative process. Daniel is a master of emotional design and has designed experiences for Apple, BMW, Disney, Louis Vuitton and Nike.</Lead>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 pb-16 md:grid-cols-2 md:px-9">
                {[
                    { n: 'JP Richardson', img: 'JP-Richardson.jpg', d: 'Coding the technical magic behind the scenes, JP has published over 200 open source libraries and has written code in use by most Bitcoin and cryptocurrency software on the web.', links: [] },
                    { n: 'Daniel Castagnoli', img: 'Daniel-Castagnoli.jpg', d: 'From subtle sounds to smooth animations Daniel takes care of each detail. He is a master of emotional design and has designed experiences for Apple, BMW, Disney, Louis Vuitton and Nike.', links: [['GitHub', 'https://github.com/dcastagnoli']] },
                ].map((p) => (
                    <Card key={p.n} className="flex flex-col gap-5 sm:flex-row">
                        <img src={IMG(p.img)} alt={p.n} className="size-40 rounded-2xl object-cover" />
                        <div className="flex flex-col gap-3">
                            <h3 className="font-eudoxus text-2xl font-bold">{p.n}</h3>
                            <span className="text-sm text-[#B19DFF]">Co-Founder</span>
                            <p className="text-white/64">{p.d}</p>
                            <div className="flex gap-4 text-sm">{p.links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="underline text-white/80">{l}</a>)}</div>
                        </div>
                    </Card>
                ))}
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-4 px-4 py-16 text-center">
                <Tag icon="star" center>The Goal At Exodus</Tag>
                <H2 className="!text-[28px] md:!text-[40px]">Remove the geek requirement, and keep design a priority, to make cryptocurrency easy for everyone.</H2>
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-5 px-4 py-20 text-center">
                <Tag icon="hex" center>Careers</Tag>
                <H2>Working at Exodus</H2>
                <Lead>Is cryptocurrency your passion? Join Exodus and work from anywhere - all positions are 100% remote.</Lead>
                <Btn href="/careers">View Open Positions</Btn>
            </section>
        </>
    )
}

/* ------------------------------ CAREERS ------------------------------ */
export function CareersPage() {
    return (
        <>
            <PageHeroBg src={IMG('careers-header.jpg')}>
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">Careers</span>
                <H1 className="!text-[44px] md:!text-[72px]">Work with Exodus<br /><span className="text-[#B19DFF]">Remote Crypto Jobs</span></H1>
                <Lead>Help us empower everyday people to control their wealth.</Lead>
                <Btn href="#open-positions">See open positions</Btn>
            </PageHeroBg>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-4 py-20 md:px-9 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <H2>Why work at Exodus?</H2>
                    <Lead>Exodus empowers everyday people to escape the traditional financial system.</Lead>
                    <Lead>Ready to take your place building the future of digital assets? Are you passionate about the blockchain and the sweeping changes it is creating across the world? Do you store some of your wealth in digital assets? Do you believe that Bitcoin, Ethereum, and other cryptocurrencies are beginning to facilitate a great wealth transfer?</Lead>
                </div>
                <img src={IMG('why-work-img.png')} alt="Why work at Exodus?" className="w-full rounded-3xl" />
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 md:px-9 lg:grid-cols-4">
                {[
                    ['Open Culture', 'Exodus has open salaries - no company secrets. Trust and transparency carry on from the blockchain to our team.'],
                    ['100% Remote Positions', 'All our positions are 100% remote careers – work from anywhere in the world.'],
                    ['Hardware and Software', 'We offer our employees hardware and software of their choice, and equipment for their remote offices.'],
                    ['Salary paid in Bitcoin', 'All salaries are paid in Bitcoin (BTC). Experience the financial revolution from the front seats.'],
                ].map(([t, d]) => (
                    <Card key={t} className="flex flex-col gap-3">
                        <h3 className="font-eudoxus text-xl font-bold">{t}</h3>
                        <p className="text-white/64">{d}</p>
                    </Card>
                ))}
            </section>

            <section id="open-positions" className="container-xl mx-auto max-w-[900px] scroll-mt-28 px-4 py-16">
                <H2 className="mb-8 text-center">Open Positions</H2>
                <Card className="text-center text-white/64">Open positions are loaded from our applicant tracking system. Check back soon, or reach out below.</Card>
            </section>

            <section className="container-xl mx-auto flex max-w-[700px] flex-col items-center gap-5 px-4 py-20 text-center">
                <H2 className="!text-[28px] md:!text-[40px]">Can't find what you're looking for?</H2>
                <Lead>If you think you have special skills that we should definitely know about, please drop us a line.</Lead>
                <Btn href="mailto:jobs@exodus.com" icon={<Mail size={18} />}>Contact Us</Btn>
                <a href="#" className="text-sm text-white/48 underline">To the top</a>
            </section>
        </>
    )
}

/* ------------------------------ CONTACT ------------------------------ */
export function ContactPage() {
    return (
        <section className="relative -mt-20 min-h-[80vh] overflow-hidden pt-36 md:-mt-24 md:pt-52">
            <img src={IMG('bg_image.jpg')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
            <div className="container-xl relative z-1 mx-auto flex max-w-[760px] flex-col items-center gap-6 px-4 pb-24 text-center">
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">Get in touch with us</span>
                <H1 className="!text-[44px] md:!text-[72px]">Contact us</H1>
                <Lead>Exodus Staff will NEVER ask for sensitive information, including passwords, 12-word phrases or private keys.</Lead>
                <Lead>Presently, Exodus does not offer support via telephone. It is important to note that while numbers listed as "Official Exodus Support" are often posted and shared on the internet, these are scams attempting to gain access to your funds.</Lead>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <Btn href="mailto:support@exodus.com?subject=YOUR%20SUBJECT%20HERE%20(from%20website)" variant="outline">support@exodus.com</Btn>
                </div>
            </div>
        </section>
    )
}

/* ------------------------------ BRAND ------------------------------ */
const symbols = [
    ['Up and down arrows', 'The original, core product of Exodus empowered users to send, receive and swap digital assets. As the brand evolves, the arrows represent the continued movement of value, from the digital to the real world.'],
    ['Number 3', 'The number 3 means a lot to us. It\'s about unlocking Web3 for millions of users, mirroring the letter E for Exodus, and celebrating our third logo and evolution as a brand.'],
    ['Letter E', 'The letter E is the first letter in the Exodus brand name and represents our goal to lead an exodus away from traditional finance and toward a sovereign financial future.'],
    ['Shield', 'Exodus works hard to protect your digital assets. It\'s designed so that only you can access your funds. We aim to be a trusted friend in your journey of money and self-custody.'],
    ['Infinity symbol', 'The infinity symbol represents the idea that blockchain is forever. Global decentralization, immutable ledgers, and never-ending growth make the blockchain unstoppable.'],
    ['Scarab', 'The sweeping up and down movements reference the scarab, a symbol in ancient Egypt for new form and life. As Exodus evolves, we take on a new form as the financial app for everyday money movement.'],
    ['Pyramid', 'Ideas of transformation are completed with the pyramid, another ancient symbol of transition. Exodus started as a self-custody wallet and is now a gateway to digital assets being a part of everyday life.'],
    ['Blockchain', 'A blockchain link can also be observed, representing the immutable and censorship-resistant nature of the blockchain.'],
]

export function BrandPage() {
    const [i, setI] = React.useState(0)
    const files = [
        ['Exodus Logo dark', 'Exodus_logo_dark'],
        ['Exodus Logo white', 'Exodus_logo_white'],
        ['Exodus Symbol', 'Exodus_symbol'],
    ]
    return (
        <>
            <PageHeroBg src={IMG('brand-header.jpg')}>
                <img src={IMG('logo.svg')} alt="Exodus" className="h-20" />
                <H1 className="!text-[44px] md:!text-[72px]">The Exodus brand</H1>
                <Lead>Explore our brand, purpose, and value.</Lead>
            </PageHeroBg>

            <section className="container-xl mx-auto max-w-[900px] px-4 py-10">
                <h2 className="mb-6 font-eudoxus text-2xl font-bold">Download Logo Set</h2>
                <div className="flex flex-col gap-3">
                    {files.map(([label, base]) => (
                        <Card key={base} className="flex flex-col justify-between gap-4 !p-5 sm:flex-row sm:items-center">
                            <span className="flex items-center gap-3"><FileText size={22} className="text-[#B19DFF]" />{label}</span>
                            <span className="flex gap-3 text-sm">
                                {['png', 'svg', 'ai'].map((ext) => (
                                    <a key={ext} href={`https://www.exodus.com/brand/dl/images/${base}.${ext}`} className="inline-flex items-center gap-1 rounded-full border border-white/16 px-4 py-1.5 uppercase no-underline hover:bg-white/8"><Download size={14} />{ext}</a>
                                ))}
                            </span>
                        </Card>
                    ))}
                    <Card className="flex items-center gap-3 !p-5"><Download size={22} className="text-[#B19DFF]" />Download complete set – ZIP file</Card>
                </div>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-4 py-20 md:px-9 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <Lead>As our brand evolves, our values remain. Take a closer look at the symbolism in our logo.</Lead>
                    <Card className="flex flex-col gap-3">
                        <span className="text-sm text-[#B19DFF]">{i + 1}/8</span>
                        <h3 className="font-eudoxus text-2xl font-bold">{symbols[i][0]}</h3>
                        <p className="min-h-[96px] text-white/64">{symbols[i][1]}</p>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => setI((i + 7) % 8)} className="cursor-pointer rounded-full border border-white/16 px-4 py-2 text-sm hover:bg-white/8">Prev</button>
                            <button type="button" onClick={() => setI((i + 1) % 8)} className="cursor-pointer rounded-full border border-white/16 px-4 py-2 text-sm hover:bg-white/8">Next</button>
                        </div>
                    </Card>
                </div>
                <img src={IMG('logo-with-halo.png')} alt="Exodus logo" className="w-full max-w-[520px]! justify-self-center" />
            </section>

            <section className="relative overflow-hidden py-24 text-center">
                <img src={IMG('growth-section-desktop-background.png')} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
                <div className="container-xl relative z-1 mx-auto flex max-w-[800px] flex-col items-center gap-6 px-4">
                    <H2>Growth at every step</H2>
                    <Lead>Exodus is committed to continual growth evident in the past decade of innovation. From our first self-custodial desktop app to integrating payment rails, we put our customers at the centre of everything we do, empowering them to navigate their financial lives with confidence.</Lead>
                    <div className="mt-4 flex items-center gap-6">
                        <div className="flex flex-col items-center gap-2"><img src={IMG('JP-Richardson.png')} alt="JP Richardson" className="size-28 rounded-full object-cover" /><span className="text-sm">JP Richardson<br /><span className="text-white/48">Co-Founder &amp; CEO</span></span></div>
                        <span className="text-2xl text-white/48">&amp;</span>
                        <div className="flex flex-col items-center gap-2"><img src={IMG('Daniel-Castagnoli.png')} alt="Daniel Castagnoli" className="size-28 rounded-full object-cover" /><span className="text-sm">Daniel Castagnoli<br /><span className="text-white/48">Co-Founder &amp; President</span></span></div>
                    </div>
                </div>
            </section>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-4 py-20 md:px-9 lg:grid-cols-2">
                <img src={IMG('logo-with-measurements.png')} alt="Logo measurements" className="w-full max-w-[520px]!" />
                <div className="flex flex-col gap-5">
                    <Lead>Exodus is dedicated to designing a personalized, emotional experience. We ensure every detail helps you secure, manage, and swap your digital assets.</Lead>
                    <Lead>The evolved Exodus logomark comprises 4 arrows to represent send, receive, and swap—a nod to our original, core product that started it all in 2015.</Lead>
                    <div><Btn href="https://www.exodus.com/brand/dl/Exodus_Media_Kit.pdf" external variant="outline" icon={<Download size={18} />}>Download Media Kit</Btn></div>
                </div>
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-5 px-4 py-20 text-center">
                <img src={IMG('logo-colors.png')} alt="Exodus logo colors" className="w-full max-w-[520px]!" />
                <H2 className="!text-[28px] md:!text-[40px]">Download the Exodus logo media set.</H2>
                <Lead>For use on mobile, print, and web. PNG, SVG, and AI files included.</Lead>
                <Btn href="/download">Download Exodus Wallet</Btn>
            </section>
        </>
    )
}

/* ------------------------------ INVESTORS ------------------------------ */
export function InvestorsPage() {
    const overview = 'Founded in 2015, Exodus Movement, Inc. (NYSE American: EXOD) is a self-custodial crypto and payments platform that lets customers spend, swap, and manage digital assets across desktop, mobile, and browser without giving up control of their funds. Exodus also powers card issuance, stablecoin payments, and digital asset infrastructure for enterprise partners serving millions of customers worldwide. Your money, your control.'
    const IR = 'https://www.exodus.com/investors'
    return (
        <>
            <PageTitleBlock eyebrow="NYSE American: EXOD" title="Investor Relations" />
            <div className="container-xl mx-auto flex max-w-[1000px] flex-col gap-10 px-4 pb-24">
                <Card>
                    <h2 className="mb-3 font-eudoxus text-2xl font-bold">Company Overview</h2>
                    <p className="text-white/64">{overview}</p>
                </Card>

                <Card>
                    <div className="mb-5 flex items-center justify-between"><h2 className="font-eudoxus text-2xl font-bold">Latest News</h2><a className="text-sm underline" href={IR + '/news-events/press-releases'}>View All News</a></div>
                    <ul className="flex flex-col divide-y divide-white/8">
                        {[
                            ['October 9, 2026 8:30 AM EDT', 'Exodus Movement, Inc. September 2026 -- Monthly Metrics Read Press Release', '/news-events/press-releases/detail/128/exodus-movement-inc-september-2026----monthly-metrics'],
                            ['Oct 1, 2026 6:30 pm EDT', "Exodus Brings Stablecoins to Everyday Commerce, Starting With DIRECTV's DGO", '/news-events/press-releases/detail/127/exodus-brings-stablecoins-to-everyday-commerce-starting-with-directvs-dgo'],
                            ['Sep 11, 2026 8:00 am EDT', 'Exodus Movement, Inc. August 2026 -- Monthly Metrics', '/news-events/press-releases/detail/126/exodus-movement-inc-august-2026----monthly-metrics'],
                        ].map(([d, t, h]) => (
                            <li key={t} className="flex flex-col gap-1 py-4"><span className="text-xs text-white/48">{d}</span><a className="text-lg no-underline hover:text-[#B19DFF]" href={IR + h}>{t}</a></li>
                        ))}
                    </ul>
                </Card>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Card className="flex flex-col gap-3">
                        <h2 className="font-eudoxus text-2xl font-bold">Latest Presentation</h2>
                        <span className="text-xs text-white/48">May 12, 2026</span>
                        <p>CFO Supplemental Slides</p>
                        <div className="flex gap-3 pt-2"><Btn href="https://d1io3yog0oux5.cloudfront.net/_b8d6ae1dabcf5270d733227746977ba9/exodus/db/923/9260/pdf/CFO+Supplemental+slides_vfinal.pdf" variant="outline" external className="!min-h-10 !px-5 !text-sm">View Presentation</Btn><a className="self-center text-sm underline" href={IR + '/news-events/presentations'}>View All</a></div>
                    </Card>
                    <Card className="flex flex-col gap-3">
                        <h2 className="font-eudoxus text-2xl font-bold">Latest Annual Filing</h2>
                        <span className="text-xs text-white/48">For Fiscal Year Ending Dec 31, 2025</span>
                        <p>Annual Report Document Links</p>
                        <div className="pt-2"><Btn href={IR + '/sec-filings/all-sec-filings/content/0001821534-26-000009/exod-20251231.htm'} variant="outline" external className="!min-h-10 !px-5 !text-sm">View 10-K</Btn></div>
                    </Card>
                </div>

                <Card>
                    <h2 className="mb-1 font-eudoxus text-2xl font-bold">Latest Financial Results</h2>
                    <h3 className="mt-4 text-xl font-semibold">Q2 2026</h3>
                    <span className="text-xs text-white/48">Quarter Ended Jun 30, 2026</span>
                    <ul className="mt-4 flex flex-col gap-3 text-white/64">
                        <li>Earnings Release: <a className="underline" href={IR + '/news-events/press-releases/detail/124/exodus-reports-second-quarter-2026-results'}>HTML</a> | <a className="underline" href="https://d1io3yog0oux5.cloudfront.net/_b8d6ae1dabcf5270d733227746977ba9/exodus/news/2026-08-10_Exodus_Reports_Second_Quarter_2026_124.pdf">PDF</a></li>
                        <li>Earnings Webcast: <a className="underline" href="https://event.choruscall.com/mediaframe/webcast.html?webcastid=iOeJHaXI">Video</a></li>
                        <li>10-Q: <a className="underline" href={IR + '/sec-filings/all-sec-filings/content/0001628280-26-055453/exod-20260630.htm'}>HTML</a> | <a className="underline" href={IR + '/sec-filings/all-sec-filings/content/0001628280-26-055453/0001628280-26-055453.pdf'}>PDF</a> | <a className="underline" href={IR + '/sec-filings/all-sec-filings/content/0001628280-26-055453/0001628280-26-055453-xbrl.zip'}>XBRL Zip</a></li>
                    </ul>
                </Card>

                <Card className="flex flex-col items-start gap-3">
                    <h2 className="font-eudoxus text-2xl font-bold">Email Alerts</h2>
                    <p className="text-white/64">Sign up today and receive company updates straight to your inbox.</p>
                    <Btn href={IR + '/news-events/email-alerts'} className="!min-h-11 !px-6 !text-sm">Sign Up Today</Btn>
                </Card>

                <Card className="flex flex-col items-start gap-4">
                    <h2 className="font-eudoxus text-2xl font-bold">Company Overview</h2>
                    <p className="text-white/64">{overview}</p>
                    <div className="flex flex-wrap gap-3">
                        <Btn href={IR + '/company-information/executive-team'} variant="outline" className="!min-h-10 !px-5 !text-sm">View Executive Team</Btn>
                        <Btn href={IR + '/corporate-governance/board-of-directors'} variant="outline" className="!min-h-10 !px-5 !text-sm">View Board of Directors</Btn>
                    </div>
                </Card>
            </div>
        </>
    )
}

/* ------------------------------ SECURITY ------------------------------ */
export function SecurityPage() {
    const feats = [
        ['Security Features and Program', 'Exodus has a team of world-class security experts, including top 10 HackerOne researchers on staff. Dedicated teams focus on attacker simulation, cloud security, and application security. These teams drive secure architecture and development via our secure software development lifecycle (SSDLC), lead cloud security best practices, and work to adopt and improve leading security frameworks.'],
        ['Self-Custody, Always', 'Exodus doesn’t have access to your private keys; therefore we can’t gain access to your crypto. This is a fundamental philosophy throughout our development process and core to our company culture. Customer key autonomy is a fundamental right for a secure self-custodial wallet.'],
        ['Secure By Design', "Exodus develops all of our products using the latest secure design principles, and provides security training and guidance via our SSDLC, as well as via direct consultation and product design review. Our dedicated manual audit process and secure tooling and automation ensure customers' assets are safe."],
        ['Only Trusted Code', 'Exodus leverages open-source software, allowing us to collaborate with the community, accelerate innovation, and adopt new technologies. Before shipping Exodus products to customers, our team conducts manual audits of all open-source dependencies to find potential risks and vulnerabilities.'],
    ]
    return (
        <>
            <PageHeroBg src={IMG('security-header.png')}>
                <H1 className="!text-[40px] md:!text-[64px]">Security in design &amp; development.<br /><span className="text-[#B19DFF]">Self-custody, always.</span></H1>
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">Our security philosophy</span>
                <Lead>Customer key autonomy. Only trusted code. Secure by design.</Lead>
            </PageHeroBg>

            <section className="container-xl mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-2 md:px-9">
                {feats.map(([t, d], i) => (
                    <Card key={t} className="flex flex-col gap-4">
                        <img src={IMG(`security-feature-0${i}.svg`)} alt={t} className="size-16" />
                        <h3 className="font-eudoxus text-2xl font-bold">{t}</h3>
                        <p className="text-white/64">{d}</p>
                    </Card>
                ))}
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-5 px-4 py-20 text-center">
                <img src={IMG('Exodus_symbol.svg')} alt="Exodus Symbol" className="size-14" />
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#B19DFF]">How to keep your crypto safe</span>
            </section>

            <section className="container-xl mx-auto flex max-w-[800px] flex-col items-center gap-5 px-4 pb-24 text-center">
                <H2><Lines text={'Reporting Security Findings\nand Bug Bounty'} /></H2>
                <Lead>Exodus’ coordinated vulnerability disclosure program is operated via our bug bounty program with HackerOne. Find our program here: <a className="underline" href="https://hackerone.com/exodus">Exodus HackerOne Bounty</a>. Program details and bounty award ranges are detailed there. Please be sure to review our policies and scope before submitting your findings.</Lead>
            </section>
        </>
    )
}



