import React from 'react'

import MainHeader from './MainHeader.tsx'
import FinancialDisclaimer from './FinancialDisclaimer.tsx'
import ResponsiveBreak from './ResponsiveBreak.tsx'
import DownloadButton from './DownloadButton.tsx'
import SiteFooter from './SiteFooter.tsx'

function PageLayout({ children, disclaimer = true }: { children: React.ReactNode; disclaimer?: boolean }) {
    return (
        <body className={"dark flex min-h-dvh flex-col bg-black text-white"} style={{ overflowY: 'auto' }}>
            <div className={"flex min-h-dvh flex-col overflow-x-clip"}>
                <MainHeader />
                <div className={"relative flex-1 pt-20 md:pt-24"}>
                    {children}
                    {disclaimer && <FinancialDisclaimer />}
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
            </div>
        </body>
    )
}

export default PageLayout
