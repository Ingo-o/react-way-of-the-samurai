import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {profileState, dispatch} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profileState={profileState} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;
