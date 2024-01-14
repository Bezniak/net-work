// @ts-ignore
import {BaseThunkType, InferActionsTypes} from "./redux-store.ts";
// @ts-ignore
import {authAPI} from "../api/auth-api.ts";
// @ts-ignore
import {ResultCodeEnum, ResultCodeWithCaptchaEnum} from "../api/api.ts";
// @ts-ignore
import {securityAPI} from "../api/security-api.ts";


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_CAPTCHA_URL_SUCCESS':
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const),
}


export const getAuthUserData = (): ThunkType => async (dispatch, getState) => {

    let meData = await authAPI.me();

    if (meData.resultCode === ResultCodeEnum.Success) {
        // @ts-ignore
        let {id, email, login} = meData.data;
        dispatch(actions.setUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch, getState) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodeEnum.Success) {
            await dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
                await dispatch(getCaptchaUrl())
            }
        }
    }


export const logout = (): ThunkType => async (dispatch, getState) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setUserData(null, null, null, false));
    }
}


const getCaptchaUrl = (): ThunkType => async (dispatch, getState) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}


export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType>
