import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getMyProfileData} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getMyProfileData()
    }, []);


    return (
        <Header {...props} />
    );
};

function mapState(state) {
    return {
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        myProfileData: state.auth.myProfileData,
    }
}

export default connect(mapState, {getMyProfileData})(HeaderContainer)

