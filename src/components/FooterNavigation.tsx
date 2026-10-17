import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterDropdownButton from './FooterDropdownButton.tsx'
import FooterDropdown from './FooterDropdown.tsx'


// Component

function FooterNavigation() {
    return (
        <nav
            className="flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-x-8"
            role="navigation"
        >
            <FooterNavSection label="Products" dataId="0" />
            <FooterNavSection label="Support" dataId="1" />
            <FooterNavSection label="Learn" dataId="2" />
            <FooterNavSection label="Company" dataId="3" />
        </nav>
    );
}
    

// Subcomponents

function FooterNavSection({
    label,
    dataId,
}: {
    label: string;
    dataId: string;
}) {
    return (
        <div
            className="max-w-full lg:max-w-max"
            role="group"
        >
            <span
                className="text-[16px] font-normal leading-[140%] md:text-[18px] lg:pointer-events-none lg:cursor-text hidden lg:block"
                role="heading"
            >
                {label}
            </span>

            <FooterDropdownButton label={label} />

            <div
                className="grid overflow-hidden transition-all delay-75 duration-[400ms] ease-in-out lg:pointer-events-auto lg:grid-rows-[1fr] lg:opacity-100 pointer-events-none opacity-0 grid-rows-[0fr]"
            >
                <FooterDropdown dataId={dataId} />
            </div>
        </div>
    );
}
    

export default FooterNavigation
