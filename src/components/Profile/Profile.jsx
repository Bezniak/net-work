import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updateStatus} from "../../redux/profile-reducer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} isFetching={props.isFetching} profileStatus={props.profileStatus} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;