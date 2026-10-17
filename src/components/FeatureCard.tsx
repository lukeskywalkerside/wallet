import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function FeatureCard() {
            return (
                <div className="relative z-4 flex flex-col items-start justify-between gap-4 text-center md:text-left">
                    <div className="flex w-full flex-col gap-y-4">
                        <div className="flex flex-col items-center justify-between gap-y-3 md:flex-row-reverse md:items-start md:gap-x-4">
                            <div className="relative flex w-max items-center rounded-lg gap-x-3 md:gap-x-4 after:pointer-events-none after:absolute after:inset-0 after:z-2 after:rounded-lg after:border after:border-current after:opacity-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:rounded-lg before:border-transparent before:bg-[linear-gradient(130deg,#201A37_16%,transparent_98%)] before:p-px before:opacity-32 before:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] bg-[#0F0C1A]/12 shadow-[inset_4px_4px_8px_rgba(32,26,55,0.14)] backdrop-blur-sm mt-3 border-[1px] border-current px-1.5 py-0.5 uppercase text-purple-200">
                                <span className="opacity-64 text-[12px] font-normal leading-[160%] tracking-[0.01em]">
                                    Secure
                                </span>
                            </div>
                            <h3 className="text-[24px] font-bold leading-[110%] md:text-[32px] font-eudoxus">
                                User-friendly
                                <br />
                                {` interface`}
                            </h3>
                        </div>
                        <p className="opacity-64 text-[14px] font-normal leading-[140%]">
                            Monitor prices, track performance,
                            <br />
                            {` buy and sell, and swap between`}
                            <br />
                            {` thousands of swapping pairs.`}
                        </p>
                    </div>
                    <Img id="17" />
                </div>
            );
        }
    

export default FeatureCard
