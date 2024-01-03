import React from 'react';
import s from './MenuButton.module.css'
import {NavLink} from "react-router-dom";
import {IoAddCircleOutline, IoColorPaletteOutline, IoSettingsOutline} from "react-icons/io5";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {FaChevronRight} from "react-icons/fa6";
import {FaRegUser} from "react-icons/fa";

const MenuButton = (props) => {
    return (
        <div className={s.menuButtonBlock}>
            <ul className={s.menuButtonList}>
                <li>
                    <NavLink to="/profile" className={`${s.menuButtonProfile} ${s.navLinkBlock}`}>
                        <div>
                            {props.img ? (<img src={props.img} alt="ava"/>) : <FaRegUser/>}

                        </div>
                        <div>
                            <div>{props.name}</div>
                        </div>
                        <div className={s.menuButtonSvg}><FaChevronRight/></div>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to='/settings' className={s.navLinkBlock}>
                        <IoSettingsOutline/>
                        Settings
                    </NavLink>
                </li>
                <li>
                    <IoColorPaletteOutline/>
                    Theme
                </li>
                <li>
                    <IoIosHelpCircleOutline/>
                    Help
                </li>

                <hr/>
                <li>
                    <IoAddCircleOutline/>
                    Add account
                </li>
            </ul>
        </div>
    );
};

export default MenuButton;