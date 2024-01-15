// @ts-ignore
import React, { FC, ChangeEvent } from 'react';
// @ts-ignore
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
// @ts-ignore
import ProfileStatus from './ProfileInfoComponents/ProfileStatus/ProfileStatus.tsx';
// @ts-ignore
import { ProfilePhotoBackground } from './ProfileInfoComponents/ProfilePhotoBackground/ProfilePhotoBackgroung.tsx';
// @ts-ignore
import ProfilePhoto from './ProfileInfoComponents/ProfilePhoto/ProfilePhoto.tsx';
// @ts-ignore
import ProfileButtonsBlock from './ProfileInfoComponents/ProfileButtonsBlock/ProfileButtonsBlock.tsx';
// @ts-ignore
import ProfileBriefInfo from './ProfileInfoComponents/ProfileBriefInfo/ProfileBriefInfo.tsx';
// @ts-ignore
import { ProfileType } from '../../../types/types.ts';

type PropsType = {
    profile: ProfileType;
    isOwner: boolean;
    savePhoto: (file: File) => void
    updateStatus: () => void;
    errors: Array<string>;
    status: string;
    saveProfile: () => void;
};

const ProfileInfo: FC<PropsType> = ({
                                        profile,
                                        isOwner,
                                        savePhoto,
                                        updateStatus,
                                        errors,
                                        status,
                                        saveProfile,
                                    }) => {
    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <ProfilePhotoBackground />
                <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto} />

                {isOwner && (
                    <input
                        type="file"
                        style={{ position: 'absolute', top: 330, left: 20, zIndex: 11 }}
                        onChange={onMainPhotoSelected}
                    />
                )}

                <div className={s.profileBlock}>
                    <div className={s.profileAbout}>
                        <div className={s.profileUserName}>{profile.fullName}</div>
                        <ProfileStatus status={status} updateStatus={updateStatus} />
                        <ProfileBriefInfo
                            profile={profile}
                            isOwner={isOwner}
                            saveProfile={saveProfile}
                            errors={errors}
                        />
                    </div>
                    <ProfileButtonsBlock />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;