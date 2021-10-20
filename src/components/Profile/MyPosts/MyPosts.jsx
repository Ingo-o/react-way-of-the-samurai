import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const { posts } = props;
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
                {posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;
