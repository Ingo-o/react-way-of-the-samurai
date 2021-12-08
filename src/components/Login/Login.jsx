import css from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

// Field - контейнерная компонента рисующая другую компоненту. Внутри Field уже зашиты onChange, которые будут
// брать данные и отправлять их в state. Атрибут name - то под каким именем данные уйдут на сервер.
const LoginForm = (props) => {
    // Дефолтное поведение кнопки в форме - сабмитить форму.
    // В форму в виде пропсов приходит много методов. Пропсы прокидывает наша HOC-контейнерная компонента.
    // Внутри handleSubmit вызовется onSubmit который мы передали в LoginReduxForm при отрисовке,
    // а в него придут все собранные данные из формы.
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} validate={[required]} component={Input}/> Remember me
            </div>
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
const Login = () => {
    // В "родительский" submit приходят все данные из формы.
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;