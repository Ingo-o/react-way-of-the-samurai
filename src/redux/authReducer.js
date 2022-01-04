import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const SER_AUTH_USER_DATA = 'pirateSocialNetwork/auth/SER_AUTH_USER_DATA';
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SER_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.isIdentified();
    // Если пользователь идентифицирован - записываем информацию о нем в authState.
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        // stopSubmit() – это action-creator из библиотеки redux-form, позволяющий в случае несрабатывания формы
        // отобразить ошибку. 1 параметр - название формы, 2 параметр - поле и текст ошибки.
        // _error означает что ошибка будет не на конкретное поле, а на всю форму.
        const message = response.messages.length > 0 ? response.messages[0] : 'Something went wrong';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
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
            }
        default:
            return authState;
    }
};

export default authReducer;