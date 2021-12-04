import axios from "axios";

// Создание единого шаблона для похожих axios-запросов.
const instance = axios.create({
    // Основная повторяющаяся часть URL.
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // Вместе с запросом передается куки.
    withCredentials: true,
    // Все запросы кроме get, как правило требуют ключ доступа.
    headers: {"API-KEY": "f841d812-c73f-4d3d-a2fd-8879f3cbde4b"},
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    },
};

export const authAPI = {
    isIdentified() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
};
