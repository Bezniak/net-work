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
    console.log(props.profile);

    return (
        <div className={s.moreDetailBlock}>
            <div className={s.moreDetailWrapper}>
                <div className={s.closeButton}>
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
                            <span>{props.profile.lookingForAJob && "no"}</span>
                        </li>
                        <li>
                            <GiSkills/>
                            <b>My professional skills:</b>
                            <span>{props.profile.lookingForAJobDescription && "no"}</span>
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
                            {props.profile.github && "no"}
                        </li>
                        <li>
                            <SlSocialVkontakte/>
                            {props.profile.vk && "no"}
                        </li>
                        <li>
                            <FaFacebook/>
                            {props.profile.facebook && "no"}
                        </li>
                        <li>
                            <FaInstagram/>
                            {props.profile.instagram && "no"}
                        </li>
                        <li>
                            <FaTwitter/>
                            {props.profile.twitter && "no"}
                        </li>
                        <li>
                            <CgWebsite/>
                            {props.profile.website && "no"}
                        </li>
                        <li>
                            <IoLogoYoutube/>
                            {props.profile.youtube && "no"}
                        </li>
                        <li>
                            <GoLink/>
                            {props.profile.mainLink && "no"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};