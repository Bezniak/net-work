// @ts-ignore
import MyPostsMemorized, {DispatchPropsType, MapPropsType} from "./MyPosts.tsx";
// @ts-ignore
import {actions} from "../../../redux/profile-reducer.ts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapState = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>
(mapState, {addPost: actions.addPost})(MyPostsMemorized);

