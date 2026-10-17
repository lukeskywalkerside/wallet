import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MenuLink from './MenuLink.tsx'


        type FooterDropdownData = {
            id: string;
            items: {
                label: string;
                external?: boolean;
            }[];
        };
    
// Component

        function FooterDropdown({
            dataId
        }: {
            dataId: string;
        }) {
            const { id, items }: FooterDropdownData =
                getFooterDropdownData(dataId);

            return (
                <ul
                    className={"flex flex-col gap-y-4 overflow-hidden lg:mt-4 lg:gap-y-2"}
                    id={id}
                    role={"menu"}
                >
                    {items.map((item, index) => (
                        <FooterDropdownItem
                            key={index}
                            label={item.label}
                            external={item.external}
                        />
                    ))}
                </ul>
            );
        }
    

// Subcomponents

        function FooterDropdownItem({
            label,
            external
        }: {
            label: string;
            external?: boolean;
        }) {
            return (
                <li role={"none"}>
                    <MenuLink
                        label={label}
                        {...(external ? { external: true } : {})}
                    />
                </li>
            );
        }
    


        function getFooterDropdownData(
            id: string | number
        ): FooterDropdownData {
            const data: Record<string, FooterDropdownData> = {
                "0": {
                    id: "footer-dropdown-0",
                    items: [
                        {
                            label: "Exodus Pay"
                        },
                        {
                            label: "Mobile Wallet"
                        },
                        {
                            label: "Desktop Wallet"
                        },
                        {
                            label: "Ledger Hardware Wallet"
                        },
                        {
                            label: "Trezor Hardware Wallet"
                        },
                        {
                            label: "Stake and earn"
                        },
                    ]
                },
                "1": {
                    id: "footer-dropdown-1",
                    items: [
                        {
                            label: "24/7 Customer Support"
                        },
                        {
                            label: "Crypto Assets"
                        },
                        {
                            label: "Legal Inquiries"
                        }
                    ]
                },
                "2": {
                    id: "footer-dropdown-2",
                    items: [
                        {
                            label: "YouTube",
                            external: true
                        },
                        {
                            label: "Newsletter"
                        }
                    ]
                },
                "3": {
                    id: "footer-dropdown-3",
                    items: [
                        {
                            label: "About Us"
                        },
                        {
                            label: "Careers"
                        },
                        {
                            label: "Contact Us"
                        },
                        {
                            label: "Security"
                        },
                    ]
                }
            };

            const stringId = String(id);

            return data[stringId] ?? {
                id: `footer-dropdown-${stringId}`,
                items: []
            };
        }
    

export default FooterDropdown



