import css from "./Profile.module.css";
import pirate_island from "./pirate_island.jpg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={css.pirate_island}
          src={pirate_island}
          alt="Pirate island"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
