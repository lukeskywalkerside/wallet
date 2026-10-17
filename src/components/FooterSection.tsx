import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionLink from './ActionLink.tsx'
import FooterNavigation from './FooterNavigation.tsx'


// Component
function FooterSection() {
    return <section className={"container-xl flex flex-col gap-y-12 pt-10 pb-2 lg:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-x-14 lg:px-4 lg:py-20"}>
    	
            <FooterNavigation />
        
    	<div className={"flex w-full flex-col gap-y-4 lg:max-w-xs"}>
    		<div className={"flex flex-col items-start gap-y-3"}>
    			<span className={"text-[16px] font-normal leading-[140%] md:text-[18px]"}>
    				Subscribe to the Newsletter!
    			</span>
    			<p className={"opacity-64 text-[14px] font-normal leading-[190%]"}>
    				Get the latest Exodus news and product updates delivered straight to your inbox.
    			</p>
    		</div>
    		
                <ActionLink label="Subscribe" />
            
    		<p className={"text-[12px] font-normal leading-[160%] tracking-[0.01em] opacity-50"}>
    			We'll only use your email to send information about Exodus. You can unsubscribe at any time.
    		</p>
    	</div>
    </section>
}


export default FooterSection
