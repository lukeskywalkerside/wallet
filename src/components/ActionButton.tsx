import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { JSX } from 'react/jsx-runtime'

import Chevron_right from './icons/Chevron_right.tsx'
import Apple_logo_silhouette from './icons/Apple_logo_silhouette.tsx'
import Chevron_right1 from './icons/Chevron_right1.tsx'


// Component

        function ActionButton({
            variant,
            label
        }: {
            variant: "download" | "subscribe";
            label: string;
        }) {
            const navigate = useNavigate();
            const isDownload = variant === "download";

            const className = [
                "flex h-max items-center justify-center",
                isDownload
                    ? "min-h-12 gap-x-3 py-2 md:min-h-14 md:gap-x-3 md:py-2"
                    : "min-h-12 gap-x-3 px-8 py-2",
                "relative text-center no-underline focus:outline-none focus:ring-transparent rounded-full",
                "[transition:box-shadow_400ms_cubic-bezier(0.32,0.72,0,1),transform_400ms_cubic-bezier(0.32,0.72,0,1)]",
                "focus-visible:border-none bg-black text-white dark:bg-white dark:text-black",
                "after:pointer-events-none after:absolute after:inset-0 after:z-0 after:rounded-full after:border after:border-transparent after:transition-colors",
                isDownload
                    ? "hover:shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:dark:shadow-[0_8px_32px_rgba(255,255,255,0.24)] focus-visible:shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_2px_4px_rgba(255,255,255,0.4)] focus-visible:dark:shadow-[0_8px_32px_rgba(255,255,255,0.24),inset_0_2px_4px_rgba(0,0,0,0.4)] focus-visible:after:border-white/32 focus-visible:dark:after:border-black/32 hover:scale-[1.02] active:scale-[1.01] active:[transition:transform_120ms_cubic-bezier(0.32,0.72,0,1)] px-16 md:px-20 z-3 max-w-[420px] mx-auto"
                    : "cursor-not-allowed opacity-64 mb-1 mt-4"
            ].join(" ");

            const textClassName = [
                isDownload
                    ? "text-base md:text-lg"
                    : "text-base",
                "relative z-10 inline-block flex-1 truncate whitespace-nowrap text-nowrap font-medium tracking-[-0.005em]",
                ...(isDownload ? ["max-w-max"] : [])
            ].join(" ");

            return (
                <button
                    role={"button"}
                    type={"button"} onClick={isDownload ? () => navigate("/download") : undefined}
                    {...(!isDownload ? { disabled: "" } : {})}
                    className={className}
                >
                    {isDownload && (
                        <span className={"relative z-1 inline-flex shrink-0 items-center justify-center"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 4.5l8-1.1v8H2zm9-1.3L22 1.6v9.8H11zM2 12.5h8v8L2 19.4zm9 0h11v9.9l-11-1.6z" /></svg>
                        </span>
                    )}

                    <span className={textClassName}>
                        {label}
                    </span>

                    {isDownload && (
                        <span className={"z-1 inline-flex shrink-0 items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200"}>
                            <Chevron_right1 />
                        </span>
                    )}
                </button>
            );
        }
    

export default ActionButton

