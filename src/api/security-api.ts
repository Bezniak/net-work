// @ts-ignore
import {instance} from "./api.ts";

type GetCaptchaUrlResponseType = {
    url: string
}
export const securityAPI = {
    async getCaptchaUrl() {
        let res = await instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url');
        return res.data;
    }
}