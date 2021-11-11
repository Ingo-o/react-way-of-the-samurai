import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/usersReducer";

// Вторая контейнераная компонента которая делает AJAX-запросы и отрисовывает презентационную компоненту.
class UsersContainer extends React.Component {
    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он отрисовывает ПЕРВУЮ страницу пользователей и передает в totalUsersCount их общее количество.
    componentDidMount() {
        const {pageSize, currentPage, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;
        toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
                setTotalUsersCount(response.data.totalCount);
            });
    }

    // Этот метод срабатывает на клик.
    // Он изменяет currentPage и отрисовывает НУЖНУЮ НАМ страницу пользователей.
    onPageChange = (pageNumber) => {
        const {setUsers, pageSize, setCurrentPage, toggleIsFetching} = this.props;
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        // На момени вызова этого AJAX пропсы еще не вернулись, поэтому используем pageNumber а не currentPage.
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
            });
    }

    render() {
        const {users, follow, unfollow, pageSize, totalUsersCount, currentPage, isFetching} = this.props;
        return <>
            {isFetching ? <Preloader/> : null}
            <Users users={users} follow={follow} unfollow={unfollow} pageSize={pageSize}
                   totalUsersCount={totalUsersCount} currentPage={currentPage}
                   onPageChange={this.onPageChange}/>
        </>
    }
}

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    const {users, pageSize, totalUsersCount, currentPage, isFetching} = state.usersState;
    return {
        users: users,
        pageSize: pageSize,
        totalUsersCount: totalUsersCount,
        currentPage: currentPage,
        isFetching: isFetching,
    }
};

// Connect создаёт контейнерную компоненту вокруг (в данном случае) другой контейнерной компоненты.
// В неё в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);

// Вместо функции mapDispatchToProps вторым параметром мы передаем объект.
// Connect сам приведет его к виду follow: (userId) => dispatch(followActionCreator(userId)).
// Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
