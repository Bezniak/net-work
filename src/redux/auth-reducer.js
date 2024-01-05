import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


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
                ...action.payload,
            }

        default:
            return state;
    }
}


const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {

    let res = await authAPI.me();

    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}


export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}



