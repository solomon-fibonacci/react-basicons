import React from 'react'
import { IconConfig } from '../types'
const PlanetSaturnSpace: React.FC<IconConfig> = ({
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
                d="M18.1377 6.78518C20.4309 5.98947 22.0586 5.81342 22.4264 6.45046C23.1167 7.64619 19.1068 11.2538 13.4699 14.5082C7.83303 17.7627 2.70379 19.4316 2.01344 18.2359C1.64686 17.601 2.60555 16.286 4.42938 14.705M12 20C7.58173 20 4.00001 16.4183 4.00001 12C4.00001 7.58172 7.58173 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default PlanetSaturnSpace
