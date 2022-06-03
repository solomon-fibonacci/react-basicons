import React from 'react'
import { IconConfig } from '../types'
const BikerCycle: React.FC<IconConfig> = ({
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
                d="M12 20L12 15L8.5 11.5L12.5 7.5L16 11L20.5 11"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.4142 3.58579C21.1953 4.36683 21.1953 5.63317 20.4142 6.41421C19.6332 7.19526 18.3668 7.19526 17.5858 6.41421C16.8047 5.63317 16.8047 4.36683 17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579Z"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 18C22 19.6569 20.6569 21 19 21C17.3431 21 16 19.6569 16 18C16 16.3431 17.3431 15 19 15C20.6569 15 22 16.3431 22 18Z"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.65685 15 8 16.3431 8 18Z"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BikerCycle
