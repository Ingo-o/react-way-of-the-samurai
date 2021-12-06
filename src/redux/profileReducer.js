import {profileAPI} from "../api/api";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const ADD_NEW_POST = 'ADD-NEW-POST';
export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});

const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

const SET_USER_STATUS = 'SET_USER_STATUS';
export const setUserStatus = (newStatus) => ({type: SET_USER_STATUS, newStatus});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data));
            });
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    }
};

const initialProfileState = {
    posts: [
        {id: 1, message: 'Aboard!', likesCount: 12},
        {id: 2, message: 'I am not fat i\'m big boned!', likesCount: 2},
        {id: 3, message: 'Stay away from my gold!', likesCount: 0},
        {id: 4, message: 'LFM Tank to Deadmines last slot', likesCount: 8},
    ],
    profile: null,
    status: '',
};

const profileReducer = (profileState = initialProfileState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...profileState,
                posts: [...profileState.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...profileState,
                profile: action.profile,
            };
        case SET_USER_STATUS:
            return {
                ...profileState,
                status: action.newStatus,
            };
        default:
            return profileState;
    }
};

export default profileReducer;