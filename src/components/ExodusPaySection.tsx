import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import TextLink from './TextLink.tsx'
import ExodusPayBranding from './ExodusPayBranding.tsx'
import HeadingSection from './HeadingSection.tsx'
import FeatureDescription from './FeatureDescription.tsx'
import GradientButton from './GradientButton.tsx'


// Component
function ExodusPaySection() {
    return <section id={"exodus-pay"} className={"container-xl relative z-3 overflow-hidden -mt-8 mb-16 px-3 xs:mt-8 md:px-9 lg:mb-0 lg:mt-28"}>
    	<div className={"mx-auto flex w-full max-w-screen-xl flex-col items-center gap-y-16 lg:flex-row lg:items-center lg:justify-between lg:gap-x-12"}>
    		<div className={"my-auto flex flex-col gap-y-8 order-2 w-full py-0 md:px-0 md:py-0 lg:order-1 max-w-none lg:max-w-[460px]"}>
    			<div className={"flex flex-col items-start text-left gap-y-4"}>
    				<div>
    					<ExodusPayBranding />
    				</div>
    				<div className={"flex flex-col px-0 gap-y-4 items-start text-left"}>
    					
                <HeadingSection dataId="0" />
            
    					
                <FeatureDescription
                    content="With Exodus Pay, you can send payments instantly to friends, spend with your free Exodus Card, and earn rewards, all in one app."
                />
            
    				</div>
    			</div>
    			<div className={"flex w-max flex-col"}>
    				
                <GradientButton
                    dataId="0"
                    as="a"
                    rel="noopener noreferrer"
                    target="_blank"
                />
            
    				<div className={"opacity-0 animate-delay-200 animate-duration-500"}>
    					<span className={"text-[12px] font-normal tracking-[0.01em] block p-3 text-center leading-tight opacity-50"}>
    						
                <TextLink
                    label="Terms"
                    variant="legal"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            
    						{`& `}
    						
                <TextLink
                    label="Privacy"
                    variant="legal"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            
    						{` apply`}
    					</span>
    				</div>
    			</div>
    		</div>
    		<div className={"relative order-1 flex w-full items-center justify-center max-w-[680px] lg:order-2"}>
    			<div className={"pointer-events-none absolute bottom-0 left-1/2 -z-1 -translate-x-1/2 w-[190%] max-w-none xs:w-[160%] sm:w-[130%] opacity-0 animate-duration-500"}>
    				<Img id="4" />
    			</div>
    			<div className={"relative z-1 w-full max-w-[220px] xs:max-w-[300px] opacity-0 animate-delay-200 animate-duration-500"}>
    				<picture>
    					<Img id="5" />
    				</picture>
    			</div>
    		</div>
    	</div>
    </section>
}


export default ExodusPaySection
