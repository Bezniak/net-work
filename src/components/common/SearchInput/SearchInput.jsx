import React from 'react';
import s from "./SearchInput.module.css";
import {IoIosSearch} from "react-icons/io";

export const SearchInput = () => {
    return (
        <div className={s.searchInput}>
            <input type="text" className='input' placeholder='Enter your request'/>
            <div className={s.searchIcon}>
                <IoIosSearch/>
            </div>
        </div>
    );
};