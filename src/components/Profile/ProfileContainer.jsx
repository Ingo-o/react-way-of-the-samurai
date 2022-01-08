import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

// Вторая контейнерная компонента которая делает AJAX-запрос и отрисовывает презентационную компоненту.
class ProfileContainer extends React.Component {

    refreshProfile() {
        const {getUserProfile, getUserStatus, authorizedUserId} = this.props;
        let {userId} = this.props.match.params; // Эта информация приходит в пропсы благодаря обертке withRouter.
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                // редирект можно делать через history.push.
                this.props.history.push('/login');
            }
        }
        // Запрашиваем информацию о профиле пользователя.
        getUserProfile(userId);
        getUserStatus(userId);
    }

    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он получает и устанавливает данные о пользовательском профайле.
    componentDidMount() {
        this.refreshProfile();
    }

    // Этот метод вызывается при изменении state или получении новых props (не вызывается при первоначальной отрисовке).
    // Во избежания зацикливания и ошибки, все изменения внутри componentDidUpdate должны быть внутри условия.
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        const {profile, status, updateUserStatus, savePhoto} = this.props;
        return (
            <Profile isOwner={!this.props.match.params.userId} savePhoto={savePhoto}
                     profile={profile} status={status} updateUserStatus={updateUserStatus}/>
        );
    }
};

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
    status: state.profileState.status,
    authorizedUserId: state.authState.id,
});

// Объединение разных обработчиков функцией compose.
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
)(ProfileContainer);

/*
1. withRouter - HOC-обертка передающая в компоненту данные из URL.

2. Connect создаёт контейнерную компоненту вокруг другой компоненты и в виде пропсов передают в неё данные из объектов
которые возвращаются двумя функциями. Когда происходят изменения, connect сам перерисовывает дерево.

Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, колбэки будут переданы в презентационную компоненту в качестве пропсов.
*/
