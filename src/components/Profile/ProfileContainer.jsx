import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserProfile, updateStatus} from '../../redux/profile-reducer';
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";


const ProfileContainer = (props) => {

    const {id = 28698} = useParams();

    useEffect(() => {
        props.getUserProfile(id)
    }, [id]);



    return (
        <div>
            <Profile {...props}
                     profile={props.profile}
                     users={props.users}
                     profileStatus={props.profileStatus}
                     updateStatus={props.updateStatus}
            />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        profileStatus: state.profilePage.profileStatus,
    };
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus}),
    // withAuthRedirect
)(ProfileContainer)