import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo savePhoto={savePhoto}
                         isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
                         saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
