import css from "./Post.module.css";
import ava_cartman from "./ava_cartman.jpg";

const Post = () => {
  return (
    <div className={css.item}>
      <img src={ava_cartman} />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
