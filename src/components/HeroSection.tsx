import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Padlock_on_gradient_shield from './icons/Padlock_on_gradient_shield.tsx'
import Hexagon_outline from './icons/Hexagon_outline.tsx'
import Hexagon_outline1 from './icons/Hexagon_outline1.tsx'
import Hexagon_outline2 from './icons/Hexagon_outline2.tsx'
import Hexagon_outline3 from './icons/Hexagon_outline3.tsx'
import ResponsiveBreak from './ResponsiveBreak.tsx'
import ActionButton from './ActionButton.tsx'
import TextLink from './TextLink.tsx'
import HardwareWalletLink from './HardwareWalletLink.tsx'
import MacDownloadCard from './MacDownloadCard.tsx'


// Component

function HeroSection() {
    return (
        <section className="relative z-3 pt-3 md:pt-[76px]">
            <div className="z-3 mx-auto flex max-w-screen-2xl flex-col items-center gap-y-6 px-3 pb-6 md:gap-y-8 md:pb-9">
                <div className="flex flex-col items-center text-center gap-y-6 md:gap-y-8">
                    <HeroTrustBadge />
                    <HeroHeading />
                </div>
                <HeroDownload />
            </div>
            <div className="relative z-2 pb-20 max-md:px-8 before:absolute before:inset-x-0 before:z-1 before:w-full before:bg-gradient-to-t before:from-black before:to-transparent before:-bottom-[50px] before:h-[385px] before:translate-y-0 before:from-70% lg:before:h-[285px]">
                <HeroVisual />
                <div className="container-md relative z-4 flex flex-col items-center justify-between gap-x-4 gap-y-3 px-16 lg:flex-row mt-8">
                    <HeroStatistics />
                    <HeroSecurityLinks />
                </div>
            </div>
        </section>
    );
}
    

// Subcomponents

function HeroTrustBadge() {
    return (
        <div>
            <div className="relative flex w-max items-center h-9 gap-2 rounded-full px-3 py-2 backdrop-blur-md md:h-10 md:px-4 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-current before:opacity-4 max-sm:w-full">
                <span className="flex size-4 shrink-0 items-center md:size-5 [&amp;>*]:size-full">
                    <Padlock_on_gradient_shield />
                </span>
                <span className="text-[16px] leading-[140%] md:text-[18px] font-normal max-sm:text-xs">
                    Trusted by
                    <span className="text-purple-400 dark:text-purple-200">
                        millions since 2015
                    </span>
                </span>
            </div>
        </div>
    );
}

function HeroHeading() {
    return (
        <div className="flex flex-col px-0 gap-y-6 items-center text-center">
            <div>
                <h1 className="text-[44px] font-bold leading-[95%] -tracking-[0.01em] md:text-[80px] font-eudoxus">
                    {`Your money. `}
                    <ResponsiveBreak responsiveClasses="sm:hidden md:block lg:hidden" />
                    {` Your rules.`}
                </h1>
            </div>
            <div>
                <p className="opacity-64 text-[16px] font-normal leading-[140%] md:text-[18px]">
                    Send cash, manage crypto,
                    <ResponsiveBreak responsiveClasses="xs:hidden" />
                    {` and spend worldwide.`}
                </p>
            </div>
        </div>
    );
}

function HeroDownload() {
    return (
        <div className="relative z-3 mt-4 w-full">
            <div className="relative z-3 max-w-[420px] mx-auto">
                <div>
                    <ActionButton
                        variant="download"
                        label="Download Exodus"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-[14px] font-normal leading-[140%] mt-3 flex items-center justify-center gap-x-3 text-center text-white/50">
                        <TextLink
                            label="Available on other devices"
                            variant="device"
                            target="_self"
                        />
                    </p>
                </div>
                <div className="grid transition-all delay-75 duration-[400ms] ease-in-out max-h-96 overflow-hidden absolute left-1/2 -translate-x-1/2 pt-4 w-max top-14 max-h-none pointer-events-none opacity-0 grid-rows-[0fr]">
                    <MacDownloadCard />
                </div>
            </div>
        </div>
    );
}

function HeroVisual() {
    return (
        <>
            <div className="pointer-events-none mx-auto aspect-square w-full [mask-image:linear-gradient(to_bottom,transparent_40%,black)] absolute inset-x-0 -bottom-16 z-3 max-w-screen-2xl hidden md:block">
                <Hexagon_outline />
                <Hexagon_outline1 />
                <Hexagon_outline2 />
                <Hexagon_outline3 />
            </div>
            <div className="container-md relative z-0">
                <picture className="block w-full">
                    <Img id="2" />
                </picture>
                <div className="pointer-events-none select-none hidden md:block absolute -right-[36%] -top-[43%] -z-1 aspect-[925/981] w-[65%] blur-2xl opacity-0 animate-fade-in animate-duration-500">
                    <Img id="3" />
                </div>
            </div>
        </>
    );
}

function HeroStatistic({
    value,
    label
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="flex items-center gap-x-2 whitespace-nowrap">
            <span className="relative flex h-6 max-w-max items-center justify-center rounded bg-white/4 p-2 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded before:border before:border-current before:opacity-4 after:pointer-events-none after:absolute after:inset-0 after:rounded after:border after:border-current after:bg-current after:opacity-4 after:backdrop-blur-sm">
                <span className="text-[14px] font-medium tracking-[0.01em] leading-none">
                    {value}
                </span>
            </span>
            <span className="opacity-64 text-[14px] font-normal whitespace-nowrap leading-none">
                {label}
            </span>
        </div>
    );
}

function HeroStatistics() {
    return (
        <div className="flex flex-col items-center gap-y-3 lg:flex-row lg:gap-x-4">
            <HeroStatistic
                value="11+"
                label="Years in crypto"
            />
            <span
                className="bg-black/8 dark:bg-white/8 h-auto w-px [background:var(--gradient-vertical)] min-h-5 hidden lg:block"
                style={{
                    "--gradient-horizontal": "linear-gradient(to right,transparent 0%,#B19DFF,transparent 100%)",
                    "--gradient-vertical": "linear-gradient(to bottom,transparent 0%,#B19DFF,transparent 100%)"
                } as React.CSSProperties}
                role="separator"
            >
            </span>
            <HeroStatistic
                value="NYSE: EXOD"
                label="Publicly listed"
            />
        </div>
    );
}

function HeroSecurityLinks() {
    return (
        <div className="relative flex w-max items-center rounded-lg gap-x-3 md:gap-x-4 after:pointer-events-none after:absolute after:inset-0 after:z-2 after:rounded-lg after:border after:border-current after:opacity-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-lg before:border-transparent before:bg-[linear-gradient(130deg,#201A37_16%,transparent_98%)] before:p-px before:opacity-32 before:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] bg-[#0F0C1A]/12 px-4 py-2 shadow-[inset_4px_4px_8px_rgba(32,26,55,0.14)] backdrop-blur-sm">
            <TextLink
                label="Advanced Security"
                variant="security"
                target="_self"
            />
            <HardwareWalletLink wallet="trezor" />
            <span
                className="block bg-black/8 dark:bg-white/8 h-auto w-px [background:var(--gradient-vertical)] min-h-5"
                style={{
                    "--gradient-horizontal": "linear-gradient(to right,transparent 0%,#B19DFF,transparent 100%)",
                    "--gradient-vertical": "linear-gradient(to bottom,transparent 0%,#B19DFF,transparent 100%)"
                } as React.CSSProperties}
                role="separator"
            >
            </span>
            <HardwareWalletLink wallet="ledger" />
        </div>
    );
}
    

export default HeroSection


