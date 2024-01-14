import axios from "axios";
// @ts-ignore
import {UserType} from "../types/types.ts";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "9ba4d78e-4f34-47ac-8b5f-12c640cd08f8"
    },
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeWithCaptchaEnum {
    CaptchaIsRequired = 10,

}


export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}