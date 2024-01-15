// @ts-ignore
import React, {FC} from "react";
// @ts-ignore
import s from './MoreDetailsInfo.module.css';
import {IoClose} from "react-icons/io5";
import {MdOutlineNoPhotography, MdOutlineWorkOutline} from "react-icons/md";
import {BsGithub, BsPersonLinesFill} from "react-icons/bs";
import {GiSkills} from "react-icons/gi";
import {RiContactsBook2Line} from "react-icons/ri";
import {SlSocialVkontakte} from "react-icons/sl";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {IoLogoYoutube} from "react-icons/io";
import {GoLink} from "react-icons/go";
import {ProfileType} from "../../../../../types/types";


type PropsType = {
    isOwner: boolean
    goToEditMode: () => void
    onMoreDetailClose: () => void
    profile: ProfileType
}

export const MoreDetailsInfo: FC<PropsType> = ({isOwner, goToEditMode, onMoreDetailClose, profile}) => {

    return (
        <div className={s.moreDetailBlock}>
            <div className={s.moreDetailWrapper}>

                <div className={s.closeButton}>
                    {isOwner && <button className={s.editButton} onClick={goToEditMode}>Edit</button>}
                    <div className={s.closeIcon}>
                        <IoClose onClick={onMoreDetailClose}/>
                    </div>
                </div>
                <div className={s.photo}>
                    {profile.photos.large ? (
                        <img src={profile.photos.large} alt="photoAva"/>
                    ) : (
                        <MdOutlineNoPhotography/>
                    )}
                </div>
                <div>
                    <div>
                        <b>Full name:</b>{" "}
                        <span style={{color: "black"}}>{profile.fullName}</span>
                    </div>
                </div>

                <div className={s.detailsMainListWrapper}>
                    <ul className={s.detailsMainList}>
                        <li>
                            <MdOutlineWorkOutline/>
                            <b>Looking for a job:</b>
                            <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
                        </li>
                        <li>
                            <GiSkills/>
                            <b>My professional skills:</b>
                            <span>{profile.lookingForAJobDescription}</span>
                        </li>
                        <li>
                            <BsPersonLinesFill/>
                            <b>About me:</b>
                            <span>{profile.aboutMe}</span>
                        </li>
                        <li>
                            <RiContactsBook2Line/>
                            <b>Contacts:</b>
                        </li>
                    </ul>
                </div>

                <div className={s.contactsListWrapper}>
                    <ul className={s.contactsList}>
                        <li>
                            <BsGithub/>
                            {profile.contacts.github}
                        </li>
                        <li>
                            <SlSocialVkontakte/>
                            {profile.contacts.vk}
                        </li>
                        <li>
                            <FaFacebook/>
                            {profile.contacts.facebook}
                        </li>
                        <li>
                            <FaInstagram/>
                            {profile.contacts.instagram}
                        </li>
                        <li>
                            <FaTwitter/>
                            {profile.contacts.twitter}
                        </li>
                        <li>
                            <CgWebsite/>
                            {profile.contacts.website}
                        </li>
                        <li>
                            <IoLogoYoutube/>
                            {profile.contacts.youtube}
                        </li>
                        <li>
                            <GoLink/>
                            {profile.contacts.mainLink}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};