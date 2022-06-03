
import React from 'react'
import { IconConfig } from '../types'
const SnowflakesWeatherCold: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12 22M9.5 3.5L12 6L14.5 3.5M9.5 20.5L12 18L14.5 20.5M3.33975 7L20.6603 17M3.38879 9.91506L6.80385 9L5.88879 5.58494M18.1112 18.4151L17.1962 15L20.6112 14.0849M20.75 6.83494L3.4295 16.8349M20.701 9.75L17.2859 8.83494L18.201 5.41987M5.97854 18.25L6.8936 14.8349L3.47854 13.9199" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default SnowflakesWeatherCold
