import React from 'react'
import { IconConfig } from '../types'
const Car: React.FC<IconConfig> = ({
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
                d="M18 17H21C21.5523 17 22 16.5523 22 16V12.6311C22 12.2188 21.747 11.8488 21.3629 11.6992L17 10L14 5H6L4 10H3C2.44772 10 2 10.4477 2 11V16C2 16.5523 2.44772 17 3 17H6M18 17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17M18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17M6 17C6 18.1046 6.89543 19 8 19C9.10457 19 10 18.1046 10 17M6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17M10 17H14"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Car
