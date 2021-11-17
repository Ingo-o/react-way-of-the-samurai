import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    // Узнаем идентефицирован пользователь или нет.
    componentDidMount() {
        const {setAuthUserData} = this.props;
        authAPI.isIdentified().then(data => {
            // Если пользователь идентефицирован - записываем информацию о нем в authState.
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        const {isAuth, login} = this.props;
        return (
            <Header isAuth={isAuth} login={login}/>
        );
    }
};

const mapStateToProps = (state) => {
    const {isAuth, login} = state.authState;
    return {
        isAuth: isAuth,
        login: login,
    }
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
