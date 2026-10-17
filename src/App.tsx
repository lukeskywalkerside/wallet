import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './components/Img.tsx'
import VideoSource from './components/VideoSource.tsx'
import CaptionTrack from './components/CaptionTrack.tsx'
import ImageLink from './components/ImageLink.tsx'
import ResponsiveBreak from './components/ResponsiveBreak.tsx'
import FinancialDisclaimer from './components/FinancialDisclaimer.tsx'
import CloseButton from './components/CloseButton.tsx'
import NewsletterIntro from './components/NewsletterIntro.tsx'
import ExodusPaySection from './components/ExodusPaySection.tsx'
import SupportedAssetsSection from './components/SupportedAssetsSection.tsx'
import ExploreExodus from './components/ExploreExodus.tsx'
import FaqSection from './components/FaqSection.tsx'
import SupportSection from './components/SupportSection.tsx'
import DownloadButton from './components/DownloadButton.tsx'
import SubscriptionForm from './components/SubscriptionForm.tsx'
import MainHeader from './components/MainHeader.tsx'
import HeroSection from './components/HeroSection.tsx'
import FeaturesSection from './components/FeaturesSection.tsx'
import SiteFooter from './components/SiteFooter.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import LinkResolver from './LinkResolver.tsx'
import PageLayout from './components/PageLayout.tsx'
import { MobilePage, DesktopPage, LedgerPage, TrezorPage, StakingPage } from './pages/ProductPages.tsx'
import { PayPage, DownloadPage } from './pages/PayDownloadPages.tsx'
import { AboutPage, CareersPage, ContactPage, BrandPage, InvestorsPage, SecurityPage } from './pages/CompanyPages.tsx'
import { SupportPage, ContactSupportPage, NewsletterPage, PrivacyPage, LegalInquiriesPage, PdfDocPage, AssetsPage } from './pages/SupportPages.tsx'

const pages: Record<string, () => JSX.Element> = {
    '/pay': PayPage,
    '/download': DownloadPage,
    '/mobile': MobilePage,
    '/desktop': DesktopPage,
    '/ledger-wallet': LedgerPage,
    '/trezor-wallet': TrezorPage,
    '/staking-crypto': StakingPage,
    '/assets': AssetsPage,
    '/about': AboutPage,
    '/careers': CareersPage,
    '/contact': ContactPage,
    '/brand': BrandPage,
    '/investors': InvestorsPage,
    '/security': SecurityPage,
    '/support': SupportPage,
    '/contact-support': ContactSupportPage,
    '/newsletter': NewsletterPage,
    '/privacy': PrivacyPage,
    '/legal-inquiries': LegalInquiriesPage,
    '/terms': () => <PdfDocPage title="Terms of Use" href="https://www.exodus.com/terms" />,
    '/trademarks': () => <PdfDocPage title="Exodus Trademark List" href="https://www.exodus.com/trademarks" />,
}

function SubPage() {
    const { pathname } = useLocation();
    const key = pathname.replace(/\/$/, '') || '/';
    const Page = pages[key];
    if (!Page) return <Navigate to="/" replace />;
    const bare = key === '/privacy' || key === '/legal-inquiries' || key === '/terms' || key === '/trademarks';
    return <PageLayout disclaimer={!bare}><Page /></PageLayout>;
}

function AppContent() {
    const location = useLocation();

    return (
        <>
        <body className={"dark flex min-h-dvh flex-col bg-black text-white"} style={{overflowY:"auto"}}>
        <span id={"xo-translation-marker"} className={"sr-only"}>
        I am a translation marker
        </span>
        <div className={"flex min-h-dvh flex-col overflow-x-clip"}>
        
                <MainHeader />
            
        <div className={"relative flex-1 pt-20 transition-transform duration-500 md:pt-24"}>
        <div className={"absolute z-0 w-[100vw] overflow-hidden -top-[400px] md:-top-[800px]"}>
        <picture>
        <Img id="0" />
        </picture>
        </div>
        <div className={"pointer-events-none absolute inset-x-0 top-0 z-0 hidden aspect-[1600/900] w-full mix-blend-screen md:block"}>
        <video className={"overflow-hidden object-cover transition-opacity duration-500 opacity-25 visible pointer-events-none absolute inset-x-0 top-0 z-0 hidden aspect-[1600/900] w-full mix-blend-screen md:block"} poster={"images/c192e7d7-674b-445d-a3d5-f80293040670.webp"} autoPlay={""} loop={""} muted={""} playsInline={""} preload={"metadata"}>
        
                    <VideoSource type="video/webm" />
                
        
                    <VideoSource type="video/mp4" />
                
        {`Your browser does not support the <video> tag`}
        <CaptionTrack />
        </video>
        <ImageLink />
        </div>
        
                <HeroSection />
            
        <ExodusPaySection />
        
                <FeaturesSection />
            
        
                <SupportedAssetsSection />
            
        
                <ExploreExodus />
            
        
                <FaqSection />
            
        <SupportSection />
        
                <FinancialDisclaimer />
            
        <div className={"relative z-[7] w-full min-w-full border-t border-white/8 bg-black px-3"}>
        <div className={"border-b border-white/8 md:flex-row md:items-center md:justify-between flex flex-col items-center justify-center gap-6 container-xl py-8 md:py-14 lg:px-4"}>
        <span className={"block text-center md:text-left font-eudoxus text-2xl font-bold"}>
        Control your wealth
        
                    <ResponsiveBreak responsiveClasses="xs:hidden" />
                
        {` with Exodus today`}
        </span>
        
                <DownloadButton buttonDataId="7" />
            
        </div>
        </div>
        </div>
        
                <SiteFooter />
            
        <div className={"fixed bottom-0 right-0 z-[60] h-max w-full max-w-full px-3 transition-all duration-300 sm:max-w-[448px] sm:px-8 lg:max-w-[588px] lg:px-16 max-h-0 overflow-hidden py-0 sm:py-0"}>
        <div className={"relative flex size-full flex-col items-stretch justify-between overflow-hidden rounded-3xl bg-black-200 shadow-[0_24px_32px_rgba(6,5,10,0.32)] after:pointer-events-none after:absolute after:inset-0 after:z-1 after:rounded-3xl after:bg-gradient-to-b after:from-transparent after:to-[#B19DFF] after:p-px after:opacity-32 after:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)]"}>
        <Img id="22" />
        <div className={"dark relative z-3 flex w-full flex-col items-stretch justify-between gap-y-6 overscroll-y-auto px-3 py-4 text-center text-white sm:p-8"}>
        <div className={"flex items-center justify-end"}>
        <CloseButton />
        </div>
        <NewsletterIntro />
        
                <SubscriptionForm
                    placeholder="Enter your email address"
                    buttonLabel="Subscribe"
                    disclaimer="We'll only use your email to send information about Exodus. You can unsubscribe at any time."
                />
            
        </div>
        </div>
        </div>
        </div>
        <next-route-announcer style={{position:"absolute"}}>
        <template shadowrootmode={"open"}>
        <div id={"__next-route-announcer__"} role={"alert"} style={{position:"absolute", border:"0px", height:"1px", margin:"-1px", padding:"0px", width:"1px", clip:"rect(0px,0px,0px,0px)", overflow:"hidden", whiteSpace:"nowrap", overflowWrap:"normal"}}></div>
        </template>
        </next-route-announcer>
        </body>
        </>
    );
}

function App() {
    const defaultRoute = "/";

    return (
        <Router>
            <LinkResolver />
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="/" element={<AppContent />} />
                <Route path="*" element={<SubPage />} />
            </Routes>
        </Router>
    );
}

export default App
