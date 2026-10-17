import React, { createContext, useContext } from 'react'

import Hexagonal_cross_division_outline from './icons/Hexagonal_cross_division_outline.tsx'
import Laptop_and_smartphone_silhouette from './icons/Laptop_and_smartphone_silhouette.tsx'
import Shield_with_lock from './icons/Shield_with_lock.tsx'
import Xo_letters from './icons/Xo_letters.tsx'
import Solid_padlock_with_keyhole from './icons/Solid_padlock_with_keyhole.tsx'
import Hexagon_with_checkmark from './icons/Hexagon_with_checkmark.tsx'

export type SubItem = {
    title: string
    description: string
    href: string
    icon: React.ComponentType
    external?: boolean
}

/** Second-level flyout items for the Products menu buttons (keyed by MenuButton id). */
export const SUBMENUS: Record<string, { heading: string; items: SubItem[] }> = {
    '0': {
        heading: 'BUY AND SWAP CRYPTO',
        items: [
            { title: 'Mobile Wallet', description: 'Control your wealth anywhere', href: '/mobile', icon: Hexagonal_cross_division_outline },
            { title: 'Desktop Wallet', description: 'Swap and transfer digital assets', href: '/desktop', icon: Laptop_and_smartphone_silhouette },
        ],
    },
    '1': {
        heading: 'ENHANCE SECURITY',
        items: [
            { title: 'Ledger Hardware Wallet', description: 'Advanced security for Mobile', href: '/ledger-wallet', icon: Shield_with_lock },
            { title: 'Trezor Hardware Wallet', description: 'Advanced security for Desktop', href: '/trezor-wallet', icon: Hexagon_with_checkmark },
        ],
    },
    '2': {
        heading: 'XO SUITE',
        items: [
            { title: 'XO Ramp', description: 'On and off ramp crypto, easy and simple', href: 'https://www.xoramp.com', icon: Xo_letters, external: true },
            { title: 'XO Swap', description: 'Boost growth with a premium crypto swap engine', href: 'https://www.xoswap.com', icon: Xo_letters, external: true },
            { title: 'Passkeys Wallet & SDK', description: 'Reduce drop-off with one-click web3 onboarding', href: 'https://passkeys.foundation', icon: Solid_padlock_with_keyhole, external: true },
        ],
    },
}

type Ctx = { active: string | null; setActive: (id: string | null) => void }
export const SubmenuContext = createContext<Ctx>({ active: null, setActive: () => {} })
export const useSubmenu = () => useContext(SubmenuContext)
