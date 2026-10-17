import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Apple_pay_logo from './icons/Apple_pay_logo.tsx'
import Google_pay_logo from './icons/Google_pay_logo.tsx'


// Component
function CardPaymentPromotion() {
    return <div className={"relative z-2 grid h-full gap-y-6 md:gap-x-6 lg:gap-x-8 md:grid-cols-2 md:items-center md:pl-12 md:pr-6 lg:pl-28"}>
    	<div className={"flex flex-col p-6 pb-0 md:p-0 lg:max-w-[375px]"}>
    		<div className={"flex items-start gap-2 mt-6 md:mt-0 order-last md:order-first"}>
    			<Apple_pay_logo />
    			<Google_pay_logo />
    		</div>
    		<h3 className={"text-[24px] font-bold leading-[110%] md:text-[32px] font-eudoxus md:mt-8"}>
    			Spend worldwide
    			<br>
    
    			</br>
    			{` with Pay`}
    		</h3>
    		<p className={"opacity-64 text-[14px] font-normal leading-[140%] mt-2"}>
    			Use your Exodus Card with Apple Pay or Google Pay, and tap to pay in-store or online.
    		</p>
    	</div>
    	<div className={"relative flex w-full items-end justify-center md:self-end"}>
    		<div className={"pointer-events-none absolute bottom-0 left-1/2 -z-1 -translate-x-1/2 w-[160%] max-w-none"}>
    			<Img id="19" />
    		</div>
    		<Img id="20" />
    	</div>
    </div>
}


export default CardPaymentPromotion
