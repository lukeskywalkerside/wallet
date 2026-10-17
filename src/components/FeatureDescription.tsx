import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function FeatureDescription({
            content,
            muted = true
        }: {
            content: React.ReactNode;
            muted?: boolean;
        }) {
            return (
                <div>
                    <p
                        className={
                            muted
                                ? "opacity-64 text-[16px] font-normal leading-[140%] md:text-[18px]"
                                : "text-[16px] font-normal leading-[140%] md:text-[18px]"
                        }
                    >
                        {content}
                    </p>
                </div>
            );
        }
    

export default FeatureDescription
