import React from 'react';
import s from './Header.module.css';
import {IoLogoElectron} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {GrNotification} from "react-icons/gr";
import {CiMusicNote1} from "react-icons/ci";
import {CgMenuGridO} from "react-icons/cg";
import {IoIosSearch} from "react-icons/io";
import {CommonSearchInput} from "../common/CommonSearchInput/CommonSearchInput";
import {MdKeyboardArrowDown} from "react-icons/md";

const Header = (props) => {


    return (
        <header className={s.header}>
            <div className={s.logo}>
                <IoLogoElectron/>
                <p>Chat</p>
            </div>

            <div className={s.headerInputBlock}>
                <ul className={s.headerInputList}>
                    <li>
                        <CommonSearchInput left={<IoIosSearch/>} placeholder={'Search'}/>
                    </li>
                    <li>
                        <GrNotification/>
                    </li>
                    <li>
                        <CiMusicNote1/>
                    </li>
                </ul>
            </div>

            <div className={s.headerLoginButtonBlock}>
                <ul className={s.headerLoginButtonList}>
                    <li>
                        <CgMenuGridO/>
                    </li>
                    <li>
                        <div className={s.loginButtonsItems}>
                            {props.login ? props.login : <NavLink to={'/login'}> Login </NavLink>}
                            <MdKeyboardArrowDown/>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;