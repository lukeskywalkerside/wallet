import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chevron_right from './icons/Chevron_right.tsx'

import Chevron_right1 from './icons/Chevron_right1.tsx'
import Arrow_pointing_right from './icons/Arrow_pointing_right.tsx'
import Focus_target_crosshair from './icons/Focus_target_crosshair.tsx'


        type GradientButtonData = {
            layoutClasses: string;
            content:
                | {
                    kind: "text";
                    label: string;
                    textClasses: string;
                }
                | {
                    kind: "iconText";
                    label: string;
                    textClasses: string;
                    leadingIcon: "apple" | "focus";
                    leadingIconClasses: string;
                    trailingIcon?: "chevron";
                    trailingIconClasses?: string;
                }
                | {
                    kind: "accessibleLink";
                    label: string;
                    accessibleText: string;
                    trailingIcon: "arrow";
                    trailingIconClasses: string;
                };
        };
    
// Component

        function GradientButton({
            dataId,
            as = "a",
            href, target,
            rel
        }: {
            dataId: string; href?: string;
            as?: "a" | "button";
            target?: "_self" | "_blank";
            rel?: string;
        }) {
            const data: GradientButtonData = getGradientButtonData(dataId);

            const className = [
                "flex h-max items-center justify-center",
                data.layoutClasses,
                "relative text-center no-underline focus:outline-none focus:ring-transparent",
                "rounded-full",
                "bg-[linear-gradient(169deg,#5C6CF6,#A371F4_53%),linear-gradient(0deg,#fff,#A371F4_67%,#DA9EFF)]",
                "bg-[length:160%_160%]",
                "text-white",
                "[transition:background-position_300ms_cubic-bezier(0.4,0,0.2,1),transform_400ms_cubic-bezier(0.32,0.72,0,1)]",
                "after:pointer-events-none after:absolute after:inset-0 after:z-1 after:rounded-full after:border after:border-transparent after:transition-colors",
                "hover:bg-bottom focus-visible:border-none focus-visible:bg-bottom focus-visible:after:border-black/12",
                "hover:scale-[1.02] active:scale-[1.01] active:[transition:transform_120ms_cubic-bezier(0.32,0.72,0,1)]",
                dataId === "0"
                    ? "z-3 max-w-[420px] mr-auto"
                    : dataId === "1"
                      ? "px-16 md:px-20 max-w-[420px] mr-auto z-4"
                      : dataId === "2" || dataId === "3"
                        ? "w-full max-w-max"
                        : dataId === "7"
                          ? "z-3 max-w-[420px] mx-auto w-max"
                          : ""
            ].filter(Boolean).join(" ");

            if (as === "button") {
                return (
                    <button
                        role={"button"}
                        type={"button"}
                        className={className}
                    >
                        <GradientButtonContent content={data.content} />
                    </button>
                );
            }

            return (
                <a href={href}
                    {...(rel !== undefined ? { rel } : {})}
                    {...(target !== undefined ? { target } : {})}
                    role={"link"}
                    className={className}
                >
                    <GradientButtonContent content={data.content} />
                </a>
            );
        }
    

// Subcomponents

        function GradientButtonContent({
            content
        }: {
            content: GradientButtonData["content"];
        }) {
            if (content.kind === "accessibleLink") {
                return (
                    <>
                        {content.label}
                        <span className={"sr-only"}>
                            {content.accessibleText}
                        </span>
                        <span className={content.trailingIconClasses}>
                            <Arrow_pointing_right />
                        </span>
                    </>
                );
            }

            if (content.kind === "iconText") {
                return (
                    <>
                        <span className={content.leadingIconClasses}>
                            {content.leadingIcon === "apple" ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 4.5l8-1.1v8H2zm9-1.3L22 1.6v9.8H11zM2 12.5h8v8L2 19.4zm9 0h11v9.9l-11-1.6z" /></svg>
                            ) : (
                                <Focus_target_crosshair />
                            )}
                        </span>
                        <span className={content.textClasses}>
                            {content.label}
                        </span>
                        {content.trailingIcon === "chevron" && (
                            <span className={content.trailingIconClasses}>
                                <Chevron_right1 />
                            </span>
                        )}
                    </>
                );
            }

            return (
                <span className={content.textClasses}>
                    {content.label}
                </span>
            );
        }
    


        function getGradientButtonData(id: string | number): GradientButtonData {
            const key = String(id);

            const textBase =
                "relative z-10 inline-block flex-1 truncate whitespace-nowrap text-nowrap font-medium tracking-[-0.005em]";

            const standardText =
                `text-base ${textBase}`;

            const responsiveText =
                `text-base md:text-lg ${textBase} max-w-max`;

            const smallText =
                `text-sm ${textBase} max-w-max`;

            const iconBase =
                "relative z-1 inline-flex shrink-0 items-center justify-center";

            const data: Record<string, GradientButtonData> = {
                "0": {
                    layoutClasses:
                        "min-h-12 gap-x-3 px-8 py-2 md:min-h-14 md:gap-x-3 md:px-8 md:py-2",
                    content: {
                        kind: "text",
                        label: "Get Exodus",
                        textClasses: responsiveText
                    }
                },

                "1": {
                    layoutClasses:
                        "min-h-12 gap-x-3 py-2 md:min-h-14 md:gap-x-3 md:py-2",
                    content: {
                        kind: "iconText",
                        label: "Download for Windows",
                        textClasses: responsiveText,
                        leadingIcon: "apple",
                        leadingIconClasses: iconBase,
                        trailingIcon: "chevron",
                        trailingIconClasses:
                            "z-1 inline-flex shrink-0 items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200"
                    }
                },

                "2": {
                    layoutClasses:
                        "min-h-12 gap-x-3 py-2 md:min-h-14 md:gap-x-3 md:py-2 px-5 md:px-6",
                    content: {
                        kind: "accessibleLink",
                        label: "Learn More",
                        accessibleText:
                            " about buying crypto with XO Ramp",
                        trailingIcon: "arrow",
                        trailingIconClasses:
                            `${iconBase} text-black dark:text-white`
                    }
                },

                "3": {
                    layoutClasses:
                        "min-h-12 gap-x-3 py-2 md:min-h-14 md:gap-x-3 md:py-2 px-5 md:px-6",
                    content: {
                        kind: "accessibleLink",
                        label: "Learn More",
                        accessibleText:
                            " about staking and earning crypto",
                        trailingIcon: "arrow",
                        trailingIconClasses:
                            `${iconBase} text-black dark:text-white`
                    }
                },

                "4": {
                    layoutClasses:
                        "min-h-12 gap-x-3 py-2 px-5",
                    content: {
                        kind: "iconText",
                        label: "Browse Assets",
                        textClasses: standardText,
                        leadingIcon: "focus",
                        leadingIconClasses: iconBase
                    }
                },

                "5": {
                    layoutClasses:
                        "min-h-12 gap-x-3 px-8 py-2",
                    content: {
                        kind: "text",
                        label: "Download Exodus",
                        textClasses: standardText
                    }
                },

                "6": {
                    layoutClasses:
                        "min-h-12 gap-x-3 px-8 py-2",
                    content: {
                        kind: "text",
                        label: "Contact Support",
                        textClasses: standardText
                    }
                },

                "7": {
                    layoutClasses:
                        "min-h-10 gap-x-1.5 py-2 px-4",
                    content: {
                        kind: "iconText",
                        label: "Download for Windows",
                        textClasses: smallText,
                        leadingIcon: "apple",
                        leadingIconClasses: iconBase
                    }
                }
            };

            return data[key] ?? data["0"];
        }
    

export default GradientButton


