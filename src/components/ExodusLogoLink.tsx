import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Exodus_wallet_logo from './icons/Exodus_wallet_logo.tsx'


// Component

        function ExodusLogoLink() {
            return (
                <a
                    
                    href="/" target={"_self"}
                    className={"block h-8 w-auto max-w-[197px] lg:h-10"}
                >
                    <Exodus_wallet_logo />
                </a>
            );
        }
    

export default ExodusLogoLink
