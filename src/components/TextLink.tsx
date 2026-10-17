import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function TextLink({
            label,
            variant,
            target,
            rel,
        }: {
            label: string;
            variant: "device" | "legal" | "security";
            target: "_self" | "_blank";
            rel?: string;
        }) {
            const className =
                variant === "device"
                    ? "flex items-center text-[14px] font-normal leading-[140%] opacity-50 focus:opacity-100 underline underline-offset-2 !opacity-100 transition-colors hover:text-white/80 hover:opacity-100"
                    : variant === "legal"
                    ? "text-[12px] font-normal leading-[160%] tracking-[0.01em] underline transition-opacity hover:opacity-80"
                    : "opacity-64 text-[12px] font-normal leading-[160%] tracking-[0.01em]";

            return (
                <a
                    {...(rel !== undefined ? { rel } : {})}
                    target={target}
                    className={className}
                >
                    <span>
                        <span>
                            {label}
                        </span>
                    </span>
                </a>
            );
        }
    

export default TextLink
