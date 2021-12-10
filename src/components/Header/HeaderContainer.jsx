import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        const {isAuth, login, logout} = this.props;
        return (
            <Header isAuth={isAuth} login={login} logout={logout}/>
        );
    }
}

const mapStateToProps = (state) => {
    const {isAuth, login} = state.authState;
    return {
        isAuth: isAuth,
        login: login,
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);
