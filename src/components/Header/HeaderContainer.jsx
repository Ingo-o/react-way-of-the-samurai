import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    // Узнаем идентефицирован пользователь или нет.
    componentDidMount() {
        const {setAuthUserData} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            // Вместе с запросом передается куки.
            withCredentials: true
        })
            .then(response => {
                // Если пользователь идентефицирован - записываем информацию о нем в authState.
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
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
