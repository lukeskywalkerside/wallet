import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import TextLink from './TextLink.tsx'
import GradientButton from './GradientButton.tsx'


// Component

        function DownloadButton({
            buttonDataId = "7"
        }: {
            buttonDataId?: string;
        }) {
            return (
                <div className={"w-max"}>
                    <div className={"flex w-max flex-col"}>
                        <GradientButton
                            dataId={buttonDataId}
                            as="a" href="/download"
                            target="_self"
                        />

                        <div className={"opacity-0 animate-delay-200 animate-duration-500"}>
                            <span className={"text-[12px] font-normal tracking-[0.01em] block p-3 text-center leading-tight opacity-50"}>
                                By downloading Exodus, you agree
                                <br></br>
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
                        </div>
                    </div>
                </div>
            );
        }
    

export default DownloadButton

