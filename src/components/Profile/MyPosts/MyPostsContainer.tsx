// @ts-ignore
import MyPosts from "./MyPosts.tsx";
// @ts-ignore
import {actions} from "../../../redux/profile-reducer.ts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapState = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export const MyPostsContainer = connect(mapState,
    {addPost: actions.addPost})(MyPosts);

