// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import s from './Header.module.css';
import {IoLogoElectron} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {GrNotification} from "react-icons/gr";
import {CiMusicNote1} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";
// @ts-ignore
import {CommonSearchInput} from "../common/CommonSearchInput/CommonSearchInput.tsx";
import {MdKeyboardArrowDown} from "react-icons/md";
// @ts-ignore
import MenuButton from "./MenuButton.tsx";
import {FiLogOut} from "react-icons/fi";
import {ProfileType} from "../../types/types";


export type PropsType = {
    logout: () => void
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    profile: ProfileType
}
const Header: React.FC<PropsType> = ({logout, login, profile,}) => {


    const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(false);

    const menuButtonVisibilityHandler = () => {
        setIsMenuButtonVisible(!isMenuButtonVisible);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const menuButton: HTMLElement | null = document.getElementById('menuButton');
        if (menuButton && !menuButton.contains(event.target as Node)) {
            setIsMenuButtonVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    // if (!props.profile) {
    //     return <Preloader/>
    // }

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <IoLogoElectron/>
                <p>Chat</p>
            </div>

            <div className={s.headerInputBlock}>
                <ul className={s.headerInputList}>
                    <li>
                        <CommonSearchInput left={<IoIosSearch/>} placeholder={'Search'} right={''}/>
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
                        <div className={s.navLinkBlock} onClick={logout}>
                            <div><FiLogOut/></div>
                        </div>
                    </li>
                    <li className={s.headerLoginButtonMenu} id="menuButton">
                        <div className={s.loginButtonsItems}>
                            {login ? (profile && profile.photos && profile.photos.small ? (
                                <img src={profile.photos.small} alt="ava"/>
                            ) : (
                                <div>No photo available</div>
                            )) : (
                                <NavLink to={'/login'}>Login</NavLink>
                            )}
                            <MdKeyboardArrowDown onClick={menuButtonVisibilityHandler}/>
                        </div>
                    </li>
                </ul>
            </div>

            {isMenuButtonVisible && profile && profile.photos &&
                <MenuButton name={profile.fullName} img={profile.photos.small}/>
            }

        </header>
    );
};

export default Header;