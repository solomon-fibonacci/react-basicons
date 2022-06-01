import React from 'react'
import { IconConfig } from '../types'
const Cone: React.FC<IconConfig> = ({
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
                d="M3 21H21M7 15H17M9 9H15M19 21L13.3162 3.94868C13.1274 3.38214 12.5972 3 12 3C11.4028 3 10.8726 3.38214 10.6838 3.94868L5 21"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Cone
