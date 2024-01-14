// @ts-ignore
import {instance, APIResponseType} from "./api.ts";


export const followAPI = {
    async follow(userId: number) {
        let res = await instance.post<APIResponseType>(`follow/${userId}`);
        return res.data;
    },
    async unfollow(userId: number) {
        let res = await instance.delete<APIResponseType>(`follow/${userId}`);
        return res.data;
    },
}