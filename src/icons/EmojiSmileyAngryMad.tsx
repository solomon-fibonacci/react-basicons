
import React from 'react'
import { IconConfig } from '../types'
const EmojiSmileyAngryMad: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17C8 17 9 15 12 15C15 15 16 17 16 17M16 9.50014L14 10.5001M9.99999 10.5001L7.5 9.50001M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default EmojiSmileyAngryMad
