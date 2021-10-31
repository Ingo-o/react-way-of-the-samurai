import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const {posts, newPostText} = props.profileState;
    const {updateNewPostText, addNewPost} = props;

    const postItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addNewPostButtonClick = () => addNewPost();

    const textAreaChange = (e) => {
        const text = e.target.value;
        updateNewPostText(text);
    };

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='New post text' onChange={textAreaChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={addNewPostButtonClick}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>{postItems}</div>
        </div>
    );
};

export default MyPosts;
