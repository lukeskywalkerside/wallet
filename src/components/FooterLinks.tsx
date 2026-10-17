import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterLink from './FooterLink.tsx'


// Component
function FooterLinks() {
    return <ul className={"flex justify-start gap-4 lg:gap-3"}>
    	<li>
    		
                <FooterLink label="Privacy Policy" />
            
    	</li>
    	<li>
    		
                <FooterLink label="Terms of Service" />
            
    	</li>
    	<li>
    		
                <FooterLink label="Trademarks" />
            
    	</li>
    </ul>
}


export default FooterLinks
