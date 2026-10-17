import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MenuLink1 from './MenuLink1.tsx'
import MenuButton from './MenuButton.tsx'
import MenuLink from './MenuLink.tsx'
import { useSubmenu } from './SubmenuContext.tsx'


        type MenuListData = {
            items: Array<
                | {
                    type: "link";
                    dataId: string;
                }
                | {
                    type: "button";
                    dataId: string;
                }
                | {
                    type: "header";
                    text: string;
                    className: string;
                }
            >;
        };
    
// Component

        function MenuList({
            dataId
        }: {
            dataId: string;
        }) {
            const { items }: MenuListData = getMenuListData(dataId);

            return (
                <ul
                    className={
                        "max-h-full w-full flex-1 overflow-y-scroll px-2 py-1.5 scrollbar-hide"
                    }
                    role={"none"}
                >
                    {items.map((item, index) => {
                        if (item.type === "header") {
                            return (
                                <MenuSectionHeader
                                    key={index}
                                    text={item.text}
                                    className={item.className}
                                />
                            );
                        }

                        return (
                            <MenuListItem
                                key={index}
                                type={item.type}
                                dataId={item.dataId}
                            />
                        );
                    })}
                </ul>
            );
        }
    

// Subcomponents

        function MenuListItem({
            type,
            dataId
        }: {
            type: "link" | "button";
            dataId: string;
        }) {
            const { setActive } = useSubmenu();
            return (
                <li className={"w-full"} role={"none"} onMouseEnter={type === "link" ? () => setActive(null) : undefined}>
                    {type === "link" ? (
                        <MenuLink1 dataId={dataId} />
                    ) : (
                        <MenuButton dataId={dataId} />
                    )}
                </li>
            );
        }

        function MenuSectionHeader({
            text,
            className
        }: {
            text: string;
            className: string;
        }) {
            return (
                <li className={className} role={"none"}>
                    <span
                        className={
                            "text-[12px] leading-[160%] font-medium uppercase tracking-[0.08em] opacity-40"
                        }
                    >
                        {text}
                    </span>
                </li>
            );
        }
    


        function getMenuListData(id: string | number): MenuListData {
            const menuData: Record<string, MenuListData> = {
                "0": {
                    items: [
                        {
                            type: "header",
                            text: "CONTROL YOUR WEALTH",
                            className: "w-full px-4 py-2 md:pt-4"
                        },
                        {
                            type: "link",
                            dataId: "0"
                        },
                        {
                            type: "button",
                            dataId: "0"
                        },
                        {
                            type: "button",
                            dataId: "1"
                        },
                        {
                            type: "link",
                            dataId: "2"
                        },
                        {
                            type: "header",
                            text: "ENTERPRISE",
                            className: "w-full px-4 pb-2 pt-3 md:pt-6"
                        },
                        {
                            type: "button",
                            dataId: "2"
                        }
                    ]
                },

                "1": {
                    items: [
                        { type: "link", dataId: "3" },
                        { type: "link", dataId: "4" }
                    ]
                },

                "2": {
                    items: [
                        { type: "link", dataId: "6" },
                        { type: "link", dataId: "7" }
                    ]
                },

                "3": {
                    items: [
                        {
                            type: "link",
                            dataId: "1"
                        },
                        { type: "link", dataId: "9" },
                        { type: "link", dataId: "10" },
                        { type: "link", dataId: "12" },
                    ]
                }
            };

            return menuData[String(id)] ?? { items: [] };
        }
    

export default MenuList




