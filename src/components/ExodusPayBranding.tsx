import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Exodus_pay_text_logo from './icons/Exodus_pay_text_logo.tsx'


// Component
function ExodusPayBranding() {
    return <div className={"flex items-center gap-x-3"}>
    	<Exodus_pay_text_logo />
    	<span className={"block bg-black/8 dark:bg-white/8 h-auto w-px [background:var(--gradient-vertical)] min-h-4"} style={{"--gradient-horizontal":"linear-gradient(to right,transparent 0%,#B19DFF,transparent 100%)", "--gradient-vertical":"linear-gradient(to bottom,transparent 0%,#B19DFF,transparent 100%)"}} role={"separator"}>
    
    	</span>
    	<span className={"before:pointer-events-none before:absolute before:inset-0 before:z-2 before:border-transparent before:p-px before:opacity-70 before:rounded-[inherit] before:bg-gradient-to-br before:from-white/30 before:from-10% before:via-transparent before:via-50% before:to-white/30 before:to-90% before:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] relative inline-flex h-6 items-center justify-center rounded-full px-2.5 bg-gradient-to-r from-green-pay/50 from-10% via-green-pay/70 via-60% to-green-pay/40 to-100%"}>
    		<span className={"text-[12px] font-normal leading-[160%] tracking-[0.01em]"}>
    			New
    		</span>
    	</span>
    </div>
}


export default ExodusPayBranding
