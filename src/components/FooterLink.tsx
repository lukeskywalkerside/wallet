import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function FooterLink({ label }: { label: string }) {
            return (
                <a
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    className={"flex items-center transition-opacity hover:opacity-80 focus:opacity-100 text-[12px] font-normal leading-5 tracking-wide underline opacity-50"}
                >
                    <span>
                        {label}
                    </span>
                </a>
            );
        }
    

export default FooterLink
