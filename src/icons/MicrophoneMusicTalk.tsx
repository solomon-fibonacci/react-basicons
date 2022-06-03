import React from 'react'
import { IconConfig } from '../types'
const MicrophoneMusicTalk: React.FC<IconConfig> = ({
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
                d="M12 17C8.13401 17 5 13.866 5 10M12 17C15.866 17 19 13.866 19 10M12 17V21M15 22H9M12 13C10.3431 13 9 11.5225 9 9.7V5.3C9 3.47746 10.3431 2 12 2C13.6569 2 15 3.47746 15 5.3V9.7C15 11.5225 13.6569 13 12 13Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MicrophoneMusicTalk
