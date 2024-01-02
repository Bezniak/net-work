import {NavLink, useNavigate} from "react-router-dom";
import s from "./Header.module.css";
import {IoSettingsOutline} from "react-icons/io5";
import React from "react";
import {FiLogOut} from "react-icons/fi";

export const MenuButton = (props) => {

    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        navigate(path);
    };

    return (
        <ul className={s.menuButton}>
            <li onClick={() => handleNavLinkClick('/profile')}>
                <img src={''} alt="ava"/>
                {props.name}
            </li>
            <li>
                <div onClick={() => handleNavLinkClick('/settings')}>
                    <IoSettingsOutline className={s.svg}/>
                </div>
                <NavLink to="/settings" className={({isActive}) => (isActive ? s.active : '')}>
                    Settings
                </NavLink>
            </li>
            <li>Theme</li>
            <li>Help</li>
            <li onClick={props.logout}>
                <FiLogOut/>
                <NavLink to='/login'>Log out</NavLink>
            </li>
            <li>Add account</li>
        </ul>
    )
};
