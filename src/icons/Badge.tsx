
import React from 'react'
import { IconConfig } from '../types'
const Badge: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 8.5C18.5 12.0899 15.5899 15 12 15C8.41015 15 5.5 12.0899 5.5 8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 14V22L12.3182 19L15.5 22V14" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default Badge
