import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Github_cat_silhouette from './icons/Github_cat_silhouette.tsx'
import Youtube_play_button from './icons/Youtube_play_button.tsx'
import Reddit_alien_face from './icons/Reddit_alien_face.tsx'
import ExodusLogoLink from './ExodusLogoLink.tsx'
import SocialLink from './SocialLink.tsx'


// Component

        function FooterInformation() {
            return (
                <section className="container-xl flex flex-col gap-y-8 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8 lg:gap-y-0 lg:px-4 lg:py-10">
                    <div className="flex flex-col gap-y-2.5 lg:flex-row lg:items-center lg:gap-x-4 lg:gap-y-0">
                        <ExodusLogoLink />

                        <span
                            className="bg-black/8 dark:bg-white/8 h-auto min-h-8 w-px hidden lg:block"
                            role="separator"
                        ></span>

                        <p className="text-[12px] font-normal leading-[160%] tracking-[0.01em] opacity-64">
                            <span className="text-[14px] font-normal leading-[140%] block">
                                Copyright © 2026 Exodus Movement, Inc.
                            </span>
                        </p>
                    </div>

                    <div className="flex w-full flex-wrap items-center justify-start gap-x-3 xs:flex-nowrap lg:w-max lg:justify-end lg:gap-x-4">
                        <SocialLink href="https://github.com/ExodusMovement" icon={<Github_cat_silhouette />} />
                        <SocialLink href="https://www.youtube.com/c/exodus" icon={<Youtube_play_button />} />
                        <SocialLink href="https://www.reddit.com/r/ExodusWallet" icon={<Reddit_alien_face />} />
                    </div>
                </section>
            );
        }
    

export default FooterInformation


