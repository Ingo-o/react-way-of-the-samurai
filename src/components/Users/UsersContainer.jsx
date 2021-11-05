import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/usersReducer";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    return {
        users: state.usersState.users
    }
};

// Возвращает объект с коллбеками которые будут переданы в презентационную компоненту в качестве пропсов.
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
    }
};

// Connect создаёт контейнерную компоненту внутри которой отрисовывает презентационную компоненту.
// В презентационную компоненту в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
export default connect(mapStateToProps, mapDispatchToProps)(Users);
