import React, { useEffect, useRef, useState } from 'react'
import ProductsMenu from './ProductsMenu.tsx'
import type { JSX } from 'react/jsx-runtime'

import Rounded_mountain_peak from './icons/Rounded_mountain_peak.tsx'
import NavigationDropdownButton from './NavigationDropdownButton.tsx'
import ExpandablePanel from './ExpandablePanel.tsx'
import MenuList from './MenuList.tsx'
import { SubmenuContext } from './SubmenuContext.tsx'


// Component

        function HeaderNavigation() {
            return (
                <nav
                    className={
                        "hidden flex-1 items-center justify-center gap-x-0.5 md:flex"
                    }
                    role={"navigation"}
                >
                    <ProductsMenu />

                    <NavigationDropdownSection
                        label="Support"
                        dropdownId="header-dropdown-1"
                        menuDataId="1"
                    />

                    <NavigationDropdownSection
                        label="Learn"
                        dropdownId="header-dropdown-2"
                        menuDataId="2"
                    />

                    <NavigationDropdownSection
                        label="Company"
                        dropdownId="header-dropdown-3"
                        menuDataId="3"
                    />
                </nav>
            );
        }
    

// Subcomponents

        function NavigationDropdownSection({
            label,
            dropdownId,
            menuDataId,
            isProducts = false,
        }: {
            label: string;
            dropdownId: string;
            menuDataId: string;
            isProducts?: boolean;
        }) {
            const dropdownClassName = isProducts
                ? "grid transition-all delay-75 duration-[400ms] ease-in-out absolute left-1/2 top-10 -translate-x-1/2 pt-4 max-h-0 w-max max-w-sm md:max-h-[calc(100dvh-80px)] overflow-visible pointer-events-none opacity-0 grid-rows-[0fr]"
                : "grid transition-all delay-75 duration-[400ms] ease-in-out overflow-hidden absolute left-1/2 top-10 -translate-x-1/2 pt-4 max-h-0 w-max max-w-sm md:max-h-[calc(100dvh-80px)] pointer-events-none opacity-0 grid-rows-[0fr]";

            const menuClassName = isProducts
                ? "flex size-full flex-col rounded-lg bg-white text-black w-full items-stretch overflow-visible shadow-none"
                : "flex size-full flex-col items-center overflow-hidden rounded-lg bg-white text-black shadow-md";

            const [active, setActive] = useState<string | null>(null);
            const [open, setOpen] = useState(false);
            const root = useRef<HTMLDivElement>(null);
            useEffect(() => {
                if (!open) return;
                const outside = (event: PointerEvent) => {
                    if (!root.current?.contains(event.target as Node)) setOpen(false);
                };
                const escape = (event: KeyboardEvent) => {
                    if (event.key === 'Escape') {
                        setOpen(false);
                        root.current?.querySelector('button')?.focus();
                    }
                };
                document.addEventListener('pointerdown', outside);
                document.addEventListener('keydown', escape);
                return () => {
                    document.removeEventListener('pointerdown', outside);
                    document.removeEventListener('keydown', escape);
                };
            }, [open]);

            return (
                <SubmenuContext.Provider value={{ active, setActive }}>
                <div
                    className={"relative flex max-w-max flex-col"}
                    ref={root}
                    role={"group"}
                    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}
                    onMouseLeave={() => setActive(null)}
                >
                    <div>
                        <NavigationDropdownButton label={label} open={open} controls={dropdownId} onClick={() => setOpen(!open)} />
                    </div>

                                        <div className={dropdownClassName} style={{
                        display: open ? 'grid' : 'none',
                        opacity: open ? 1 : 0,
                        pointerEvents: open ? 'auto' : 'none',
                        maxHeight: 'calc(100dvh - 110px)',
                        gridTemplateRows: '1fr',
                        width: 360,
                        overflow: 'visible',
                    }}>
                        <div
                            id={dropdownId}
                            className={menuClassName}
                            role={"menu"}
                        >
                            <Rounded_mountain_peak />

                            <div
                                className={
                                    "relative flex min-h-0 w-full max-w-full flex-1 flex-col"
                                }
                            >
                                <div
                                    className={
                                        "relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col rounded-lg bg-white"
                                    }
                                >
                                    <MenuList dataId={menuDataId} />
                                </div>

                                <ExpandablePanel />
                            </div>
                        </div>
                    </div>
                </div>
                </SubmenuContext.Provider>
            );
        }
    

export default HeaderNavigation


