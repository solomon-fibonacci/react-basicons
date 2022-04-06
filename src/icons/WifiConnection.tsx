import React from 'react'
import { IconConfig } from '../types'
const WifiConnection: React.FC<IconConfig> = ({
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
                d="M2 8C4.88494 6.10123 8.31702 5 12 5C15.683 5 19.1151 6.10123 22 8"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.99995 11.8774C7.05917 10.6054 9.44994 9.87744 12 9.87744C14.55 9.87744 16.9407 10.6054 19 11.8774"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.07355 15.4549C10.0119 15.0016 11.0216 14.7549 12.0735 14.7549C13.1255 14.7549 14.1352 15.0016 15.0735 15.4549"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.9181 19.1465L11.902 19.1304"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default WifiConnection
