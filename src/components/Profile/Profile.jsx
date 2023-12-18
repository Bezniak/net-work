import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="BGimg.jpg" alt="bg" className={s.profileImg}/>
            </div>
            <div>
                ava + descriptions
            </div>
            <MyPosts/>
        </div>

    );
};

export default Profile;