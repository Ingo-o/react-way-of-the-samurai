// Селектор это функция которая достает необходимые данные из state.
// Это промежуточное звено между state и mapStateToProps, нужное для того что бы в случае изменений
// у нас была одна точка корректировки.

export const getUsers = (state) => {
    return state.usersState.users;
};

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