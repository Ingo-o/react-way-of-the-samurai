import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth,
        login: state.authState.login,
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);
