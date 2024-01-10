import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'security/get-captcha-url/GET_CAPTCHA_URL_SUCCESS';


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

type SetAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataPayloadType
}

const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});


type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: any) => {

    let res = await authAPI.me();

    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {

        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }


}


export const logout = () => async (dispatch: any) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}


const getCaptchaUrl = () => async (dispatch: any) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


