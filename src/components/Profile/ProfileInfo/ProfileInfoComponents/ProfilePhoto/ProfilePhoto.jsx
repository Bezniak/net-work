import React, {useEffect, useState} from 'react';
import s from './ProfilePhoto.module.css';
import {PiCamera} from "react-icons/pi";
import {PhotoToolsHover} from "../PhotoToolsHover/PhotoToolsHover";

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
    }, [timeoutId]);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {props.profile.photos.large
                ? (<img className={s.profilePhoto} src={props.profile.photos.large} alt="avatar"/>)
                : (<PiCamera className={s.profilePhotoSVG}/>)
            }
            {props.isOwner && isPhotoToolsVisible && (
                <div>
                    <PhotoToolsHover savePhoto={props.savePhoto}/>
                </div>
            )}
        </div>
    );
};

export default ProfilePhoto;

