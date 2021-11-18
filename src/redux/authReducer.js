import {authAPI} from "../api/api";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const SER_AUTH_USER_DATA = 'SER_AUTH_USER_DATA';
export const setAuthUserData = (id, email, login) => ({type: SER_AUTH_USER_DATA, data: {id, email, login}});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.isIdentified().then(data => {
            // Если пользователь идентефицирован - записываем информацию о нем в authState.
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
};

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (authState = initialState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case SER_AUTH_USER_DATA:
            return {
                ...authState,
                ...action.data,
                isAuth: true,
            }
        default:
            return authState;
    }
};

export default authReducer;