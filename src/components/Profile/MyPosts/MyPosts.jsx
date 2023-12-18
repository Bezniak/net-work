import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likeCounts='10'/>
            <Post message="It's my first post!" likeCounts='15'/>
        </div>
    );
};

export default MyPosts;