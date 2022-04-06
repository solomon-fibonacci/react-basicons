import React from 'react'
import { IconConfig } from '../types'
const ShoppingAltBag: React.FC<IconConfig> = ({
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
                d="M3 7H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 7L4.96327 3.50974C5.14039 3.19486 5.47357 3 5.83485 3H18.1652C18.5264 3 18.8596 3.19486 19.0367 3.50974L21 7"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ShoppingAltBag
