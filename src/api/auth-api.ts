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
    async me() {
        let res = await instance.get<APIResponseType<MeResponseDataType>>(`auth/me`);
        return res.data;
    },
    async login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        let res = await instance.post<APIResponseType<LoginResponseDataType, ResultCodeWithCaptchaEnum | ResultCodeEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
        return res.data;
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}