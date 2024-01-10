import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profile-reducer.ts";
import {connect} from "react-redux";


const mapState = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export const MyPostsContainer = connect(mapState, {addPost})(MyPosts);

