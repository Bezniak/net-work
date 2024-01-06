import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {MdOutlineInfo, MdOutlineWorkOutline} from "react-icons/md";
import {BsPersonCheck, BsTelephone} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";
import ProfileStatus from "./ProfileInfoComponents/ProfileStatus";
import {PiCamera} from "react-icons/pi";
import {ProfilePhotoBackground} from "./ProfileInfoComponents/ProfileInfoPhotoBackgroung";
import ProfilePhoto from "./ProfileInfoComponents/ProfilePhoto";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>

                    <ProfilePhotoBackground profile={props.profile}/>
                    <ProfilePhoto profile={props.profile}/>


                {props.isOwner && <input type="file" className={s.photoInput} onChange={onMainPhotoSelected}/>}


                <div className={s.profileBlock}>

                    <div className={s.profileAbout}>
                        <div className={s.profileUserName}>{props.profile.fullName}</div>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


                        <div className={s.profileAboutButton}>
                            {props.profile.lookingForAJob &&
                                <>
                                    <MdOutlineWorkOutline/>
                                    <span>#OpenToWork</span>
                                </>
                            }
                            <MdOutlineInfo/>
                            <span>More details</span>
                        </div>


                    </div>

                    <div>
                        <ul className={s.profileButtons}>
                            <li>Message</li>
                            <li><BsTelephone/></li>
                            <li><BsPersonCheck/></li>
                            <li>More <FaChevronDown/></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;