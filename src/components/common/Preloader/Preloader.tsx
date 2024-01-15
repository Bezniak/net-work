// @ts-ignore
import React from 'react';
// @ts-ignore
import s from './Preloader.module.css';


type PropsType = {

}
const Preloader: React.FC<PropsType> = () => {
    return (
        <div className={s.preloader}>
            <img src="preloader.svg" alt="preloader"/>
        </div>
    );
};

export default Preloader;