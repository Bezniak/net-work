// @ts-ignore
import {instance, APIResponseType, ResultCodeEnum, ResultCodeWithCaptchaEnum} from "./api.ts";


type MeResponseDataType = {
    data: {
        id: number
        email: string
        login: string
    }
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodeWithCaptchaEnum | ResultCodeEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}