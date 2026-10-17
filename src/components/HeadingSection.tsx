import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type HeadingSectionData = {
            content: React.ReactNode;
        };
    
// Component

        function HeadingSection({
            dataId
        }: {
            dataId: string;
        }) {
            const { content }: HeadingSectionData = getHeadingSectionData(dataId);

            return (
                <div>
                    <h2 className={"text-[32px] font-bold leading-[110%] -tracking-[0.01em] md:text-[48px] font-eudoxus"}>
                        {content}
                    </h2>
                </div>
            );
        }
    


        function getHeadingSectionData(id: string | number): HeadingSectionData {
            const headingData: Record<string, HeadingSectionData> = {
                "0": {
                    content: (
                        <>
                            Flip to Pay.
                            <br></br>
                            <span className={"bg-gradient-to-r from-white from-30% via-green-pay via-85% to-green-pay-200 to-100% bg-clip-text text-transparent"}>
                                Your money is
                            </span>
                            <br></br>
                            <span className={"bg-gradient-to-r from-white from-30% via-green-pay via-85% to-green-pay-200 to-100% bg-clip-text text-transparent"}>
                                truly yours.
                            </span>
                        </>
                    )
                },

                "1": {
                    content: (
                        <>
                            {`Seamless swaps, `}
                            <br></br>
                            smooth performance
                        </>
                    )
                },

                "2": {
                    content: (
                        <>
                            {`Buy and sell `}
                            <br className={"xs:hidden sf-hidden"}></br>
                            {` directly in your wallet`}
                        </>
                    )
                },

                "3": {
                    content: (
                        <>
                            Boost your crypto holdings
                        </>
                    )
                },

                "4": {
                    content: (
                        <>
                            Common questions
                        </>
                    )
                },

                "5": {
                    content: (
                        <>
                            {`1,000,000+ assets `}
                            <br className={"block md:hidden sf-hidden"}></br>
                            {` supported`}
                        </>
                    )
                },

                "6": {
                    content: (
                        <>
                            A trusted
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` companion`}
                            <br className={"hidden xs:block"}></br>
                            {` on your`}
                            <br className={"block xs:hidden sf-hidden"}></br>
                            {` crypto journey`}
                        </>
                    )
                }
            };

            return headingData[String(id)] ?? headingData["0"];
        }
    

export default HeadingSection
