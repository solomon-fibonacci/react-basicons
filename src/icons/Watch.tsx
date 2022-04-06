
import React from 'react'
import { IconConfig } from '../types'
const Watch: React.FC<IconConfig> = ({size=24, color='#000', weight=1.5}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2V7" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17V22" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 2V7" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V22" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 13V11" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default Watch
