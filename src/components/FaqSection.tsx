import React, { useState } from 'react'
import type { JSX } from 'react/jsx-runtime'

import _Onepassword_logo from './icons/_Onepassword_logo.tsx'
import HeadingSection from './HeadingSection.tsx'
import FeatureLabel from './FeatureLabel.tsx'
import FaqButton from './FaqButton.tsx'
import FaqAnswer from './FaqAnswer.tsx'


// Component

function FaqSection() {
    return (
        <section
            id={"common-questions"}
            className={"container-xl relative z-2 overflow-hidden px-3"}
        >
            <div className={"mx-auto flex w-full max-w-full flex-col items-start lg:flex-row lg:gap-x-16"}>
                <div className={"max-w-full lg:w-1/2"}>
                    <div className={"flex flex-col items-start text-left gap-y-4"}>
                        <div>
                            <FeatureLabel
                                icon={_Onepassword_logo}
                                label="FAQs"
                            />
                        </div>
                        <div className={"flex flex-col px-0 gap-y-4 items-start text-left"}>
                            <HeadingSection dataId="4" />
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col items-end lg:w-1/2"}>
                    <FaqItem
                        question="How secure is Exodus?"
                        answerId="0"
                    />
                    <FaqItem
                        question="Which cryptocurrencies does Exodus support?"
                        answerId="1"
                    />
                    <FaqItem
                        question="Can I use Exodus on multiple devices?"
                        answerId="2"
                    />
                    <FaqItem
                        question="How can I back up my Exodus wallet?"
                        answerId="3"
                    />
                    <FaqItem
                        question="Does Exodus charge fees for transactions?"
                        answerId="4"
                    />
                    <FaqItem
                        question="Can I stake cryptocurrencies on Exodus?"
                        answerId="5"
                    />
                    <FaqItem
                        question="Is my information private with Exodus?"
                        answerId="7"
                    />
                    <FaqItem
                        question="Can I use Exodus with hardware wallets?"
                        answerId="6"
                    />
                </div>
            </div>
        </section>
    );
}
    

// Subcomponents

function FaqItem({
    question,
    answerId
}: {
    question: string;
    answerId: string;
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={"flex w-full flex-col text-left transition-all relative py-6 text-white after:absolute after:inset-x-0 after:bottom-0 after:z-[-1] after:h-px after:w-full after:bg-gradient-to-r after:from-transparent after:via-purple-200 after:to-transparent"}>
            <FaqButton question={question} open={open} onClick={() => setOpen(!open)} controls={`faq-answer-${answerId}`} />
            <div id={`faq-answer-${answerId}`} hidden={!open}>
                <FaqAnswer dataId={answerId} />
            </div>
        </div>
    );
}
    

export default FaqSection

