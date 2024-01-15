// @ts-ignore
import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import s from './ProfilePhoto.module.css';
import {PiCamera} from "react-icons/pi";
// @ts-ignore
import {PhotoToolsHover} from "../PhotoToolsHover/PhotoToolsHover.tsx";
import {ProfileType} from "../../../../../types/types";


type PropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}
const ProfilePhoto: FC<PropsType> = ({profile, isOwner, savePhoto}) => {
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

    let timeoutId: any;

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {profile.photos.large
                ? (<img className={s.profilePhoto} src={profile.photos.large} alt="avatar"/>)
                : (<PiCamera className={s.profilePhotoSVG}/>)
            }
            {isOwner && isPhotoToolsVisible && (
                <div>
                    <PhotoToolsHover savePhoto={savePhoto}/>
                </div>
            )}
        </div>
    );
};

export default ProfilePhoto;

