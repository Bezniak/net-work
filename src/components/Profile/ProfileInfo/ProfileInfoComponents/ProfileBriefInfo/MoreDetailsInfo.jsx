import React from "react";
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

export const MoreDetailsInfo = (props) => {

    return (
        <div className={s.moreDetailBlock}>
            <div className={s.moreDetailWrapper}>

                <div className={s.closeButton}>
                    {props.isOwner && <button className={s.editButton} onClick={props.goToEditMode}>Edit</button>}
                    <div className={s.closeIcon}>
                        <IoClose onClick={props.onMoreDetailClose}/>
                    </div>
                </div>
                <div className={s.photo}>
                    {props.profile.photos.large ? (
                        <img src={props.profile.photos.large} alt="photoAva"/>
                    ) : (
                        <MdOutlineNoPhotography/>
                    )}
                </div>
                <div>
                    <div>
                        <b>Full name:</b>{" "}
                        <span style={{color: "black"}}>{props.profile.fullName}</span>
                    </div>
                </div>

                <div className={s.detailsMainListWrapper}>
                    <ul className={s.detailsMainList}>
                        <li>
                            <MdOutlineWorkOutline/>
                            <b>Looking for a job:</b>
                            <span>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
                        </li>
                        <li>
                            <GiSkills/>
                            <b>My professional skills:</b>
                            <span>{props.profile.lookingForAJobDescription}</span>
                        </li>
                        <li>
                            <BsPersonLinesFill/>
                            <b>About me:</b>
                            <span>{props.profile.aboutMe}</span>
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
                            {props.profile.github}
                        </li>
                        <li>
                            <SlSocialVkontakte/>
                            {props.profile.vk}
                        </li>
                        <li>
                            <FaFacebook/>
                            {props.profile.contacts.facebook}
                        </li>
                        <li>
                            <FaInstagram/>
                            {props.profile.contacts.instagram}
                        </li>
                        <li>
                            <FaTwitter/>
                            {props.profile.contacts.twitter}
                        </li>
                        <li>
                            <CgWebsite/>
                            {props.profile.contacts.website}
                        </li>
                        <li>
                            <IoLogoYoutube/>
                            {props.profile.contacts.youtube}
                        </li>
                        <li>
                            <GoLink/>
                            {props.profile.contacts.mainLink}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};