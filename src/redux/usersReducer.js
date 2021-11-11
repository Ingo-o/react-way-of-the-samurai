// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const FOLLOW = 'FOLLOW';
export const follow = (userId) => ({type: FOLLOW, userId});

const UNFOLLOW = 'UNFOLLOW';
export const unfollow = (userId) => ({type: UNFOLLOW, userId});

const SET_USERS = 'SET_USERS';
export const setUsers = (users) => ({type: SET_USERS, users});

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case TOGGLE_IS_FETCHING:
            return {...usersState, isFetching: action.isFetching};
        default:
            return usersState;
    }
};

export default usersReducer;