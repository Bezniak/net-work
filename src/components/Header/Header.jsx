import React from 'react';
import style from './Header.module.css';
import {IoLogoElectron} from "react-icons/io5";

const Header = () => {
    return (
        <header className={style.header}>
            <IoLogoElectron  className={style.headerLogo}/> <span>Chatting</span>
        </header>
    );
};

export default Header;