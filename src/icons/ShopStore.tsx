
import React from 'react'
import { IconConfig } from '../types'
const ShopStore: React.FC<IconConfig> = ({size=24, color='#000', weight=1.5}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.22222 6H19.7778L22 9.5V13H2V9.5L4.22222 6Z" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13H20V20C20 20.5523 19.5523 21 19 21H11C10.4477 21 10 20.5523 10 20V13Z" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13L4 21" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 2L5 2" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default ShopStore
