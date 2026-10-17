import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Expand_arrows_diagonal from './icons/Expand_arrows_diagonal.tsx'
import Dollar_sign_segmented_circle from './icons/Dollar_sign_segmented_circle.tsx'
import Shield_with_layered_squares from './icons/Shield_with_layered_squares.tsx'
import HeadingSection from './HeadingSection.tsx'
import FeatureDescription from './FeatureDescription.tsx'
import GradientButton from './GradientButton.tsx'
import FeatureLabel from './FeatureLabel.tsx'
import MacDownloadCard from './MacDownloadCard.tsx'


// Component

function FeaturesSection() {
    return (
        <section className={"container-xl relative z-4 -mt-10 flex flex-col px-3 lg:my-40 lg:gap-y-40"}>
            <FeatureBlock
                icon={Expand_arrows_diagonal}
                label="Swaps"
                headingId="1"
                description="Execute your crypto strategy and swap confidently between thousands of assets. Rates start as low as 0.5%"
                imageId="7"
                showDownloadCard={true}
                buttonTarget="button"
            />

            <FeatureBlock
                icon={Dollar_sign_segmented_circle}
                label="Purchase crypto"
                headingId="2"
                description="Easily buy and sell crypto using your credit or debit card, bank account, Apple Pay, or Google Pay. Your crypto is delivered straight to your wallet."
                imageId="8"
                showDownloadCard={false}
                buttonTarget="_blank"
            />

            <FeatureBlock
                icon={Shield_with_layered_squares}
                label="Stake and earn"
                headingId="3"
                description="Earn while you hold. Stake your crypto in a few taps to passively earn rewards."
                imageId="9"
                showDownloadCard={false}
                buttonTarget="_self"
            />
        </section>
    );
}
    

// Subcomponents

function FeatureBlock({
    icon,
    label,
    headingId,
    description,
    imageId,
    showDownloadCard,
    buttonTarget,
}: {
    icon: React.ComponentProps<typeof FeatureLabel>["icon"];
    label: string;
    headingId: string;
    description: string;
    imageId: string;
    showDownloadCard: boolean;
    buttonTarget: "button" | "_blank" | "_self";
}) {
    return (
        <div className={"flex flex-col-reverse pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-x-12 lg:pt-0"}>
            <div className={"w-full flex-col py-16 md:px-6 md:py-20 relative z-2 my-0 flex max-w-full lg:max-w-[460px] lg:flex-shrink-0 justify-start gap-y-4 lg:gap-y-8"}>
                <div className={"flex flex-col items-start text-left gap-y-4"}>
                    <div>
                        <FeatureLabel
                            icon={icon}
                            label={label}
                        />
                    </div>

                    <div className={"flex flex-col px-0 gap-y-4 items-start text-left"}>
                        <HeadingSection dataId={headingId} />

                        <FeatureDescription
                            content={description}
                        />
                    </div>
                </div>

                {headingId !== "2" && (showDownloadCard ? (
                    <div className={"relative max-w-[420px] mr-auto z-4"}>
                        <div>
                            <GradientButton
                                dataId={headingId}
                                as="a" href="/download" target="_self"
                            />
                        </div>

                        <div className={"flex flex-col"}>
                        </div>

                        <div className={"grid transition-all delay-75 duration-[400ms] ease-in-out max-h-96 overflow-hidden absolute left-1/2 -translate-x-1/2 pt-4 w-max top-14 max-h-none pointer-events-none opacity-0 grid-rows-[0fr]"}>
                            <MacDownloadCard />
                        </div>
                    </div>
                ) : buttonTarget === "_blank" ? (
                    <GradientButton
                        dataId={headingId}
                        as="a"
                        rel="noopener noreferrer"
                        target="_blank"
                    />
                ) : (
                    <GradientButton
                        dataId={headingId}
                        as="a"
                        target="_self"
                    />
                ))}
            </div>

            <FeatureIllustration
                imageId={imageId}
                showMobileDecoration={showDownloadCard}
            />
        </div>
    );
}

function FeatureIllustration({
    imageId,
    showMobileDecoration,
}: {
    imageId: string;
    showMobileDecoration: boolean;
}) {
    return (
        <div className={"relative w-full lg:max-w-[680px]"}>
            {showMobileDecoration && (
                <div className={"absolute left-1/2 top-1/2 z-0 lg:hidden h-full w-full xs:w-[70%] -translate-x-1/2 -translate-y-1/2 sf-hidden"}>
                </div>
            )}

            <div className={"pointer-events-none absolute left-1/2 top-1/2 z-0 w-[500px] xs:w-[110%] -translate-x-1/2 -translate-y-1/2 lg:top-[35%] lg:w-[130%] lg:max-w-none opacity-0 animate-delay-200 animate-duration-500"}>
                <picture className={"block w-full"}>
                    <Img id="6" />
                </picture>
            </div>

            <div className={"relative z-2 mx-auto w-full max-w-48 xs:max-w-[40%] lg:max-w-[540px] opacity-0 animate-duration-500"}>
                <picture className={"block w-full"}>
                    <Img id={imageId} />
                </picture>
            </div>
        </div>
    );
}
    

export default FeaturesSection


