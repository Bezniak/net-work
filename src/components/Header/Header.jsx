import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {IoLogoElectron} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {GrNotification} from "react-icons/gr";
import {CiMusicNote1} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";
import {CommonSearchInput} from "../common/CommonSearchInput/CommonSearchInput";
import {MdKeyboardArrowDown} from "react-icons/md";
import MenuButton from "./MenuButton";
import {FiLogOut} from "react-icons/fi";

const Header = (props) => {


    const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(false);

    const menuButtonVisibilityHandler = () => {
        setIsMenuButtonVisible(!isMenuButtonVisible);
    };

    const handleClickOutside = (event) => {
        const menuButton = document.getElementById('menuButton');
        if (menuButton && !menuButton.contains(event.target)) {
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
                        <div className={s.navLinkBlock} onClick={props.logout}>
                            <div><FiLogOut/></div>
                        </div>
                    </li>
                    <li className={s.headerLoginButtonMenu} id="menuButton">
                        <div className={s.loginButtonsItems}>
                            {props.login ? (props.profile && props.profile.photos && props.profile.photos.small ? (
                                <img src={props.profile.photos.small} alt="ava"/>
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

            {isMenuButtonVisible && props.profile && props.profile.photos &&
                <MenuButton name={props.profile.fullName} img={props.profile.photos.small}/>
            }

        </header>
    );
};

export default Header;