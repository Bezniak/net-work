// @ts-ignore
import React from 'react';
// @ts-ignore
import s from "./CommonSearchInput.module.css";


type PropsType = {
    left: React.ComponentType
    right: React.ComponentType
    placeholder: string
}
export const CommonSearchInput: React.FC<PropsType> = ({left, right, placeholder}) => {
    return (
        <div className={s.searchInput}>
            <div className={s.searchIconLeft}>
                {left}
            </div>
            <input type="text" className={s.input} placeholder={placeholder}/>
            <div className={s.searchIconRight}>
                {right}
            </div>
        </div>
    );
};