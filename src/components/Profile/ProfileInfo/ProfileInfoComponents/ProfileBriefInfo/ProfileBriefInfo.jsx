import React, {useState} from 'react';
import s from './ProfileBriefInfo.module.css';
import {MdOutlineInfo, MdOutlineWorkOutline} from "react-icons/md";
import {MoreDetailsInfo} from "./MoreDetailsInfo";
import {MoreDetailsInfoForm} from "./MoreDetailsInfoForm";


const ProfileBriefInfo = (props) => {

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
            {props.profile.lookingForAJob &&
                <>
                    <MdOutlineWorkOutline/>
                    <span>#OpenToWork</span>
                </>
            }
            <MdOutlineInfo/>
            <span onClick={onMoreDetailOpen}> More details</span>
            {isMoreDetailsVisible && (editMode
                    ? <MoreDetailsInfoForm onMoreDetailClose={onMoreDetailClose}
                                           profile={props.profile}
                                           initialValue={props.profile}
                                           isOwner={props.isOwner}
                                           goToEditMode={() => setEditMode(false)}
                                           saveProfile={props.saveProfile}/>
                    : <MoreDetailsInfo onMoreDetailClose={onMoreDetailClose}
                                       profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={() => setEditMode(true)}/>
            )
            }
        </div>
    );
};

export default ProfileBriefInfo;