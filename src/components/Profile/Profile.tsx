// @ts-ignore
import React, {FC} from 'react';
// @ts-ignore
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx";
// @ts-ignore
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
    errors: Array<string>
}

const Profile: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, errors}) => {

    return (
        <>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
                         errors={errors}
            />
            <MyPostsContainer/>
        </>
    )
        ;
};

export default Profile;