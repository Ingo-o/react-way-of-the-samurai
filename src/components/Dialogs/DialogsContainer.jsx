import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState
    }
};

// Connect создаёт контейнерную компоненту внутри которой отрисовывает презентационную компоненту.
// В презентационную компоненту в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
export default connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

// Вместо функции mapDispatchToProps вторым параметром мы передаем объект.
// Connect сам приведет его к виду follow: (userId) => dispatch(followActionCreator(userId)).
// Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
