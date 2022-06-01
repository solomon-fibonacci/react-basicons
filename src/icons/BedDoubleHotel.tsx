
import React from 'react'
import { IconConfig } from '../types'
const BedDoubleHotel: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L10 9" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9L18 9" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V21M21 17H3M21 17V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V21" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V9" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default BedDoubleHotel
