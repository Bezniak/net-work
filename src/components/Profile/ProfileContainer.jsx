import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";


const ProfileContainer = (props) => {

    const {id = 28698} = useParams();

    useEffect(() => {
        profileAPI.getUserProfile(id)
            .then(data => {
                props.setUserProfile(data);
            });
        return () => {

        }
    }, [id]);


    return (
        <div>
            <Profile {...props} profile={props.profile} users={props.users}/>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
    };
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);