
import React from 'react'
import { IconConfig } from '../types'
const RocketLaunch: React.FC<IconConfig> = ({size=24, color='#000', weight=1.5}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11H2L6 7L13 7L15 5.00002C16.1252 3.8748 17.4087 3.00002 19 3.00002L21 3L21 5.00002C21 6.50001 20 8.00001 19 9.00001L17 11L17 18L13 22V16.5" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9497 12L7 16.9497" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default RocketLaunch
