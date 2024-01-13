import {authAPI, ResultCodeEnum, ResultCodeWithCaptcha, securityAPI} from "../api/api.ts";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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

type ActionsType = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch, getState) => {

    let meData = await authAPI.me();

    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch, getState) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodeEnum.Success) {
            await dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
                await dispatch(getCaptchaUrl())
            }
        }
    }


export const logout = (): ThunkType => async (dispatch, getState) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === ResultCodeEnum.Success) {
        dispatch(setUserData(null, null, null, false));
    }
}


const getCaptchaUrl = (): ThunkType => async (dispatch, getState) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


