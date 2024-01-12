import React from 'react';
import s from "./CommonSearchInput.module.css";

export const CommonSearchInput = (props) => {
    return (
        <div className={s.searchInput}>
            <div className={s.searchIconLeft}>
                {props.left}
            </div>
                <input type="text" className={s.input} placeholder={props.placeholder}/>
            <div className={s.searchIconRight}>
                {props.right}
            </div>
        </div>
    );
};