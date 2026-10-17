import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function SecurityFeature({
            headingLine1,
            headingLine2,
            description,
            variant
        }: {
            headingLine1: string;
            headingLine2: string;
            description: string;
            variant: "passkey" | "hardware";
        }) {
            const isPasskey = variant === "passkey";

            return (
                <div
                    className={
                        isPasskey
                            ? "relative z-2 flex flex-col max-w-44 md:max-w-48 gap-y-2"
                            : "relative z-2 mb-64 flex flex-col items-center gap-y-2 text-center"
                    }
                >
                    <h3
                        className={
                            isPasskey
                                ? "text-[24px] font-bold md:text-[32px] bg-clip-text leading-tight text-transparent font-eudoxus -from-30% bg-gradient-to-br from-purple-200 to-white to-60%"
                                : "text-[24px] font-bold leading-[110%] md:text-[32px] font-eudoxus"
                        }
                    >
                        {headingLine1}
                        <br />
                        {headingLine2}
                    </h3>
                    <p
                        className={
                            isPasskey
                                ? "opacity-64 text-[14px] font-normal leading-[140%]"
                                : "opacity-64 text-[14px] font-normal leading-[140%] max-w-60"
                        }
                    >
                        {description}
                    </p>
                </div>
            );
        }
    

export default SecurityFeature
