import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={css.posts}>
        <Post message="Aboard!" numberOfLikes="10" />
        <Post message="I am not fat i'm big boned!" numberOfLikes="15" />
      </div>
    </div>
  );
};

export default MyPosts;
