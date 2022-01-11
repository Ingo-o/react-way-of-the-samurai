import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const ADD_NEW_POST = 'pirateSocialNetwork/profile/ADD-NEW-POST';
export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});

const SET_USER_PROFILE = 'pirateSocialNetwork/profile/SET_USER_PROFILE';
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

const SET_USER_STATUS = 'pirateSocialNetwork/profile/SET_USER_STATUS';
export const setUserStatus = (newStatus) => ({type: SET_USER_STATUS, newStatus});

const DELETE_POST = 'pirateSocialNetwork/profile/DELETE_POST';
export const deletePost = (postId) => ({type: DELETE_POST, postId});

const SAVE_PHOTO_SUCCESS = 'pirateSocialNetwork/profile/SAVE_PHOTO_SUCCESS'
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
};

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const userId = getState().authState.id;
    const response = await profileAPI.saveProfile(profileData);
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        // stopSubmit() – это action-creator из библиотеки redux-form, позволяющий в случае несрабатывания формы
        // отобразить ошибку. 1 параметр - название формы, 2 параметр - поле и текст ошибки.
        // _error означает что ошибка будет не на конкретное поле, а на всю форму.
        const message = response.messages.length > 0 ? response.messages[0] : 'Something went wrong';
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(message);
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
        case DELETE_POST:
            return {
                ...profileState,
                posts: [...profileState.posts.filter(post => post.id !== action.postId)],
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...profileState,
                profile: {...profileState.profile, photos: action.photos},
            };
        default:
            return profileState;
    }
};

export default profileReducer;