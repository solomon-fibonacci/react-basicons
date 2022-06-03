import React from 'react'
import { IconConfig } from '../types'
const EmojiSmileyHappyFace: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg
            width={`${size || 24}`}
            height={`${size || 24}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M8 15C8 15 8.12514 15.2503 8.4197 15.5738C8.9578 16.1647 10.0613 17 12 17C13.9387 17 15.0422 16.1647 15.5803 15.5738C15.8749 15.2503 16 15 16 15M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EmojiSmileyHappyFace
