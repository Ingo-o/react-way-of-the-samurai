import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const {posts} = props;
    const postItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostArea = React.createRef();

    const addPost = () => {
        const text = newPostArea.current.value;
        props.addPost(text);
    };

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostArea}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postItems}
            </div>
        </div>
    );
};

export default MyPosts;
