import css from "./Post.module.css";
import ava_cartman from "./ava_cartman.jpg";

const Post = (props) => {
  const { message, numberOfLikes } = props;
  return (
    <div className={css.item}>
      <img src={ava_cartman} />
      {message}
      <div>
        <span>Likes: {numberOfLikes}</span>
      </div>
    </div>
  );
};

export default Post;
