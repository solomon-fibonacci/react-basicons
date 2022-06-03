import React from 'react'
import { IconConfig } from '../types'
const MagicWand: React.FC<IconConfig> = ({
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
                d="M18.5 12H22M7.5 7.5L5 5M16.5 7.5L19 5M7.5 16.5L5 19M2 12H5.5M12 2V5M12 18.5V22M22.439 21.1155L13.8527 12.5292L11.1253 11.216L12.4385 13.9434L21.0248 22.5297C21.4153 22.9203 22.0485 22.9203 22.439 22.5297C22.8295 22.1392 22.8295 21.506 22.439 21.1155Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MagicWand
