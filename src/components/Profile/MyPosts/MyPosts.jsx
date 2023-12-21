import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextAC(text));
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className='textarea'
                              ref={newPostElement}
                              name="newPost"
                              value={props.newPostText}
                              onChange={onPostChange}
                              id="newPost"
                              placeholder='Say something...'
                    />
                </div>
                <div>
                    <button className='btn' onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;