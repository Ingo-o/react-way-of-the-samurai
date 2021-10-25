import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {posts} = props.profileState;
    const {addPost} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;
