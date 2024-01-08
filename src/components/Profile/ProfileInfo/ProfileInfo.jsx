import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileInfoComponents/ProfileStatus/ProfileStatus";
import {ProfilePhotoBackground} from "./ProfileInfoComponents/ProfilePhotoBackground/ProfilePhotoBackgroung";
import ProfilePhoto from "./ProfileInfoComponents/ProfilePhoto/ProfilePhoto";
import ProfileButtonsBlock from "./ProfileInfoComponents/ProfileButtonsBlock/ProfileButtonsBlock";
import ProfileBriefInfo from "./ProfileInfoComponents/ProfileBriefInfo/ProfileBriefInfo";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    // const onMainPhotoSelected = (e) => {
    //     if (e.target.files.length) {
    //         props.savePhoto(e.target.files[0]);
    //     }
    // }

    return (
        <div>
            <div className={s.descriptionBlock}>

                <ProfilePhotoBackground profile={props.profile}/>
                <ProfilePhoto profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>


                {/*{props.isOwner && <input type="file" style={{position: 'absolute', top: 330, left: 20, zIndex: 11}}*/}
                {/*                         onChange={onMainPhotoSelected}/>}*/}


                <div className={s.profileBlock}>
                    <div className={s.profileAbout}>
                        <div className={s.profileUserName}>{props.profile.fullName}</div>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <ProfileBriefInfo profile={props.profile} isOwner={props.isOwner}
                                          saveProfile={props.saveProfile} errors={props.errors}/>
                    </div>
                    <ProfileButtonsBlock/>
                </div>

            </div>

        </div>
    );
};

export default ProfileInfo;