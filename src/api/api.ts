import axios from "axios";
import {ContactsType, GetUserType, PhotosType, ProfileType} from "../types/types";


const instance = axios.create({
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

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10,

}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodeEnum | ResultCodeWithCaptcha
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`);
    }
}


type GetUsersResponseType = {
    items: Array<GetUserType>
    totalCount: number
    error: string

}
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },

}


type GetProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type GetStatusResponseType = {}


type SavePhotoResponseType = {
    data: { photos: PhotosType }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type ProfileAPIResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}
export const profileAPI = {
    async getProfile(userId: number) {
        let res = await instance.get<GetProfileResponseType>(`profile/${userId}`);
        return res.data;
    },
    async getStatus(userId: number) {
        let res = await instance.get(`profile/status/${userId}`);
        return await res.data;
    },
    async updateStatus(status: string) {
        let res = await instance.put<ProfileAPIResponseType>(`profile/status`, {status});
        return res.data;
    },
    async savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)

        let res = await instance.put<SavePhotoResponseType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    async saveProfile(profile: ProfileType) {
        let res = await instance.put<ProfileAPIResponseType>(`profile`, profile);
        return res.data;
    }
}


type FollowUnfollowResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}

export const followAPI = {
    async follow(userId: number) {
        let res = await instance.post<FollowUnfollowResponseType>(`follow/${userId}`);
        return res.data;
    },
    async unfollow(userId: number) {
        let res = await instance.delete<FollowUnfollowResponseType>(`follow/${userId}`);
        return res.data;
    },
}


type GetCaptchaUrlResponseType = {
    url: string
}
export const securityAPI = {
    async getCaptchaUrl() {
        let res = await instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url');
        return res.data;
    }
}