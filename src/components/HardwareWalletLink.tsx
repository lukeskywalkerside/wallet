import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Trezor_hardware_wallet from './icons/Trezor_hardware_wallet.tsx'
import Ledger_hardware_wallet from './icons/Ledger_hardware_wallet.tsx'


    
// Component

        function HardwareWalletLink({
            wallet
        }: {
            wallet: "trezor" | "ledger";
        }) {
            return (
                <a href={wallet === "trezor" ? "/trezor-wallet" : "/ledger-wallet"} target={"_self"}>
                    {wallet === "trezor" ? (
                        <Trezor_hardware_wallet />
                    ) : (
                        <Ledger_hardware_wallet />
                    )}
                </a>
            );
        }
    

export default HardwareWalletLink
