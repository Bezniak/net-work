// @ts-ignore
import React from 'react';
// @ts-ignore
import s from "./SearchInput.module.css";
import {IoIosSearch} from "react-icons/io";


type PropsType = {}
export const SearchInput: React.FC<PropsType> = () => {
    return (
        <div className={s.searchInput}>
            <input type="text" className='input' placeholder='Enter your request'/>
            <div className={s.searchIcon}>
                <IoIosSearch/>
            </div>
        </div>
    );
};