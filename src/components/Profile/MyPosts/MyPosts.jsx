import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    const {posts, newPostText} = props.profileState;
    const {dispatch} = props;

    const postItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        dispatch(addNewPostActionCreator());
    };

    const textAreaChange = (e) => {
        const text = e.target.value;
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='New post text' onChange={textAreaChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>{postItems}</div>
        </div>
    );
};

export default MyPosts;
