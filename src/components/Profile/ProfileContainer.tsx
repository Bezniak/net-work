// @ts-ignore
import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer.ts';
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect.tsx";
import {AppStateType} from "../../redux/redux-store";


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (id: any) => void
    getStatus: (id: any) => void
    updateStatus: () => void
    savePhoto: () => void

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

export default compose < React.ComponentType > (
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile}),
        withAuthRedirect
)(ProfileContainer)