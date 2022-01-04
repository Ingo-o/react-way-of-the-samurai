import css from "../common/FormControls/FormControls.module.css";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

// Field - контейнерная компонента рисующая другую компоненту. Внутри Field уже зашиты onChange, которые будут
// брать данные и отправлять их в state. Атрибут name - то под каким именем данные уйдут на сервер.
const LoginForm = ({handleSubmit, error}) => {
    // Дефолтное поведение кнопки в форме - сабмитить форму.
    // В форму в виде пропсов приходит много методов. Пропсы прокидывает наша HOC-контейнерная компонента.
    // Внутри handleSubmit вызовется onSubmit который мы передали в LoginReduxForm при отрисовке,
    // а в него придут все собранные данные из формы.
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Remember me")}
            {error && <div className={css.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

// Форм будет много, поэтому каждой нужно своё уникальное имя (в данном случае - login)
// В данном случае, LoginReduxForm является контейнерной компонентой над LoginForm.
// Хоком через который будет осуществляться общение формы с редьюсером.
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

// При отрисовке нашей контейнерной формы нужно передать в неё "родительский" submit.
const Login = (props) => {
    // В "родительский" submit приходят все данные из формы.
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth
});

// Раньше по дефолту экспортировался Login, а сейчас экспортируется безымянная контейнерна компонента
// которая образовалась с помощью хока connect.
export default connect(mapStateToProps, {login})(Login);