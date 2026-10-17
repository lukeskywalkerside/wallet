import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function ActionLink({ label }: { label: string }) {
            return (
                <a
                    target={"_self"}
                    role={"link"}
                    className={"flex h-max items-center justify-center min-h-10 gap-x-1.5 px-5 py-2 relative text-center no-underline focus:outline-none focus:ring-transparent rounded-full [transition:box-shadow_400ms_cubic-bezier(0.32,0.72,0,1),transform_400ms_cubic-bezier(0.32,0.72,0,1)] focus-visible:border-none bg-black text-white dark:bg-white dark:text-black after:pointer-events-none after:absolute after:inset-0 after:z-0 after:rounded-full after:border after:border-transparent after:transition-colors hover:shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:dark:shadow-[0_8px_32px_rgba(255,255,255,0.24)] focus-visible:shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_2px_4px_rgba(255,255,255,0.4)] focus-visible:dark:shadow-[0_8px_32px_rgba(255,255,255,0.24),inset_0_2px_4px_rgba(0,0,0,0.4)] focus-visible:after:border-white/32 focus-visible:dark:after:border-black/32 hover:scale-[1.02] active:scale-[1.01] active:[transition:transform_120ms_cubic-bezier(0.32,0.72,0,1)]"}
                >
                    <span className={"text-sm relative z-10 inline-block flex-1 truncate whitespace-nowrap text-nowrap font-medium tracking-[-0.005em]"}>
                        {label}
                    </span>
                </a>
            );
        }
    

export default ActionLink
