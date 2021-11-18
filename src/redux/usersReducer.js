import {usersAPI} from "../api/api";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId});

const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId});

const SET_USERS = 'SET_USERS';
export const setUsers = (users) => ({type: SET_USERS, users});

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress, userId
});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

// ???????????????????????????????
export const pageChange = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
};

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (usersState = initialUsersState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...usersState,
                users: usersState.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW_SUCCESS:
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...usersState,
                followingInProgress: action.followingInProgress
                    // Процесс идет - добавляем id в массив.
                    ? [...usersState.followingInProgress, action.userId]
                    // Процесс завершился - удаляем id из массива.
                    : usersState.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return usersState;
    }
};

export default usersReducer;