import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
    const {profile, status, updateUserStatus, isOwner, savePhoto} = props;
    return (
        <div>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
