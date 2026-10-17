import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ExodusBrandLink from './ExodusBrandLink.tsx'
import ActionLink from './ActionLink.tsx'
import MenuToggleButton from './MenuToggleButton.tsx'
import HeaderNavigation from './HeaderNavigation.tsx'


// Component

function MainHeader() {
    return (
        <header
            className="fixed inset-x-0 top-2 z-10 flex items-center justify-center mx-auto h-16 w-full px-6 py-3 md:pr-3 transform transition-transform duration-500 text-black dark:text-white max-w-[calc(100%-24px)] rounded-full md:max-w-max bg-white/32 shadow-[inset_8px_8px_12px_rgba(32,26,55,0.12)] backdrop-blur-sm dark:bg-black/32 after:pointer-events-none after:absolute after:inset-0 after:z-1 after:rounded-full after:border-transparent after:p-px after:opacity-64 after:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] after:bg-[linear-gradient(130deg,#F6F6F6_16%,transparent_98%)] dark:after:bg-[linear-gradient(130deg,rgb(32,26,55)_16%,transparent_98%)] translate-y-0 md:top-6"
            role="banner"
        >
            <div className="container-xl relative z-10 flex items-center justify-between gap-x-8 lg:gap-x-12">
                <div className="flex h-7 w-max items-center justify-center md:h-9">
                    <ExodusBrandLink />
                </div>

                <HeaderNavigation />

                <div className="flex items-center justify-end gap-x-3 md:gap-x-8">
                    <button type="button" style={{ minHeight: 40, padding: "8px 18px", border: "1px solid rgba(255,255,255,.35)", borderRadius: 999, background: "transparent", color: "inherit", fontSize: 14, fontWeight: 500, whiteSpace: "nowrap", cursor: "pointer" }}>Sign In</button>
                    <ActionLink label="Download" />
                    <MenuToggleButton />
                </div>
            </div>
        </header>
    );
}
    

export default MainHeader

