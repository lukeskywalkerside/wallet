import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function ResponsiveBreak({
            responsiveClasses
        }: {
            responsiveClasses: string;
        }) {
            return (
                <br className={`block ${responsiveClasses} sf-hidden`}></br>
            );
        }
    

export default ResponsiveBreak
