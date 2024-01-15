// @ts-ignore
import React, {FC, memo} from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
// @ts-ignore
import Post from "./Post/Post.tsx";
// @ts-ignore
import DialogsForm from "../../common/DialogsForm/DialogsForm.tsx";
import {PostType} from "../../../types/types";
// @ts-ignore


type PropsType = {
    posts: Array<PostType>
    addPost: (data: any) => void
}

const MyPosts: FC<PropsType> = memo((props) => {

    let postsElement = [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id}/>)

    const onAddPost = (data: any) => {
        props.addPost(data);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <DialogsForm onSend={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
});

export default MyPosts;