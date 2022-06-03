import React from 'react'
import { IconConfig } from '../types'
const Pin: React.FC<IconConfig> = ({
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
                d="M15.0538 16.8032L20.8584 6.74939C21.1499 6.2446 20.9769 5.59914 20.4721 5.30771L14.9882 2.14157C14.4834 1.85014 13.838 2.02309 13.5465 2.52787L7.74196 12.5817M15.0538 16.8032L11.3979 14.6925M15.0538 16.8032L17.7958 18.3863M7.74196 12.5817L5 10.9986M7.74196 12.5817L11.3979 14.6925M11.3979 14.6925L7.17638 22.0044"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Pin
