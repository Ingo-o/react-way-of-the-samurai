const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

const dialogsReducer = (dialogsState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 5,
                message: dialogsState.newMessageText,
            };
            dialogsState.messages.push(newMessage);
            dialogsState.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            dialogsState.newMessageText = action.newText;
            break;
    }
    return dialogsState;
};

export default dialogsReducer;