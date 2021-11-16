// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const SER_AUTH_USER_DATA = 'SER_AUTH_USER_DATA';
export const setAuthUserData = (id, email, login) => ({type: SER_AUTH_USER_DATA, data: {id, email, login}});

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