import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Hexagonal_cross_division from './icons/Hexagonal_cross_division.tsx'
import Hexagonal_cross_division_outline from './icons/Hexagonal_cross_division_outline.tsx'
import Hexagon_with_plus from './icons/Hexagon_with_plus.tsx'
import Lifebuoy from './icons/Lifebuoy.tsx'
import Hexagon_with_checkmark from './icons/Hexagon_with_checkmark.tsx'
import Graduation_cap from './icons/Graduation_cap.tsx'
import Play_button from './icons/Play_button.tsx'
import Paper_plane from './icons/Paper_plane.tsx'
import User_profile from './icons/User_profile.tsx'
import Briefcase from './icons/Briefcase.tsx'
import Chat_bubble from './icons/Chat_bubble.tsx'
import Basic_shapes_circle_square_plus_triangle from './icons/Basic_shapes_circle_square_plus_triangle.tsx'
import Solid_padlock_with_keyhole from './icons/Solid_padlock_with_keyhole.tsx'
import Large_filled_circle from './icons/Large_filled_circle.tsx'
import MenuLink from './MenuLink.tsx'


const MENU_DESTINATIONS: Record<string, string> = {
    '0': '/pay', '1': '/about', '2': '/staking-crypto',
    '3': '/contact-support', '4': '/assets', '5': '/support',
    '6': 'https://www.youtube.com/c/exodus', '7': '/newsletter',
    '8': '/investors', '9': '/careers', '10': '/contact',
    '11': '/brand', '12': '/security', '13': '/trademarks',
};
        type MenuLinkData = {
            title: string;
            description: string;
            icon: React.ComponentType;
            target: "_self" | "_blank";
            rel?: string;
        };
    
// Component

        function MenuLink1({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                title,
                description,
                icon,
                target,
                rel
            }: MenuLinkData = getMenuLinkData(dataId);

            return (
                <a href={MENU_DESTINATIONS[dataId]}
                    {...(rel !== undefined ? { rel } : {})}
                    target={target}
                    className="flex shrink-0 items-center gap-x-3 h-20 max-h-20 min-h-20 w-full overflow-hidden px-4 py-0 md:gap-x-4 md:rounded-lg md:transition-colors md:hover:bg-purple-100 md:focus:bg-purple-100/64 no-underline focus:outline-none focus:ring-transparent"
                    role="menuitem"
                >
                    <MenuItemContent
                        icon={icon}
                        title={title}
                        description={description}
                    />
                </a>
            );
        }
    

// Subcomponents

        export function MenuItemContent({
            icon: Icon,
            title,
            description
        }: {
            icon: React.ComponentType;
            title: string;
            description: string;
        }) {
            return (
                <>
                    <span className="flex size-6 shrink-0 items-center justify-center text-[#8161FF] md:size-12 md:rounded-full md:bg-purple-100">
                        <Icon />
                    </span>
                    <span className="text-[14px] font-normal leading-[140%] flex flex-1 flex-col justify-center gap-1 min-h-0 overflow-hidden text-left">
                        <span className="truncate">
                            {title}
                        </span>
                        <span className="opacity-64 text-[12px] font-normal tracking-[0.01em] line-clamp-2 leading-[120%]">
                            {description}
                        </span>
                    </span>
                </>
            );
        }
    

function getMenuLinkData(id): MenuLinkData  {
    switch (String(id)) {
    case "0":
        return ({
                    "title": "Exodus Pay",
                    "description": "Send payments, spend and earn rewards worldwide",
                    "icon": Hexagonal_cross_division_outline,
                    "target": "_self",
                    "rel": undefined
                });
    case "1":
        return ({
                    "title": "About Us",
                    "description": "Learn more about Exodus",
                    "icon": Hexagonal_cross_division_outline,
                    "target": "_self",
                    "rel": undefined
                });
    case "2":
        return ({
                    "title": "Stake and earn",
                    "description": "Stake multiple assets in one place",
                    "icon": Hexagon_with_plus,
                    "target": "_self",
                    "rel": undefined
                });
    case "3":
        return ({
                    "title": "24/7 Customer Support",
                    "description": "Support engineers are standing by to help",
                    "icon": Lifebuoy,
                    "target": "_self",
                    "rel": undefined
                });
    case "4":
        return ({
                    "title": "Crypto Assets",
                    "description": "Info on supported assets, crypto rewards, and more",
                    "icon": Hexagon_with_checkmark,
                    "target": "_self",
                    "rel": undefined
                });
    case "5":
        return ({
                    "title": "Knowledge Base",
                    "description": "Common questions and blockchain education",
                    "icon": Graduation_cap,
                    "target": "_self",
                    "rel": undefined
                });
    case "6":
        return ({
                  "title": "YouTube",
                  "description": "Crypto education and tutorials",
                  "icon": Play_button,
                  "target": "_blank",
                  "rel": "noopener noreferrer"
                });
    case "7":
        return ({
                  "title": "Newsletter",
                  "description": "Sign-up for product updates and crypto highlights",
                  "icon": Paper_plane,
                  "target": "_self",
                  "rel": undefined
                });
    case "8":
        return ({
                  "title": "Investors",
                  "description": "Read about news, media, events and more",
                  "icon": User_profile,
                  "target": "_self",
                  "rel": undefined
                });
    case "9":
        return ({
                    "title": "Careers",
                    "description": "See our open positions",
                    "icon": Briefcase,
                    "target": "_self",
                    "rel": undefined
                });
    case "10":
        return ({
                    "title": "Contact Us",
                    "description": "Get in touch",
                    "icon": Chat_bubble,
                    "target": "_self",
                    "rel": undefined
                });
    case "11":
        return ({
                    "title": "Brand Guidelines",
                    "description": "Exodus media kit",
                    "icon": Basic_shapes_circle_square_plus_triangle,
                    "target": "_self",
                    "rel": undefined
                });
    case "12":
        return ({
                    "title": "Security",
                    "description": "How we keep your crypto safe",
                    "icon": Solid_padlock_with_keyhole,
                    "target": "_self",
                    "rel": undefined
                });
    case "13":
        return ({
                    "title": "Intellectual Property",
                    "description": "Exodus Trademarks",
                    "icon": Large_filled_circle,
                    "target": "_self",
                    "rel": undefined
                });
    default:
        return ({
                    "title": "Exodus Pay",
                    "description": "Send payments, spend and earn rewards worldwide",
                    "icon": Hexagonal_cross_division_outline,
                    "target": "_self",
                    "rel": undefined
                });
    }
}


export default MenuLink1


