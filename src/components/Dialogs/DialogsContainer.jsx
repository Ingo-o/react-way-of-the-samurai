import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({dialogsState: state.dialogsState});

// Объединение разных обработчиков функцией compose.
export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
)(Dialogs);

/*
withAuthRedirect это HOC-обертка над компонентой.
Если пользователь не авторизован, то вместо отрисовки компоненты, он будет перенаправлен на страницу login.

Connect создаёт контейнерную компоненту внутри которой отрисовывает другую компоненту и в виде пропсов передают в неё
данные из объектов которые возвращаются двумя функциями. Когда происходят изменения, connect перерисовывает компоненту.

Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, коллбэки будут переданы в презентационную компоненту в качестве пропсов.
*/

