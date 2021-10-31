import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const {profileState} = store.getState();
                    const {dispatch} = store;
                    const addNewPost = () => dispatch(addNewPostActionCreator());
                    const updateNewPostText = (text) => dispatch(updateNewPostTextActionCreator(text));

                    return <MyPosts updateNewPostText={updateNewPostText} addNewPost={addNewPost}
                                    profileState={profileState}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
