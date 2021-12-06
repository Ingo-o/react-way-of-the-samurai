// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

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
    ]
};

const dialogsReducer = (dialogsState = initialDialogsState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: 5, message: action.newMessageText};
            return {
                ...dialogsState,
                messages: [...dialogsState.messages, newMessage],
            };
        default:
            return dialogsState;
    }
};

export default dialogsReducer;