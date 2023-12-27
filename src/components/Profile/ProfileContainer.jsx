import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Profile from "./Profile";
import {useParams} from "react-router-dom";


const ProfileContainer = (props) => {

    const {id = 28698} = useParams();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                props.setUserProfile(response.data);
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