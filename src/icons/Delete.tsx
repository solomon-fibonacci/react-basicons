
import React from 'react'
import { IconConfig } from '../types'
const Delete: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9L18 15M18 9L12 15M8.36364 5L2 12L8.36364 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H8.36364Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default Delete
