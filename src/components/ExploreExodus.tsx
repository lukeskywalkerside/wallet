import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Trezor_hardware_wallet from './icons/Trezor_hardware_wallet.tsx'
import Hexagonal_grid_pattern from './icons/Hexagonal_grid_pattern.tsx'
import Shield_with_eye from './icons/Shield_with_eye.tsx'
import Hexagonal_grid_pattern1 from './icons/Hexagonal_grid_pattern1.tsx'
import Hexagonal_grid_pattern2 from './icons/Hexagonal_grid_pattern2.tsx'
import Trezor_hardware_wallet1 from './icons/Trezor_hardware_wallet1.tsx'
import Hexagonal_grid_pattern3 from './icons/Hexagonal_grid_pattern3.tsx'
import ResponsiveBreak from './ResponsiveBreak.tsx'
import GradientButton from './GradientButton.tsx'
import SecurityFeature from './SecurityFeature.tsx'
import SecurityKeyWrapper from './SecurityKeyWrapper.tsx'
import CustomerSupportFeature from './CustomerSupportFeature.tsx'
import FeatureCard from './FeatureCard.tsx'
import MultichainSupport from './MultichainSupport.tsx'
import CardPaymentPromotion from './CardPaymentPromotion.tsx'


// Component

        function ExploreExodus() {
            return (
                <section
                    id="explore-exodus"
                    className="container-xl relative z-2 overflow-hidden px-4 pb-36 pt-20 md:px-4 md:pb-60 md:pt-32"
                >
                    <div className="flex flex-col items-center gap-y-8 md:gap-y-12">
                        <div className="flex flex-col items-center text-center gap-y-6 md:gap-y-8">
                            <div>
                                <div className="relative flex w-max items-center h-9 gap-2 rounded-full px-3 py-2 backdrop-blur-md md:h-10 md:px-4 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-current before:opacity-4">
                                    <span className="flex size-4 shrink-0 items-center md:size-5 [&amp;>*]:size-full">
                                        <Shield_with_eye />
                                    </span>
                                    <span className="text-[16px] leading-[140%] md:text-[18px] max-sm:text-xs font-normal">
                                        In-Depth Look
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col px-0 gap-y-4 items-center text-center">
                                <div>
                                    <h2 className="text-[32px] font-bold leading-[110%] -tracking-[0.01em] md:text-[48px] font-eudoxus">
                                        {`Explore the power `}

                                        <ResponsiveBreak responsiveClasses="md:hidden" />

                                        of Exodus
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-4 md:gap-5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6">
                            <ExploreFeatureCard
                                layoutClassName="order-1 md:row-span-1"
                                contentClassName="p-8 flex items-center gap-x-4"
                            >
                                <Hexagonal_grid_pattern1 />

                                <Img id="10" />

                                <SecurityFeature
                                    headingLine1="Passkey"
                                    headingLine2=" protection"
                                    description="Secure your wallet with a device-based passkey, no passwords needed."
                                    variant="passkey"
                                />

                                <SecurityKeyWrapper />
                            </ExploreFeatureCard>

                            <ExploreFeatureCard
                                layoutClassName="order-3 md:order-5 md:row-span-2 lg:order-2"
                                contentClassName="p-8 flex flex-col items-center gap-x-4 after:absolute after:inset-0 after:z-1 after:bg-gradient-to-b after:from-black-300 after:from-60% after:to-transparent"
                            >
                                <Hexagonal_grid_pattern2 />

                                <Img id="11" />

                                <SecurityFeature
                                    headingLine1="Advanced security"
                                    headingLine2=" made easy"
                                    description="Securely manage and swap crypto in Exodus with your Ledger and Trezor hardware wallets."
                                    variant="hardware"
                                />

                                <Img id="12" />

                                <Trezor_hardware_wallet1 />
                            </ExploreFeatureCard>

                            <ExploreFeatureCard
                                layoutClassName="order-5 md:order-4 md:row-span-2 lg:order-3 lg:row-span-3"
                                contentClassName="p-8 px-4"
                            >
                                <Hexagonal_grid_pattern1 />

                                <Img id="13" />

                                <Img id="14" />

                                <CustomerSupportFeature />
                            </ExploreFeatureCard>

                            <ExploreFeatureCard
                                layoutClassName="order-2 md:row-span-2 lg:order-4"
                                contentClassName="p-8 flex pb-0 after:absolute after:inset-0 after:z-3 after:bg-gradient-to-b after:from-black-300 after:from-40% after:to-transparent"
                            >
                                <Hexagonal_grid_pattern3 />

                                <Img id="16" />

                                <FeatureCard />
                            </ExploreFeatureCard>

                            <ExploreFeatureCard
                                layoutClassName="order-4 md:order-3 md:row-span-1 lg:order-5"
                                contentClassName="p-8 flex items-center gap-x-4 px-4"
                            >
                                <Hexagonal_grid_pattern1 />

                                <Img id="18" />

                                <MultichainSupport />
                            </ExploreFeatureCard>

                            <ExploreFeatureCard
                                layoutClassName="order-6 md:col-span-2 md:col-start-1 md:row-start-5 lg:col-span-3 lg:col-start-1 lg:row-start-4"
                                contentClassName="p-0"
                            >
                                <CardPaymentPromotion />
                            </ExploreFeatureCard>
                        </div>

                        <GradientButton
                            dataId="5"
                            as="a"
                            target="_self"
                        />
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function ExploreFeatureCard({
            layoutClassName,
            contentClassName,
            children,
        }: {
            layoutClassName: string;
            contentClassName: string;
            children: React.ReactNode;
        }) {
            return (
                <div className={layoutClassName}>
                    <div
                        className={`relative size-full overflow-hidden mx-auto max-w-sm md:max-w-none rounded-3xl bg-black-300 ${contentClassName.startsWith("p-0") ? "" : ""}before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-3xl before:border-transparent before:bg-gradient-to-b before:from-transparent before:to-purple-300 before:p-px before:opacity-32 before:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] ${contentClassName}`}
                    >
                        {children}
                    </div>
                </div>
            );
        }
    

export default ExploreExodus
