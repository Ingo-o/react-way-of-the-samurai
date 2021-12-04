import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

// Вторая контейнерная компонента которая делает AJAX-запрос и отрисовывает презентационную компоненту.
class ProfileContainer extends React.Component {
    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он получает и устанавливает данные о пользовательском профайле.
    componentDidMount() {
        const {getUserProfile, getUserStatus} = this.props;
        let {userId} = this.props.match.params; // Эта информация приходит в пропсы благодаря обертке withRouter.
        if (!userId) {
            userId = 2;
        }
        // Запрашиваем информацию о профиле пользователя.
        getUserProfile(userId);
        getUserStatus(userId);
    }

    render() {
        const {profile, status, updateUserStatus} = this.props;
        return (
            <Profile profile={profile} status={status} updateUserStatus={updateUserStatus}/>
        );
    }
};

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
    status: state.profileState.status,
});

// Объединение разных обработчиков функцией compose.
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer);

/*
1. withRouter - HOC-обертка передающая в компоненту данные из URL.

2. Connect создаёт контейнерную компоненту вокруг другой компоненты и в виде пропсов передают в неё данные из объектов
которые возвращаются двумя функциями. Когда происходят изменения, connect сам перерисовывает дерево.

Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
*/
