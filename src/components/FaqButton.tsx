import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Plus_symbol_bold from './icons/Plus_symbol_bold.tsx'


    
// Component

function FaqButton({ question, open, onClick, controls }: { question: string; open: boolean; onClick: () => void; controls: string }) {
    return (
        <button
            className={"flex items-center justify-between gap-x-2 text-left no-underline focus:outline-none focus:ring-transparent"}
            type={"button"} onClick={onClick} aria-expanded={open} aria-controls={controls}
        >
            <span className={"text-[18px] leading-[140%] md:text-[20px] font-medium"}>
                {question}
            </span>
            <span className={"shrink-0 size-8 rounded-full border border-[#F1EDFF]/24 bg-gradient-to-b from-transparent from-50% to-[#613FE7_136%] text-white"}>
                <span className={"flex size-full items-center justify-center"}>
                    <span aria-hidden="true" style={{ display: "flex", transform: open ? "rotate(45deg)" : undefined, transition: "transform 200ms" }}><Plus_symbol_bold /></span>
                </span>
            </span>
        </button>
    );
}
    

export default FaqButton

