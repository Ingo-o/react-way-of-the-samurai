import pirate_island from "./images/pirate_island.jpg";

const Profile = () => {
  return (
    <div className="content">
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
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
