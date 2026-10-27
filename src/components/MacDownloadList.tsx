import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import TextLink from './TextLink.tsx'
import MacDownloadLink from './MacDownloadLink.tsx'


// Component

        function MacDownloadList() {
            return (
                <ul className={"flex w-full flex-col bg-white text-black"}>
                    <MacDownloadItem architecture="Apple Silicon" />
                    <MacDownloadItem architecture="Intel" />
                    <li>
                        <span className={"text-[12px] font-normal tracking-[0.01em] block p-3 text-center leading-tight opacity-50"}>
                            By downloading Exodus, you agree
                            <br>
                            </br>
                            {`to the `}
                            <TextLink
                                label="Terms of Service"
                                variant="legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            {`and `}
                            <TextLink
                                label="Privacy Policy"
                                variant="legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        </span>
                    </li>
                </ul>
            );
        }
    

// Subcomponents

        function MacDownloadItem({
            architecture
        }: {
            architecture: "Apple Silicon" | "Intel";
        }) {
            return (
                <li className={"w-full border-b border-black/8 last:border-b-0"}>
                    <MacDownloadLink architecture={architecture} />
                </li>
            );
        }
    

export default MacDownloadList
