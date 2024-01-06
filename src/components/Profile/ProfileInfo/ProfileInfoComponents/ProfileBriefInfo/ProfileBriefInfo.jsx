import React, {useState} from 'react';
import s from './ProfileBriefInfo.module.css';
import {MdOutlineInfo, MdOutlineWorkOutline} from "react-icons/md";
import {MoreDetailsInfo} from "./MoreDetailsInfo";


const ProfileBriefInfo = (props) => {

    const [isMoreDetailsVisible, setIsMoreDetailsVisible] = useState(false);

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
            {isMoreDetailsVisible && <MoreDetailsInfo onMoreDetailClose={onMoreDetailClose} profile={props.profile}/>}
        </div>
    );
};

export default ProfileBriefInfo;