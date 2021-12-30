import {getAuthUserData} from "./authReducer";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const INITIALIZED_SUCCESS = 'pirateSocialNetwork/app/INITIALIZED_SUCCESS';
export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // Когда выполнятся все промисы из массива (в данном случае он один), сработает then.
    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess());
    })
};

const initialState = {
    initialized: false,
};

const appReducer = (appState = initialState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...appState,
                initialized: true,
            }
        default:
            return appState;
    }
};

export default appReducer;