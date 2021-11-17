import axios from "axios";

// Создание единого шаблона для похожих axios-запросов.
const usersInstance = axios.create({
    // Основная повторяющаяся часть URL.
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users',
    // Вместе с запросом передается куки.
    withCredentials: true,
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return usersInstance.get(`?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
};

const followInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    withCredentials: true,
    // Все запросы кроме get, как правило требуют ключ доступа.
    headers: {"API-KEY": "f841d812-c73f-4d3d-a2fd-8879f3cbde4b"},
})

export const followAPI = {
    follow(userId) {
        return followInstance.post(`${userId}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return followInstance.delete(`${userId}`)
            .then(response => response.data);
    },
};

const authInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    withCredentials: true,
})

export const authAPI = {
    isIdentified() {
        return authInstance.get(`me`)
            .then(response => response.data);
    },
};

const profileInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
})

export const profileAPI = {
    getUserProfileInfo(userId) {
        return profileInstance.get(`${userId}`)
            .then(response => response.data);
    },
};

