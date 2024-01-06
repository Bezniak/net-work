import React from 'react';
import s from "../ProfileInfo.module.css";
import {PiCamera} from "react-icons/pi";

const ProfilePhoto = (props) => {
    return (
        <div>
            {
                props.profile.photos.large
                    ? <img className={s.profilePhoto} src={props.profile.photos.large} alt="avatar"/>
                    : <PiCamera className={s.profilePhotoSVG}/>
            }
        </div>
    );
};

export default ProfilePhoto;