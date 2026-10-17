import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function NewsletterIntro() {
    return <div className={"mt-16 flex w-full flex-col items-center gap-y-3 px-5 sm:mt-24 sm:gap-4 sm:px-0"}>
    	<span className={"text-[24px] font-bold leading-[110%] md:text-[32px] font-eudoxus"}>
    		Stay in the loop!
    	</span>
    	<span className={"opacity-64 text-[14px] font-normal leading-[140%]"}>
    		Subscribe to the Exodus Newsletter to get the latest news and product updates delivered straight to your inbox.
    	</span>
    </div>
}


export default NewsletterIntro
