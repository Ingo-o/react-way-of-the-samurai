import css from "./Profile.module.css";
import pirate_island from "./../images/pirate_island.jpg";

const Profile = () => {
  return (
    <div className={css.content}>
      <div>
        <img
          className="pirate island"
          src={pirate_island}
          alt="Pirate island"
        ></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={css.posts}>
          <div className={css.item}>post 1</div>
          <div className={css.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
