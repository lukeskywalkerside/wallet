import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function FeatureLabel({
            icon: Icon,
            label
        }: {
            icon: React.ComponentType;
            label: string;
        }) {
            return (
                <div className={"relative flex w-max items-center rounded-lg gap-x-3"}>
                    <Icon />
                    <span className={"text-[18px] md:text-[20px] bg-clip-text leading-tight text-transparent bg-gradient-to-b from-white from-0% via-purple-200 via-[56%] to-purple-200/32 to-100% font-medium"}>
                        {label}
                    </span>
                </div>
            );
        }
    

export default FeatureLabel
