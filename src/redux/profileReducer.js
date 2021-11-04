import _ from "lodash";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

const ADD_NEW_POST = 'ADD-NEW-POST';
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

const initialProfileState = {
    posts: [
        {id: 1, message: 'Aboard!', likesCount: 12},
        {id: 2, message: 'I am not fat i\'m big boned!', likesCount: 2},
        {id: 3, message: 'Stay away from my gold!', likesCount: 0},
        {id: 4, message: 'LFM Tank to Deadmines last slot', likesCount: 8},
    ],
    newPostText: '',
};

const profileReducer = (profileState = initialProfileState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            const newPost = {
                id: 5,
                message: profileState.newPostText,
                likesCount: 0,
            };
            // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
            // а его копию с новыми изменениями. Глубоко копируем только то что собираемся поменять.
            const profileStateCopy = _.cloneDeep(profileState);
            profileStateCopy.posts.push(newPost);
            profileStateCopy.newPostText = '';
            return profileStateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const profileStateCopy = _.clone(profileState);
            profileStateCopy.newPostText = action.newText;
            return profileStateCopy;
        }
        default:
            return profileState;
    }
};

export default profileReducer;