// @ts-ignore
import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer.ts';
// @ts-ignore
import Profile from "./Profile.tsx";
import {useParams} from "react-router-dom";
import {compose} from "redux";
// @ts-ignore
import {withAuthRedirect} from "../common/hoc/withAuthRedirect.tsx";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (id: number | string) => void
    getStatus: (id: number | string) => void
    updateStatus: () => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}


const ProfileContainer: FC<MapPropsType & DispatchPropsType> = (props) => {

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


function mapStateToProps(state: AppStateType) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        errors: state.profilePage.errors,
    };
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile}),
    withAuthRedirect
)(ProfileContainer)