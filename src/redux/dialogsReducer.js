const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

const initialDialogsState = {
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
    ],
    newMessageText: '',
};

const dialogsReducer = (dialogsState = initialDialogsState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 5,
                message: dialogsState.newMessageText,
            };
            dialogsState.messages.push(newMessage);
            dialogsState.newMessageText = '';
            return dialogsState;
        case UPDATE_NEW_MESSAGE_TEXT:
            dialogsState.newMessageText = action.newText;
            return dialogsState;
        default:
            return dialogsState;
    }
};

export default dialogsReducer;