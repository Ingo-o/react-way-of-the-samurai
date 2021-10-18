import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message="Aboard!" likesCount="10"/>
                <Post message="I am not fat i'm big boned!" likesCount="15"/>
            </div>
        </div>
    );
};

export default MyPosts;
