
import React from 'react'
import { IconConfig } from '../types'
const UmbrellaInsurance: React.FC<IconConfig> = ({size=24, color='#000', weight=1.5}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 3C17.1853 3 21.4982 6.94668 21.9999 12C21.3942 11.8436 20.6267 11.8417 19.9013 11.9104C17.9748 12.0926 16.369 13.1073 16.1075 14.2782M11.9999 3C6.81459 3 2.55104 6.94668 2.04932 12M11.9999 3L11.9999 2M2.08044 12C2.68621 11.8436 3.45373 11.8417 4.17906 11.9104C6.10563 12.0926 7.71142 13.1073 7.97291 14.2782M7.99994 14C8.54905 12.8348 10.2583 12 11.9999 12M11.9999 12C13.7416 12 15.4508 12.8348 15.9999 14M11.9999 12L11.9999 19.5C11.9999 20.8807 10.8807 22 9.49994 22C8.11923 22 6.99994 20.8807 6.99994 19.5V19M12.1676 3C14.5452 5.62038 15.9999 9.13579 15.9999 13.0001M11.8322 3C9.45459 5.62037 7.99995 9.13572 7.99995 13" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default UmbrellaInsurance
