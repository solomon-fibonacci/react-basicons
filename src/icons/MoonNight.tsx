import React from 'react'
import { IconConfig } from '../types'
const MoonNight: React.FC<IconConfig> = ({
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
                d="M9.3812 2.04327C7.76937 2.50154 6.2485 3.36519 4.97948 4.63421C1.00684 8.60687 1.00684 15.0478 4.97948 19.0205C8.95213 22.9932 15.3931 22.9932 19.3657 19.0205C20.6429 17.7433 21.5095 16.211 21.9654 14.5876M9.5384 2C8.6321 5.39377 9.51018 9.16492 12.1726 11.8274C14.8351 14.4899 18.6063 15.368 22 14.4617"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MoonNight
