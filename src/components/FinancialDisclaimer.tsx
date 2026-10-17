import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function FinancialDisclaimer() {
            return (
                <section className={"relative z-2 bg-black"}>
                    <div className={"mx-auto w-full px-3 md:px-16 lg:max-w-[1440px] lg:px-32 flex flex-col items-center justify-center gap-y-[1em] py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 text-center"}>
                        <DisclaimerText>
                            Exodus Movement, Inc. is a financial technology
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` company and not a bank.`}
                        </DisclaimerText>
                        <DisclaimerText>
                            Balance references such as “money” and “cash”
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` reflect digital assets held in a self-custodial`}
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` account. Swap and Exodus Card services are`}
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` available through third-party providers,`}
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` terms apply.`}
                        </DisclaimerText>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function DisclaimerText({
            children
        }: {
            children: React.ReactNode;
        }) {
            return (
                <span className={"opacity-64 text-[12px] font-normal leading-[160%] tracking-[0.01em]"}>
                    {children}
                </span>
            );
        }
    

export default FinancialDisclaimer
