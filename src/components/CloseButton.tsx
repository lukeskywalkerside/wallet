import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Close_x_mark_rounded_ends from './icons/Close_x_mark_rounded_ends.tsx'


// Component
function CloseButton() {
    return <button className={"shrink-0 p-0"} type={"button"}>
    	<Close_x_mark_rounded_ends />
    </button>
}


export default CloseButton
