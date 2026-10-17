import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Hexagonal_cross_division from './icons/Hexagonal_cross_division.tsx'
import Exodus_wordmark from './icons/Exodus_wordmark.tsx'


// Component
function ExodusBrandLink() {
    return <a href="/" target={"_self"} style={{color:"inherit", outline:"none"}} className={"inline-flex h-6 items-center justify-start gap-x-2.5 outline-none ring-transparent transition-all focus:outline-none focus:ring-transparent md:h-8 md:max-w-max"}>
    	<Hexagonal_cross_division />
    	<Exodus_wordmark />
    </a>
}


export default ExodusBrandLink
