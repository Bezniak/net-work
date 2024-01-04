import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import DialogsForm from "../../common/DialogsForm/DialogsForm";

const MyPosts = React.memo((props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id}/>)

    const onAddPost = (data) => {
        props.addPost(data);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <DialogsForm onSend={onAddPost} submit={'Add post'}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
});

export default MyPosts;