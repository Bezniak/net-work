// @ts-ignore
import {PhotosType, ProfileType} from "../types/types.ts";
// @ts-ignore
import {instance, APIResponseType} from "./api.ts";


type SavePhotoResponseDataType = {
    photos: PhotosType
}
export const profileAPI = {
    async getProfile(userId: number) {
        let res = await instance.get<ProfileType>(`profile/${userId}`);
        return res.data;
    },
    async getStatus(userId: number) {
        let res = await instance.get<string>(`profile/status/${userId}`);
        return res.data;
    },
    async updateStatus(status: string) {
        let res = await instance.put<APIResponseType>(`profile/status`, {status});
        return res.data;
    },
    async savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)

        let res = await instance.put<APIResponseType<PhotosType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    async saveProfile(profile: ProfileType) {
        let res = await instance.put<APIResponseType>(`profile`, profile);
        return res.data;
    }
}
