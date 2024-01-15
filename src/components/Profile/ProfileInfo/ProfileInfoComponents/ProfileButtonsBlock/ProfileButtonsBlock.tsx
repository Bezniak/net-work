// @ts-ignore
import React from 'react';
// @ts-ignore
import s from "./ProfileButtonsBlock.module.css";
import {BsPersonCheck, BsTelephone} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";

const ProfileButtonsBlock = () => {
    return (
        <div>
            <ul className={s.profileButtons}>
                <li>Message</li>
                <li><BsTelephone/></li>
                <li><BsPersonCheck/></li>
                <li>More <FaChevronDown/></li>
            </ul>
        </div>
    );
};

export default ProfileButtonsBlock;