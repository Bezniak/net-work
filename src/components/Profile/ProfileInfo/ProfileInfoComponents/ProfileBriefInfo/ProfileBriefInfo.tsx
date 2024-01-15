// @ts-ignore
import React, {FC, useState} from 'react';
// @ts-ignore
import s from './ProfileBriefInfo.module.css';
import {MdOutlineInfo, MdOutlineWorkOutline} from "react-icons/md";
// @ts-ignore
import {MoreDetailsInfo} from "./MoreDetailsInfo.tsx";
// @ts-ignore
import {MoreDetailsInfoForm} from "./MoreDetailsInfoForm.tsx";
import {ProfileType} from "../../../../../types/types";


type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
    errors: Array<string>
}

const ProfileBriefInfo: FC<PropsType> = ({profile, isOwner, saveProfile, errors}) => {

    const [isMoreDetailsVisible, setIsMoreDetailsVisible] = useState(false);

    const [editMode, setEditMode] = useState(false);


    const onMoreDetailOpen = () => {
        setIsMoreDetailsVisible(true);
    }

    const onMoreDetailClose = () => {
        setIsMoreDetailsVisible(false);
    }

    return (
        <div className={s.profileAboutButton}>
            {profile.lookingForAJob &&
                <>
                    <MdOutlineWorkOutline/>
                    <span>#OpenToWork</span>
                </>
            }
            <MdOutlineInfo/>
            <span onClick={onMoreDetailOpen}> More details</span>
            {isMoreDetailsVisible && (editMode
                    ? <MoreDetailsInfoForm onMoreDetailClose={onMoreDetailClose}
                                           profile={profile}
                                           initialValue={profile}
                                           isOwner={isOwner}
                                           errors={errors}
                                           goToEditMode={() => setEditMode(false)}
                                           saveProfile={saveProfile}/>
                    : <MoreDetailsInfo onMoreDetailClose={onMoreDetailClose}
                                       profile={profile}
                                       isOwner={isOwner}
                                       goToEditMode={() => setEditMode(true)}/>
            )
            }
        </div>
    );
};

export default ProfileBriefInfo;