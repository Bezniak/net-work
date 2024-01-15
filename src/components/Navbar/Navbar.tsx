// @ts-ignore
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { LuNewspaper } from 'react-icons/lu';
import { TbUsersGroup } from 'react-icons/tb';
import { FiMessageCircle } from 'react-icons/fi';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
// @ts-ignore
import s from './Navbar.module.css';

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const handleNavLinkClick = (path: string) => {
        navigate(path);
    };

    return (
        <nav className={s.nav}>
            <ul className={s.navBlock}>
                <li>
                    <div onClick={() => handleNavLinkClick('/profile')}>
                        <CgProfile className={s.svg} />
                    </div>
                    <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : '')}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <div onClick={() => handleNavLinkClick('/users')}>
                        <TbUsersGroup className={s.svg} />
                    </div>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? s.active : '')}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <div onClick={() => handleNavLinkClick('/dialogs')}>
                        <FiMessageCircle className={s.svg} />
                    </div>
                    <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : '')}>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <div onClick={() => handleNavLinkClick('/news')}>
                        <LuNewspaper className={s.svg} />
                    </div>
                    <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : '')}>
                        News
                    </NavLink>
                </li>
                <li>
                    <div onClick={() => handleNavLinkClick('/music')}>
                        <MdOutlineLibraryMusic className={s.svg} />
                    </div>
                    <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : '')}>
                        Music
                    </NavLink>
                </li>
                <li>
                    <div onClick={() => handleNavLinkClick('/settings')}>
                        <IoSettingsOutline className={s.svg} />
                    </div>
                    <NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : '')}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;