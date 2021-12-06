import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    const {posts} = props.profileState;
    const {addNewPost} = props;

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
                <Field placeholder='New post text' component='textarea' name='newPostText'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
