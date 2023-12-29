import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";


const ProfileContainer = (props) => {

    const {id = 28698} = useParams();

    useEffect(() => {
        props.getUserProfile(id)
    }, [id]);


    if (!props.isAuth) return <Navigate to='/login'/>

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);