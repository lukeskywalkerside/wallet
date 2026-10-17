import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component
function CustomerSupportFeature() {
    return <div className={"relative z-3 flex h-full flex-1 flex-col items-center justify-between gap-y-6 lg:gap-y-20 text-center"}>
    	<div className={"flex flex-col items-center gap-y-2 px-4"}>
    		<div className={"relative flex w-max items-center gap-x-3 md:gap-x-4 after:pointer-events-none after:absolute after:inset-0 after:z-2 after:border after:border-current after:opacity-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:border-transparent before:bg-[linear-gradient(130deg,#201A37_16%,transparent_98%)] before:p-px before:opacity-32 before:[mask:linear-gradient(white_0_0)_content-box_exclude,linear-gradient(white_0_0)_exclude] py-2 backdrop-blur-sm rounded-2xl bg-black/24 px-4 shadow-[inset_4px_4px_4px_0_rgba(15,12,26,0.24)] before:rounded-2xl after:rounded-2xl"}>
    			<span className={"tracking-[0.01em] font-eudoxus font-bold text-[52px] leading-none md:text-[64px] opacity-100"}>
    				24/7
    			</span>
    		</div>
    		<h3 className={"text-[24px] font-bold md:text-[32px] bg-clip-text leading-tight text-transparent font-eudoxus -from-30% bg-gradient-to-br from-purple-200 via-white via-60%"}>
    			Customer
    			<br>
    
    			</br>
    			{` Support`}
    		</h3>
    	</div>
    	<Img id="15" />
    	<p className={"opacity-64 text-[14px] font-normal leading-[140%] max-w-48"}>
    		Get assistance anytime with our dedicated support team.
    	</p>
    </div>
}


export default CustomerSupportFeature
