// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const ADD_NEW_POST = 'ADD-NEW-POST';
export const addNewPost = () => ({type: ADD_NEW_POST});

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

const initialProfileState = {
    posts: [
        {id: 1, message: 'Aboard!', likesCount: 12},
        {id: 2, message: 'I am not fat i\'m big boned!', likesCount: 2},
        {id: 3, message: 'Stay away from my gold!', likesCount: 0},
        {id: 4, message: 'LFM Tank to Deadmines last slot', likesCount: 8},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (profileState = initialProfileState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {id: 5, message: profileState.newPostText, likesCount: 0};
            return {
                ...profileState,
                posts: [...profileState.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...profileState,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...profileState,
                profile: action.profile,
            };
        default:
            return profileState;
    }
};

export default profileReducer;