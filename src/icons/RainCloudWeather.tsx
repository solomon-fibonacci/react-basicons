import React from 'react'
import { IconConfig } from '../types'
const RainCloudWeather: React.FC<IconConfig> = ({
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
                d="M6.34141 6C7.16508 3.66962 9.38756 2 12 2C15.3137 2 18 4.68629 18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H7C4.23858 16 2 13.7614 2 11C2 8.46898 3.8806 6.37721 6.32069 6.04576"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 20L6 22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 20L11 22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 20L16 22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default RainCloudWeather
