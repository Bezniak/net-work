import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const MY_PROFILE = 'MY_PROFILE';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    myProfileData: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case MY_PROFILE:
            return {
                ...state,
                myProfileData: action.data,
            }

        default:
            return state;
    }
}


export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getMyData = (data) => ({type: MY_PROFILE, data});

export const getMyProfileData = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login));
            }
        })
}

