import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { SUBMENUS, useSubmenu } from './SubmenuContext.tsx'
import { MenuItemContent } from './MenuLink1.tsx'

// Component
function ExpandablePanel() {
    const { active } = useSubmenu()
    const data = active ? SUBMENUS[active] : undefined

    return <div
        className={"absolute top-0 h-full overflow-hidden border-black/10 bg-white transition-[width,opacity] duration-300 ease-out left-full rounded-r-lg border-l"}
        style={{ width: data ? 340 : 0, opacity: data ? 1 : 0, pointerEvents: data ? 'auto' : 'none' }}
        role={"menu"}
        aria-hidden={!data}
    >
        {data && (
            <div style={{ width: 340 }} className={"px-2 py-1.5"}>
                <div className={"w-full px-4 py-2 md:pt-4"}>
                    <span className={"text-[12px] leading-[160%] font-medium uppercase tracking-[0.08em] opacity-40"}>{data.heading}</span>
                </div>
                <ul className={"w-full"} role={"none"}>
                    {data.items.map((item) => (
                        <li key={item.title} className={"w-full"} role={"none"}>
                            <a
                                href={item.href}
                                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : { target: '_self' })}
                                role={"menuitem"}
                                className={"flex shrink-0 items-center gap-x-3 h-20 max-h-20 min-h-20 w-full overflow-hidden px-4 py-0 md:gap-x-4 md:rounded-lg md:transition-colors md:hover:bg-purple-100 md:focus:bg-purple-100/64 no-underline focus:outline-none focus:ring-transparent"}
                            >
                                <MenuItemContent icon={item.icon} title={item.title} description={item.description} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
}


export default ExpandablePanel
