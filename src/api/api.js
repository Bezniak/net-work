import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "9ba4d78e-4f34-47ac-8b5f-12c640cd08f8"
    },
})

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data) {
        return instance.post(`auth/login/${data}` )
    },
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
}

export const securityAPI = {}