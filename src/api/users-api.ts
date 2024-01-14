// @ts-ignore
import {instance, GetItemsType} from "./api.ts";

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 10) {
        let res = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },

}
