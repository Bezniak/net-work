import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../storeContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextAC(text));
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;