import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Hexagon_outline from './icons/Hexagon_outline.tsx'
import Hexagon_outline4 from './icons/Hexagon_outline4.tsx'
import Hexagon_outline5 from './icons/Hexagon_outline5.tsx'
import Hexagon_outline6 from './icons/Hexagon_outline6.tsx'
import Hexagon_outline7 from './icons/Hexagon_outline7.tsx'
import Wireless_user_signal from './icons/Wireless_user_signal.tsx'
import HeadingSection from './HeadingSection.tsx'
import FeatureDescription from './FeatureDescription.tsx'
import GradientButton from './GradientButton.tsx'


// Component
function SupportSection() {
    return <section className={"container-xl relative z-1 flex justify-center px-3 pt-40 pb-28 lg:pb-24 lg:pt-56 lg:mt-52"}>
    	<div className={"absolute -z-1 w-[100vw] overflow-hidden bottom-0 flex h-[700px] items-center lg:h-[1200px] opacity-0 animate-delay-700 animate-duration-500 animate-timing-ease-in-out-quint"}>
    		<Img id="21" />
    	</div>
    	<div className={"container-xl absolute inset-x-0 -bottom-[80vw] top-auto z-1 xs:-bottom-[85vw] sm:-bottom-[95vw] lg:bottom-auto lg:top-28 opacity-0 animate-delay-100 animate-duration-700 animate-timing-ease-in-out-quint"}>
    		<div className={"pointer-events-none relative mx-auto aspect-square w-full"}>
    			<Hexagon_outline4 />
    			<Hexagon_outline5 />
    			<Hexagon_outline6 />
    			<Hexagon_outline7 />
    		</div>
    	</div>
    	<div className={"relative z-2 mx-auto flex w-full max-w-screen-2xl flex-col items-center"}>
    		<div className={"relative z-2 mx-auto flex max-w-screen-2xl flex-col items-center gap-y-8"}>
    			<div className={"aspect-square size-max rounded-full bg-black px-4 pb-4 pt-3 shadow-[inset_6px_6px_24px_rgba(97,63,231,0.24)] lg:px-8 lg:pb-8 lg:pt-6 opacity-0 animate-delay-500 animate-duration-300"}>
    				<Wireless_user_signal />
    			</div>
    			<div className={"flex flex-col items-center text-center gap-y-4 md:mb-7"}>
    				<div className={"flex flex-col px-0 gap-y-4 items-center text-center"}>
    					
                <HeadingSection dataId="6" />
            
    					
                <FeatureDescription
                    content={
                        <>
                            Our team provides 24-hour support,
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` 7 days a week.`}
                            <br className={"hidden xs:block"}></br>
                            {` We're here to assist`}
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` you every step of the way.`}
                        </>
                    }
                />
            
    				</div>
    			</div>
    			
                <GradientButton
                    dataId="6"
                    as="a"
                    target="_self"
                />
            
    		</div>
    	</div>
    </section>
}


export default SupportSection
