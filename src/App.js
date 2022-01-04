import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import withSuspense from "./hoc/withSuspense";

// Импорт при помощи React.lazy означает что этого модуля не будет в базовой загрузке.
// Он будет загружен только когда потребуется.
// Для работы в этом режиме, компонента должна находится внутри тега <Suspense>. Используем HOC withSuspense.
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends Component {
    // Узнаем идентифицирован пользователь или нет.
    componentDidMount() {
        const {initializeApp} = this.props;
        initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        // Route следит за адресной строкой браузера и, в случае её совпадения с path, запускает render данных.
        // "?" означает что параметр опциональный и <ProfileContainer/> будет рендериться и без него.
        // :userId? - значение этого параметра придет в пропсы через withRouter.
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appState.initialized,
})

// При коннекте компонента с роутами нужно обернуть её в HOC withRouter (это баг).
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const PiratesApp = () => {
    // Для использования компоненты Route нужно обернуть код в котором она присутствует в BrowserRouter.
    // Provider оборачивает основной компонент приложения и делает store доступным для дочерних компонент.
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default PiratesApp;