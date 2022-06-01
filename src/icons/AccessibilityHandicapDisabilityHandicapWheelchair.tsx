
import React from 'react'
import { IconConfig } from '../types'
const AccessibilityHandicapDisabilityHandicapWheelchair: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21H17V16C17 15.4477 16.5523 15 16 15H12.5C11.6716 15 11 14.3284 11 13.5V8L14.5 11.5M14 18.0005C13.0878 19.2147 11.6356 20 10 20C7.23858 20 5 17.7614 5 15C5 12.9497 6.2341 11.1876 8 10.416M12 4C12 4.55228 11.5523 5 11 5C10.4477 5 10 4.55228 10 4C10 3.44772 10.4477 3 11 3C11.5523 3 12 3.44772 12 4Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default AccessibilityHandicapDisabilityHandicapWheelchair
