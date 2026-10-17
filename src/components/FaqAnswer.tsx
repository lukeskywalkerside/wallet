import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type FaqAnswerData = {
            text: string;
            showPrivacyLink?: boolean;
        };
    
// Component

        function FaqAnswer({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                text,
                showPrivacyLink
            }: FaqAnswerData = getFaqAnswerData(dataId);

            return (
                <div className={"overflow-hidden"}>
                    <div className={"opacity-64 text-[16px] font-normal leading-[140%] md:text-[18px] block pt-3 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:pl-3 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:pl-3"}>
                        {text}
                        {showPrivacyLink && (
                            <>
                                <a href="/privacy"
                                    className={"underline"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    Privacy Policy
                                </a>
                                .
                            </>
                        )}
                    </div>
                </div>
            );
        }
    


        function getFaqAnswerData(id: string | number): FaqAnswerData {
            const data: Record<string, FaqAnswerData> = {
                "0": {
                    text: "Exodus prioritizes security with robust encryption and ensures that your private keys are stored securely on your device. You maintain full control over your assets at all times."
                },
                "1": {
                    text: "Exodus supports a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and many others. The wallet regularly updates to include new digital assets."
                },
                "2": {
                    text: "Yes, Exodus is available on desktop (Windows, macOS, Linux) and mobile (iOS, Android). Your wallet syncs across devices for convenience."
                },
                "3": {
                    text: "You can back up your Exodus wallet using a recovery phrase. This phrase allows you to restore your wallet on any compatible device if necessary. It's crucial to store this phrase securely."
                },
                "4": {
                    text: "Exodus itself does not charge transaction fees. However, fees may apply on the blockchain network for processing transactions. You can adjust fee settings within the wallet for faster or cheaper transactions."
                },
                "5": {
                    text: "Yes, Exodus supports staking for certain cryptocurrencies. You can earn rewards by participating in blockchain networks that offer staking opportunities directly through the wallet interface."
                },
                "6": {
                    text: "Yes, Exodus supports integration with hardware wallets like Trezor. This provides an additional layer of security for managing your digital assets."
                },
                "7": {
                    text: "Yes, your information is private when using Exodus. We don’t require personal data to use the wallet, and we aim to collect as little as possible. For full details, read our ",
                    showPrivacyLink: true
                }
            };

            return data[String(id)] ?? {
                text: ""
            };
        }
    

export default FaqAnswer

