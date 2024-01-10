import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer.ts';
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";


const ProfileContainer = (props) => {

    const {id = props.authorizedUserId} = useParams();

    useEffect(() => {
        props.getUserProfile(id)
        props.getStatus(id)

    }, [id]);

    let me = id === props.authorizedUserId

    return (
        <div>
            <Profile {...props}
                     isOwner={me}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}
                     errors={props.errors}
            />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        errors: state.profilePage.errors,
    };
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile}),
    withAuthRedirect
)(ProfileContainer)