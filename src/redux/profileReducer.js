const ADD_NEW_POST = 'ADD-NEW-POST';
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

const profileReducer = (profileState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 5,
                message: profileState.newPostText,
                likesCount: 0,
            };
            profileState.posts.push(newPost);
            profileState.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            profileState.newPostText = action.newText;
            break;
    }
    return profileState;
};

export default profileReducer;