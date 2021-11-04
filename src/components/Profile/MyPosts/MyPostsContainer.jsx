import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    return {
        profileState: state.profileState
    }
};

// Возвращает объект с коллбеками которые будут переданы в презентационную компоненту в качестве пропсов.
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => dispatch(addNewPostActionCreator()),
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
    }
};

// Connect создаёт контейнерную компоненту внутри которой отрисовывает презентационную компоненту.
// В презентационную компоненту в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect сам перерисовывает дерево.
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
