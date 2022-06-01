
import React from 'react'
import { IconConfig } from '../types'
const ExpandArrows: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L12 22M12 22L9 19M12 22V15.5M15 5L12 2M12 2L9 5M12 2V8.5M5 9L2 12M2 12L5 15M2 12H8.5M19 9L22 12M22 12L19 15M22 12H15.5" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default ExpandArrows
