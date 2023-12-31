import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {


    return (
        <Header {...props} />
    );
};

function mapState(state) {
    return {
        profile: state.profilePage.profile,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapState, {logout})(HeaderContainer)

