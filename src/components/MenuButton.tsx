import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chevron_right from './icons/Chevron_right.tsx'
import Laptop_and_smartphone_silhouette from './icons/Laptop_and_smartphone_silhouette.tsx'
import Chevron_right3 from './icons/Chevron_right3.tsx'
import Shield_with_lock from './icons/Shield_with_lock.tsx'
import Xo_letters from './icons/Xo_letters.tsx'
import { MenuItemContent } from './MenuLink1.tsx'
import { useSubmenu } from './SubmenuContext.tsx'


        type MenuButtonData = {
            title: string;
            description: string;
            icon: React.ComponentType;
        };
    
// Component

        function MenuButton({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                title,
                description,
                icon
            }: MenuButtonData = getMenuButtonData(dataId);
            const { active, setActive } = useSubmenu();

            return (
                <button
                    type="button"
                    className="flex shrink-0 items-center gap-x-3 h-20 max-h-20 min-h-20 w-full overflow-hidden px-4 py-0 md:gap-x-4 cursor-pointer md:rounded-lg md:transition-colors md:hover:bg-purple-100 focus:outline-none focus:ring-transparent"
                    role="menuitem"
                    aria-haspopup="menu"
                    aria-expanded={active === dataId}
                    style={active === dataId ? { backgroundColor: 'rgba(129,97,255,0.08)' } : undefined}
                    onMouseEnter={() => setActive(dataId)}
                    onFocus={() => setActive(dataId)}
                    onClick={() => setActive(active === dataId ? null : dataId)}
                >
                    <MenuItemContent
                        icon={icon}
                        title={title}
                        description={description}
                    />
                    <Chevron_right3 />
                </button>
            );
        }
    

function getMenuButtonData(id): MenuButtonData  {
    switch (String(id)) {
    case "0":
        return ({
                    "title": "Buy and swap crypto",
                    "description": "Manage thousands of digital assets",
                    "icon": Laptop_and_smartphone_silhouette
                });
    case "1":
        return ({
                    "title": "Enhance security",
                    "description": "Secure your assets with Trezor and Ledger",
                    "icon": Shield_with_lock
                });
    case "2":
        return ({
                    "title": "XO Suite",
                    "description": "Scale up with B2B self-custody solutions",
                    "icon": Xo_letters
                });
    default:
        return ({
                    "title": "Buy and swap crypto",
                    "description": "Manage thousands of digital assets",
                    "icon": Laptop_and_smartphone_silhouette
                });
    }
}


export default MenuButton
