import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Hexagonal_grid_pattern from './icons/Hexagonal_grid_pattern.tsx'
import HeadingSection from './HeadingSection.tsx'
import FeatureDescription from './FeatureDescription.tsx'
import GradientButton from './GradientButton.tsx'


// Component

        function SupportedAssetsSection() {
            return (
                <section className={"mx-auto flex max-w-[1440px] flex-col gap-4 overflow-hidden pb-16 pt-8 lg:py-16 before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-[1px] before:bg-white before:opacity-12 lg:before:left-16 lg:before:right-16 after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-[1px] after:bg-white after:opacity-12 lg:after:left-16 lg:after:right-16 relative z-3"}>
                    <Hexagonal_grid_pattern />
                    <div className={"pointer-events-none absolute inset-0 z-3 h-full w-full"}>
                        <GradientOverlay
                            className="pointer-events-none absolute bottom-0 top-0 h-full w-10 lg:w-56 left-0 bg-[linear-gradient(90deg,#06050A_0%,#06050A_20%,rgba(6,5,10,0)_100%)]"
                        />
                        <GradientOverlay
                            className="pointer-events-none absolute bottom-0 top-0 h-full w-10 lg:w-56 right-0 bg-[linear-gradient(270deg,#06050A_0%,#06050A_20%,rgba(6,5,10,0)_100%)]"
                        />
                        <GradientOverlay
                            className="pointer-events-none absolute left-0 right-0 h-16 w-full top-0 bg-[linear-gradient(180deg,#06050A_0%,#06050A_20%,rgba(6,5,10,0)_100%)]"
                        />
                        <GradientOverlay
                            className="pointer-events-none absolute left-0 right-0 h-16 w-full bottom-0 bg-[linear-gradient(0deg,#06050A_0%,#06050A_20%,rgba(6,5,10,0)_100%)]"
                        />
                    </div>
                    <div className={"relative z-10 flex flex-col items-center gap-6 px-3 pb-16 lg:flex-row lg:items-start lg:justify-between lg:px-28 lg:pb-12"}>
                        <div className={"flex flex-col items-center gap-4 max-lg:text-center lg:items-start"}>
                            <div className={"flex flex-col items-center gap-4 max-lg:text-center lg:items-start"}>
                                <div className={"flex flex-col px-0 gap-y-4"}>
                                    <HeadingSection dataId="5" />
                                    <FeatureDescription
                                        muted={false}
                                        content="Bitcoin, Ethereum, USDT, Solana and more…"
                                    />
                                </div>
                            </div>
                        </div>
                        <GradientButton
                            dataId="4"
                            as="a"
                            target="_self"
                        />
                    </div>
                    <div className={"relative z-2"}>
                        <div className={"h-[54px] lg:h-16 w-full"}>

                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function GradientOverlay({
            className
        }: {
            className: string;
        }) {
            return (
                <div className={className}>

                </div>
            );
        }
    

export default SupportedAssetsSection
