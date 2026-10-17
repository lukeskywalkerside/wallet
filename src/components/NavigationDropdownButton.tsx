import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chevron_right from './icons/Chevron_right.tsx'


    
// Component

        function NavigationDropdownButton({ label, open, controls, onClick }: {
            label: string; open?: boolean; controls?: string; onClick?: () => void;
        }) {
            return (
                <button
                    className={"text-[16px] font-normal leading-[140%] md:text-[18px] h-12 shrink-0 text-nowrap rounded-full px-6 py-3 no-underline transition-colors hover:bg-white/4 focus:bg-white/2 focus:outline-none focus:ring-transparent max-md:w-full md:pl-5 md:pr-3 flex items-center justify-between gap-x-2"}
                    type={"button"} onClick={onClick} aria-expanded={open} aria-controls={controls}
                >
                    {label}
                    <Chevron_right />
                </button>
            );
        }
    

export default NavigationDropdownButton


