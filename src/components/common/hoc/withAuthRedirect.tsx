// @ts-ignore
import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
});

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: FC<MapPropsType & DispatchPropsType> = (props) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to="/login"/>;

        return <WrappedComponent {...restProps as WCP} />;
    }

    const ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>
    (mapStateToPropsForRedirect, {})(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};