import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chevron_right from './icons/Chevron_right.tsx'
import Chevron_right2 from './icons/Chevron_right2.tsx'
import FooterDropdown from './FooterDropdown.tsx'


    
// Component

        function FooterDropdownButton({
            label
        }: {
            label: string;
        }) {
            return (
                <button className="text-[16px] font-normal leading-[140%] md:text-[18px] lg:pointer-events-none lg:cursor-text w-full items-center justify-between flex lg:hidden sf-hidden">
                    {label}
                    <Chevron_right2 />
                </button>
            );
        }
    

export default FooterDropdownButton
