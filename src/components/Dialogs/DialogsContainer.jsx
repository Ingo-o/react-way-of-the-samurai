import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState
    }
};

// Возвращает объект с коллбеками которые будут переданы в презентационную компоненту в качестве пропсов.
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    }
};

// Connect создаёт контейнерную компоненту внутри которой отрисовывает презентационную компоненту.
// В презентационную компоненту в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;