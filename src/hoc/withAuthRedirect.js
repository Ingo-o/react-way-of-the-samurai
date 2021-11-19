import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

// HOC-компонента принимает компонент и возвращает другой компонент.
// Это один из способов для повторного использования одной и той же логики.

// Возвращает объект с данными из state которые будут переданы в компоненту в качестве пропсов.
// Еще один connect делается что бы не передавать isAuth в пропсы во всех компонентах где потребуется Redirect.
const mapStateToPropsForRedirect = (state) => ({isAuth: state.authState.isAuth});

// Если пользователь не авторизован, то вместо отрисовки компоненты, он будет перенаправлен на страницу login.
const withAuthRedirectComponent = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            const {isAuth} = this.props;
            if (!isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }

    // Connect создаёт контейнерную компоненту внутри которой отрисовывает переданную компоненту.
    // В неё в виде пропсов передаются данные из объекта mapStateToPropsForRedirect.
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirectComponent;