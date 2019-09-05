import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogle, ...remainingProps }) => {
    return (<button className={`${isGoogle ? 'google-' : '' } custom-button`} {...remainingProps}>
        {children}
    </button>);
}

export default CustomButton;
