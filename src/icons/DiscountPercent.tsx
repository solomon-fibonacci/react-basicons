
import React from 'react'
import { IconConfig } from '../types'
const DiscountPercent: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg width={`${size || 24}`} height={`${size || 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 16L16 8.00001M7.94636 4.24972L6.25195 4.23704C5.1357 4.22868 4.22868 5.1357 4.23704 6.25195L4.24972 7.94636C4.25377 8.48716 4.03863 9.00655 3.65336 9.38609L2.44627 10.5753C1.65105 11.3587 1.65105 12.6414 2.44627 13.4248L3.65336 14.6139C4.03863 14.9935 4.25377 15.5129 4.24972 16.0537L4.23704 17.7481C4.22868 18.8643 5.1357 19.7713 6.25195 19.763L7.94636 19.7503C8.48716 19.7463 9.00655 19.9614 9.38609 20.3467L10.5753 21.5538C11.3587 22.349 12.6414 22.349 13.4248 21.5538L14.6139 20.3467C14.9935 19.9614 15.5129 19.7463 16.0537 19.7503L17.7481 19.763C18.8643 19.7713 19.7713 18.8643 19.763 17.7481L19.7503 16.0537C19.7463 15.5129 19.9614 14.9935 20.3467 14.6139L21.5538 13.4248C22.349 12.6414 22.349 11.3587 21.5538 10.5753L20.3467 9.38609C19.9614 9.00655 19.7463 8.48716 19.7503 7.94636L19.763 6.25195C19.7713 5.1357 18.8643 4.22868 17.7481 4.23704L16.0537 4.24972C15.5129 4.25377 14.9935 4.03863 14.6139 3.65336L13.4248 2.44627C12.6414 1.65105 11.3586 1.65105 10.5753 2.44627L9.38609 3.65336C9.00655 4.03863 8.48716 4.25377 7.94636 4.24972ZM10.1667 9.00017C10.1667 9.73655 9.56973 10.3335 8.83335 10.3335C8.09697 10.3335 7.50002 9.73655 7.50002 9.00017C7.50002 8.26379 8.09697 7.66684 8.83335 7.66684C9.56973 7.66684 10.1667 8.26379 10.1667 9.00017ZM16.5 15C16.5 15.7364 15.9031 16.3333 15.1667 16.3333C14.4303 16.3333 13.8333 15.7364 13.8333 15C13.8333 14.2636 14.4303 13.6667 15.1667 13.6667C15.9031 13.6667 16.5 14.2636 16.5 15Z" stroke={color} strokeWidth={`${weight || 1.5}`} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default DiscountPercent
