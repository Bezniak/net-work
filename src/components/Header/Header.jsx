import React from 'react';
import style from './Header.module.css';
import {SiPaloaltonetworks} from "react-icons/si";

const Header = () => {
    return (
        <header className={style.header}>
            <SiPaloaltonetworks className={style.headerLogo}/>
        </header>
    );
};

export default Header;