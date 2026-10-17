import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function MenuLink({
            label,
            external = false
        }: {
            label: string;
            external?: boolean;
        }) {
            return (
                <a
                    {...(external ? { rel: "noopener noreferrer" } : {})}
                    target={external ? "_blank" : "_self"}
                    className="flex items-center text-[14px] font-normal leading-[140%] opacity-50 transition-opacity hover:opacity-80 focus:opacity-100 shrink-0 text-nowrap"
                    role="menuitem"
                >
                    <span>
                        {label}
                    </span>
                </a>
            );
        }
    

export default MenuLink
