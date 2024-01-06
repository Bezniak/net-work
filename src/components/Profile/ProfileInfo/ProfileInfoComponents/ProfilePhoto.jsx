import React, {useEffect, useState} from 'react';
import s from "../ProfileInfo.module.css";
import style from './PhotoToolsHover.module.css';
import {PiCamera} from "react-icons/pi";
import {PhotoToolsHover} from "./PhotoToolsHover";

const ProfilePhoto = (props) => {
    const [isPhotoToolsVisible, setIsPhotoToolsVisible] = useState(false);

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setIsPhotoToolsVisible(true);
        }, 0); // Set your desired delay in milliseconds
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setIsPhotoToolsVisible(false);
        }, 100); // Set your desired delay in milliseconds
    };

    let timeoutId;

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${s.profilePhotoBlock} ${isPhotoToolsVisible ? style.active : ''}`}
        >
            {props.profile.photos.large ? (
                <img className={s.profilePhoto} src={props.profile.photos.large} alt="avatar"/>
            ) : (
                <PiCamera className={s.profilePhotoSVG}/>
            )}
            {props.isOwner && isPhotoToolsVisible && (
                <div className={s.photoToolsHoverBlock}>
                    <PhotoToolsHover savePhoto={props.savePhoto}/>
                </div>
            )}
        </div>
    );
};

export default ProfilePhoto;

