let store = {
    _state: {
        profileState: {
            posts: [
                {id: 1, message: 'Aboard!', likesCount: 12},
                {id: 2, message: 'I am not fat i\'m big boned!', likesCount: 2},
                {id: 3, message: 'Stay away from my gold!', likesCount: 0},
                {id: 4, message: 'LFM Tank to Deadmines last slot', likesCount: 8},
            ],
            newPostText: '',
        },
        dialogsState: {
            dialogs: [
                {id: 1, name: 'Captain Cartman'},
                {id: 2, name: 'Peter Blood'},
                {id: 3, name: 'Fleet Master Seahorn'},
                {id: 4, name: 'Red Beard'},
                {id: 5, name: 'Rock’n’Rolf'},
                {id: 6, name: 'Pirate burb'},
            ],
            messages: [
                {id: 1, message: 'Who\'s there?! Oo'},
                {id: 2, message: 'Yarrrrr!'},
                {id: 3, message: 'Fifteen men on the dead man\'s chest! Yo-ho-ho, and a bottle of rum!'},
                {id: 4, message: 'Red Beard is oaf :P'},
            ]
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was changed');
    },
    subscribe(func) {
        this._callSubscriber = func;
    },

    _addNewPost() {
        const state = this._state;
        const newPost = {
            id: 5,
            message: state.profileState.newPostText,
            likesCount: 0,
        };

        state.profileState.posts.push(newPost);
        state.profileState.newPostText = '';
        this._callSubscriber(state);
    },
    _updateNewPostText(newText) {
        const state = this._state;
        state.profileState.newPostText = newText;
        this._callSubscriber(state);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addNewPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    },
}

const ADD_POST = 'ADD-POST';
export const addPostActionCreator = () => ({type: ADD_POST});


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


window.store = store;
export default store;
