import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterLink from './FooterLink.tsx'
import FooterInformation from './FooterInformation.tsx'
import FooterLinks from './FooterLinks.tsx'
import FooterSection from './FooterSection.tsx'


// Component

        function SiteFooter() {
            return (
                <footer
                    className={"z-1 flex flex-col px-3 pb-16 md:pb-40 bg-black"}
                    role={"contentinfo"}
                >
                    <FooterSection />

                    <FooterInformation />

                    <section className={"container-xl flex flex-col gap-y-6 lg:px-4"}>
                        <div className={"grid w-full grid-cols-1 gap-x-8 gap-y-4 leading-5 tracking-wide lg:grid-cols-2"}>
                            <FooterDisclaimer rowSpan>
                                Exodus is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will swap blockchain assets based on your own, and for all your decisions as to whether to swap blockchain assets with the Exodus in app swap feature. In many cases, blockchain assets you swap on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you swap on the basis of your research may increase in value after your swap.
                            </FooterDisclaimer>

                            <FooterDisclaimer>
                                Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you swap is subject to market and other investment risks.
                            </FooterDisclaimer>

                            <FooterDisclaimer>
                                Exodus users are responsible for storing their own recovery phrase. If the recovery phrase is lost, the user might not be able to retrieve their private keys.
                            </FooterDisclaimer>
                        </div>

                        <div className={"flex flex-col items-start justify-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10"}>
                            <FooterLinks />
                        </div>
                    </section>
                </footer>
            );
        }
    

// Subcomponents

        function FooterDisclaimer({
            children,
            rowSpan = false,
        }: {
            children: React.ReactNode;
            rowSpan?: boolean;
        }) {
            return (
                <p
                    className={
                        "text-[12px] font-normal leading-[160%] tracking-[0.01em] h-max opacity-64" +
                        (rowSpan ? " row-span-2" : "")
                    }
                >
                    {children}
                </p>
            );
        }
    

export default SiteFooter
