import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {LuNewspaper} from "react-icons/lu";
import {TbUsersGroup} from "react-icons/tb";
import {FiMessageCircle} from "react-icons/fi";
import {MdOutlineLibraryMusic} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className={s.nav}>

            <ul className={s.navBlock}>
                <li>
                    <CgProfile/>
                    <NavLink to="/profile" className={({isActive}) => (isActive ? s.active : '')}>Profile</NavLink>
                </li>
                <li>
                    <TbUsersGroup/>
                    <NavLink to="/users" className={({isActive}) => (isActive ? s.active : '')}>Users</NavLink>
                </li>
                <li>
                    <FiMessageCircle/>
                    <NavLink to="/dialogs" className={({isActive}) => (isActive ? s.active : '')}>Messages</NavLink>
                </li>
                <li>
                    <LuNewspaper/>
                    <NavLink to="/news" className={({isActive}) => (isActive ? s.active : '')}>News</NavLink>
                </li>
                <li>
                    <MdOutlineLibraryMusic/>
                    <NavLink to="/music" className={({isActive}) => (isActive ? s.active : '')}>Music</NavLink>
                </li>
                <li>
                    <IoSettingsOutline/>
                    <NavLink to="/settings"
                             className={({isActive}) => (isActive ? s.active : '')}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;