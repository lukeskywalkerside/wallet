import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Apple_logo_silhouette from './icons/Apple_logo_silhouette.tsx'
import { INSTALLERS } from '../downloads.ts'


    
// Component

        function MacDownloadLink({
            architecture
        }: {
            architecture: "Apple Silicon" | "Intel";
        }) {
            return (
                <a
                    href={architecture === 'Apple Silicon' ? INSTALLERS.macAppleSilicon : INSTALLERS.macIntel}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    role={"link"}
                    className={"flex h-max items-center justify-center w-full gap-x-3 p-4 text-left transition-colors hover:bg-purple-100"}
                >
                    <span
                        className={"relative z-1 inline-flex shrink-0 items-center justify-center size-11 rounded-full bg-[#30313F] text-white"}
                    >
                        <Apple_logo_silhouette />
                    </span>
                    <span
                        className={"text-base relative z-10 inline-block flex-1 truncate whitespace-nowrap text-nowrap font-medium tracking-[-0.005em]"}
                    >
                        {`Download for Mac (${architecture})`}
                        <small className="block text-xs font-normal opacity-60">Test build</small>
                    </span>
                </a>
            );
        }
    

export default MacDownloadLink
