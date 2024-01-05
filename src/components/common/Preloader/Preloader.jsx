import React from 'react';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src="preloader.svg" alt="preloader"/>
        </div>
    );
};

export default Preloader;