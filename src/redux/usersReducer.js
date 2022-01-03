import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const FOLLOW_SUCCESS = 'pirateSocialNetwork/users/FOLLOW_SUCCESS';
export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId});

const UNFOLLOW_SUCCESS = 'pirateSocialNetwork/users/UNFOLLOW_SUCCESS';
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId});

const SET_USERS = 'pirateSocialNetwork/users/SET_USERS';
export const setUsers = (users) => ({type: SET_USERS, users});

const SET_CURRENT_PAGE = 'pirateSocialNetwork/users/SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const SET_TOTAL_USERS_COUNT = 'pirateSocialNetwork/users/SET_TOTAL_USERS_COUNT';
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

const TOGGLE_IS_FETCHING = 'pirateSocialNetwork/users/TOGGLE_IS_FETCHING';
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

const TOGGLE_FOLLOWING_PROGRESS = 'pirateSocialNetwork/users/TOGGLE_FOLLOWING_PROGRESS';
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress, userId
});

// THUNKS это функции которые сначала делают асинхронные операции, а потом диспатчат actions.
// Необходимые параметры передаются при помощи замыкания.
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

// Объединение общей логики для follow и unfollow.
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

const initialUsersState = {
    users: [],
    pageSize: 10,
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
                users: updateObjectInArray(usersState.users, action.userId, "id", {followed: true}),
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...usersState,
                users: updateObjectInArray(usersState.users, action.userId, "id", {followed: false}),
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