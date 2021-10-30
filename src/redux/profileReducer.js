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
        case ADD_NEW_POST:
            const newPost = {
                id: 5,
                message: profileState.newPostText,
                likesCount: 0,
            };
            profileState.posts.push(newPost);
            profileState.newPostText = '';
            return profileState;
        case UPDATE_NEW_POST_TEXT:
            profileState.newPostText = action.newText;
            return profileState;
        default:
            return profileState;
    }
};

export default profileReducer;