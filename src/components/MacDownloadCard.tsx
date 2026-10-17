import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Rounded_mountain_peak from './icons/Rounded_mountain_peak.tsx'
import MacDownloadList from './MacDownloadList.tsx'


// Component
function MacDownloadCard() {
    return <div className={"flex size-full flex-col items-center overflow-hidden rounded-lg bg-white text-black shadow-md"}>
    	<Rounded_mountain_peak />
    	
            <MacDownloadList />
        
    </div>
}


export default MacDownloadCard
