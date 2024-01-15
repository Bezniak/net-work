// @ts-ignore
import React from 'react';
// @ts-ignore
import Header, {PropsType} from "./Header.tsx";
import {connect} from "react-redux";
// @ts-ignore
import {login, logout} from "../../redux/auth-reducer.ts";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


type MapPropsType = {
    isAuth: boolean
    profile: ProfileType
    email: string
    userId: number
}

type DispatchPropType = {
    logout: () => void
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
const HeaderContainer: React.FC<MapPropsType> = (props) => {
    return (
        <Header {...props} />
    );
};

function mapState(state: AppStateType) {
    return {
        profile: state.profilePage.profile,
        email: state.auth.email,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default connect<MapPropsType, DispatchPropType, {}, AppStateType>
(mapState, {logout, login})
(HeaderContainer)

