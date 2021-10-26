import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {profileState, addNewPost, updateNewPostText} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profileState={profileState} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
        </div>
    );
};

export default Profile;
