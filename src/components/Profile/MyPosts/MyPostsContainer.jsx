import {addNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => {
    return {
        posts: state.profileState.posts,
    }
};

// Connect создаёт контейнерную компоненту внутри которой отрисовывает презентационную компоненту.
// В презентационную компоненту в виде пропсов передаются данные из объектов которые возвращаются двумя функциями.
// Когда происходят изменения, connect перерисовывает компоненту.
export default connect(mapStateToProps, {addNewPost})(MyPosts);

// Вместо функции mapDispatchToProps вторым параметром мы передаем объект.
// Connect сам приведет его к виду follow: (userId) => dispatch(followActionCreator(userId)).
// Как и в случае с mapStateToProps, колбэки будут переданы в презентационную компоненту в качестве пропсов.
