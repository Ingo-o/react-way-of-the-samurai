import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    const {posts, addNewPost} = props;

    const postItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>);

    const onAddingNewPost = (values) => {
        addNewPost(values.newPostText);
    };

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddingNewPost}/>
            <div className={css.posts}>{postItems}</div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='New post text' component={Textarea} name='newPostText'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
