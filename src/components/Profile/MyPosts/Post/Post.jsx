import css from "./Post.module.css";
import ava_cartman from "./ava_cartman.jpg";

const Post = (props) => {
  const { message } = props;
  return (
    <div className={css.item}>
      <img src={ava_cartman} />
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
