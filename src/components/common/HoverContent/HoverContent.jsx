import React from 'react';
import s from './HoverContent.module.css';

const HoverContent = (props) => {
    return (
        <span style={s.content}>
            {props.children}
        </span>
    );
};

export default HoverContent;