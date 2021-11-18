import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

// Вторая контейнераная компонента которая делает AJAX-запрос и отрисовывает презентационную компоненту.
class ProfileContainer extends React.Component {
    // Этот метод вызывается сразу после вставки компоненты в DOM.
    // Он получает и устанавливает данные о пользовательском профайле.
    componentDidMount() {
        const {getUserProfile} = this.props;
        let {userId} = this.props.match.params; // Эта информация приходит в пропсы благодаря обертке withRouter.
        if (!userId) {
            userId = 2;
        }
        // Запрашиваем информацию о профиле пользователя.
        getUserProfile(userId);
    }

    render() {
        const {profile} = this.props;
        return (
            <Profile profile={profile}/>
        );
    }
};

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({profile: state.profileState.profile});

// Еще одна обертка над компонентой, передающая в неё данные из URL.
const ProfileContainerWithUrlData = withRouter(ProfileContainer);

// Connect создаёт контейнерную компоненту вокруг (в данном случае) другой контейнерной компоненты.
// В неё в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithUrlData);

// Вместо функции mapDispatchToProps вторым параметром мы передаем объект.
// Connect сам приведет его к виду follow: (userId) => dispatch(followActionCreator(userId)).
// Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
