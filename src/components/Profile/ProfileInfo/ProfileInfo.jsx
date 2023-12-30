import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {MdOutlineInfo, MdOutlineWorkOutline} from "react-icons/md";
import {BsPersonCheck, BsTelephone} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div className={s.descriptionBlock}>

                <div>
                    {props.profile.photos.background
                        ? <img src={props.profile.photos.background} alt="background"/>
                        : <div className={s.noBackgroundPhoto}></div>
                    }
                </div>

                <img className={s.profilePhoto} src={props.profile.photos.large} alt="avatar"/>

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