import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogle, inverted, ...remainingProps }) => {
    return (<button className={`
        ${isGoogle ? 'google' : '' } 
        ${inverted ? 'inverted' : '' } custom-button`} {...remainingProps}>
        {children}
    </button>);
}

export default CustomButton;
