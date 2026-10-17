import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Security_key_in_focus from './icons/Security_key_in_focus.tsx'


// Component
function SecurityKeyWrapper() {
    return <div className={"absolute inset-y-0 left-56 z-2 flex items-center justify-end md:relative md:left-auto"}>
    	<Security_key_in_focus />
    </div>
}


export default SecurityKeyWrapper
