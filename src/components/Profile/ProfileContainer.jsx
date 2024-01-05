import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
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


    return (
        <div>
            <Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
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
    };
}

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
    withAuthRedirect
)(ProfileContainer)