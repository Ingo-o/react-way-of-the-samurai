import {createSelector} from "reselect";

// Селектор это функция достающая данные из state. Это промежуточное звено между state и mapStateToProps.
// Таким образом, в случае изменений у нас будет одна точка корректировки.

const getUsersSelector = (state) => {
    return state.usersState.users;
};

// Селектор с логикой (учебный) созданный при помощи библиотеки reselect.
// Этот селектор запускается только тогда когда изменения в state касаются лично его.
// В остальных случаях он возвращает запомненное значения, не запуская при этом функцию.
// Это помогает избежать лишней калькуляции, перерисовок и сложностей с отладкой.
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true);
})

export const getPageSize = (state) => {
    return state.usersState.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersState.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersState.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersState.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersState.followingInProgress;
};