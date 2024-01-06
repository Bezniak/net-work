import React from 'react';
import s from "./ProfilePhotoBackGround.module.css";

export const ProfilePhotoBackground = (props) => {
    return (
        <div>
            {props.profile.photos.background
                ? <img src={props.profile.photos.background} alt="background"/>
                : <div className={s.noBackgroundPhoto}></div>
            }
        </div>
    );
};

