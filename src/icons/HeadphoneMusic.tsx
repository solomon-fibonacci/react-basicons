import React from 'react'
import { IconConfig } from '../types'
const HeadphoneMusic: React.FC<IconConfig> = ({
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
                d="M2 14.5V21C2 21.5523 2.44772 22 3 22H6.71428C7.26657 22 7.71429 21.5523 7.71429 21V15.5C7.71429 14.9477 7.26657 14.5 6.71429 14.5H2ZM2 14.5V12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12V14.5M22 14.5V21C22 21.5523 21.5523 22 21 22H17.2857C16.7334 22 16.2857 21.5523 16.2857 21V15.5C16.2857 14.9477 16.7334 14.5 17.2857 14.5H22Z"
                stroke={`${color}`}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default HeadphoneMusic
