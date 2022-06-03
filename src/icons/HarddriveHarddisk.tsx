
import React from 'react'
import { IconConfig } from '../types'
const HarddriveHarddisk: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.19048 15L6.50933 6.28801C6.80476 5.5125 7.54842 5 8.3783 5H15.6217C16.4516 5 17.1952 5.5125 17.4907 6.28801L20.8095 15M18.0161 16.0161L18 16M6.375 19H17.625C19.489 19 21 17.6569 21 16C21 14.3431 19.489 13 17.625 13H6.375C4.51104 13 3 14.3431 3 16C3 17.6569 4.51104 19 6.375 19Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default HarddriveHarddisk
