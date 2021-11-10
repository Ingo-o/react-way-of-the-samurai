import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";

// Вторая контейнераная компонента которая делает AJAX-запросы и отрисовывает презентационную компоненту.
class UsersContainer extends React.Component {
    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он отрисовывает ПЕРВУЮ страницу пользователей и передает в totalUsersCount их общее количество.
    componentDidMount() {
        const {pageSize, currentPage, setUsers, setTotalUsersCount} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                setTotalUsersCount(response.data.totalCount);
            });
    }

    // Этот метод срабатывает на клик.
    // Он изменяет currentPage и отрисовывает НУЖНУЮ НАМ страницу пользователей.
    onPageChange = (pageNumber) => {
        const {setUsers, pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        // На момени вызова этого AJAX пропсы еще не вернулись, поэтому используем pageNumber а не currentPage.
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            });
    }

    render() {
        const {users, follow, unfollow, pageSize, totalUsersCount, currentPage} = this.props;
        return <Users users={users} follow={follow} unfollow={unfollow} pageSize={pageSize}
                      totalUsersCount={totalUsersCount} currentPage={currentPage}
                      onPageChange={this.onPageChange}/>;
    }
}

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    const {users, pageSize, totalUsersCount, currentPage} = state.usersState;
    return {
        users: users,
        pageSize: pageSize,
        totalUsersCount: totalUsersCount,
        currentPage: currentPage,
    }
};

// Возвращает объект с коллбеками которые будут переданы в презентационную компоненту в качестве пропсов.
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountActionCreator(totalUsersCount)),
    }
};

// Connect создаёт контейнерную компоненту вокруг (в данном случае) другой контейнерной компоненты.
// В неё в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
