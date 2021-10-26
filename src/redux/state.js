let renderEntireTree;

let state = {
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
};

window.state = state;

export const addNewPost = () => {
    const {posts, newPostText} = state.profileState;
    const newPost = {
        id: 5,
        message: newPostText,
        likesCount: 0,
    };

    posts.push(newPost);
    state.profileState.newPostText = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profileState.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer; // паттерн observer
};

export default state;
