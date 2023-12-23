import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }


    return (
        <div>
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
            />
        </div>
    );
};

export default MyPostsContainer;