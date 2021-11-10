// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

const FOLLOW = 'FOLLOW';
export const followActionCreator = (userId) => ({type: FOLLOW, userId});

const UNFOLLOW = 'UNFOLLOW';
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

const SET_USERS = 'SET_USERS';
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (usersState = initialUsersState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                users: usersState.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...usersState,
                users: usersState.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {...usersState, users: action.users};
        case SET_CURRENT_PAGE:
            return {...usersState, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...usersState, totalUsersCount: action.totalUsersCount};
        default:
            return usersState;
    }
};

export default usersReducer;