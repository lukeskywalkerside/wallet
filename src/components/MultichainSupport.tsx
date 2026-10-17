import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Cryptocurrency_hexagon_scan_center_bitcoin from './icons/Cryptocurrency_hexagon_scan_center_bitcoin.tsx'


// Component
function MultichainSupport() {
    return <div className={"relative z-2 flex w-full flex-col items-center gap-y-4 md:gap-y-5"}>
    	<Cryptocurrency_hexagon_scan_center_bitcoin />
    	<h3 className={"text-[24px] font-bold md:text-[32px] bg-clip-text leading-tight text-transparent font-eudoxus bg-gradient-to-r from-purple-200 to-white to-80%"}>
    		Multichain support
    	</h3>
    </div>
}


export default MultichainSupport
