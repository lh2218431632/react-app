import React from 'react';
import './Card.css'

const Card = ({className, children, width}) => {
    return (
        <div style={{width: width}}   className={`${className} card`}>
            {children}
        </div>
    );
};

export default Card;
