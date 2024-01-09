import React from 'react';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={s.container}>
            <h2 className={s.heading}>404</h2>
            <p className={s.message}>Page not found</p>
        </div>
    );
};

export default NotFound;