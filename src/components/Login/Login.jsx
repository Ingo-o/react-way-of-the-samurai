import css from "../common/FormControls/FormControls.module.css";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

// Внутри Field уже зашиты onChange, который будет брать данные и отправлять их в state.
// Атрибут name это то под каким именем данные уйдут на сервер.
// В нашем случае, Field создается при помощи функции createField.
const LoginForm = ({handleSubmit, error, captchaURL}) => {
    // Дефолтное поведение кнопки в форме - сабмитить форму.
    // В форму в виде пропсов приходит много методов. Пропсы прокидывает HOC-компонента LoginReduxForm.
    // Внутри handleSubmit вызовется onSubmit который мы передали в LoginReduxForm при отрисовке,
    // а в него придут все собранные из формы данные.
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Remember me")}
            {error && <div className={css.formSummaryError}>{error}</div>}

            {captchaURL && <img src={captchaURL} alt={"Captcha"}/>}
            {captchaURL && createField("Symbols from image", "captcha", [required], Input)}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

// Форм будет много, поэтому каждой нужно своё уникальное имя (в данном случае - login).
// LoginReduxForm это контейнерная компонентой над LoginForm. Это HOC через который будет осуществляться общение формы с редьюсером.
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

// При отрисовке формы (LoginReduxForm) нужно передать в неё "родительский" submit.
const Login = (props) => {
    // В "родительский" submit приходят все данные из формы.
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth,
    captchaURL: state.authState.captchaURL,
});

// По дефолту экспортируется безымянная контейнерна компонента, образовавшаяся при помощи хока connect.
export default connect(mapStateToProps, {login})(Login);