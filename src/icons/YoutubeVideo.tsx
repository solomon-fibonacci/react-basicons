
import React from 'react'
import { IconConfig } from '../types'
const YoutubeVideo: React.FC<IconConfig> = ({size=24, color='#000', weight=1.5}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12L10 15.4641V8.5359L16 12Z" stroke={`${color}`} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15V8.5L16 12L10 15Z" stroke={`${color}`}/>
</svg>

    )
}

export default YoutubeVideo
