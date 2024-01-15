// @ts-ignore
import React from 'react';
// @ts-ignore
import s from './NotFound.module.css';


type PropsType = {}
const NotFound: React.FC<PropsType> = () => {
    return (
        <div className={s.container}>
            <h2 className={s.heading}>404</h2>
            <p className={s.message}>Page not found</p>
        </div>
    );
};

export default NotFound;