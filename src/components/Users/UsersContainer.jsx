import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {requestUsers, pageChange, follow, unfollow} from "../../redux/usersReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

// Вторая контейнераная компонента которая делает AJAX-запросы и отрисовывает презентационную компоненту.
class UsersContainer extends React.Component {
    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он отрисовывает ПЕРВУЮ страницу пользователей и передает в totalUsersCount их общее количество.
    componentDidMount() {
        const {pageSize, currentPage, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    // Этот метод срабатывает на клик.
    // Он изменяет currentPage и отрисовывает НУЖНУЮ НАМ страницу пользователей.
    // На момент вызова этого AJAX пропсы еще не вернулись, поэтому используем pageNumber а не currentPage.
    onPageChange = (pageNumber) => {
        const {pageChange, pageSize} = this.props;
        pageChange(pageNumber, pageSize);
    }

    render() {
        const {
            users, follow, unfollow, pageSize, totalUsersCount, currentPage,
            isFetching, followingInProgress,
        } = this.props;
        return <>
            {isFetching ? <Preloader/> : null}
            <Users users={users} follow={follow} unfollow={unfollow} pageSize={pageSize}
                   totalUsersCount={totalUsersCount} currentPage={currentPage} followingInProgress={followingInProgress}
                   onPageChange={this.onPageChange}/>
        </>
    }
}

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
/*const mapStateToProps = (state) => {
    const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = state.usersState;
    return {
        users: users,
        pageSize: pageSize,
        totalUsersCount: totalUsersCount,
        currentPage: currentPage,
        isFetching: isFetching,
        followingInProgress: followingInProgress,
    }
};*/

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

// Объединение разных обработчиков функцией compose.
export default compose(
    connect(mapStateToProps, {requestUsers, pageChange, follow, unfollow}),
    // withAuthRedirect,
)(UsersContainer);

/*
1. withAuthRedirect - HOC-обертка над компонентой.
Если пользователь не авторизован, то вместо отрисовки компоненты, он будет перенаправлен на страницу login.

2. Connect создаёт контейнерную компоненту внутри которой отрисовывает другую компоненту и в виде пропсов передают в неё
данные из объектов которые возвращаются двумя функциями. Когда происходят изменения, connect сам перерисовывает дерево.

Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
*/

