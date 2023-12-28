import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getMyData, setUserData} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    props.setUserData(id, email, login);
                }
            })
    }, []);


    // useEffect(() => {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.userId}`)
    //         .then(res => {
    //             props.getMyData(res.data)
    //         })
    // }, [])

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

export default connect(mapState, {setUserData, getMyData})(HeaderContainer)

