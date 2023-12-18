import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="BGimg.jpg" alt="bg" className={s.profileImg}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    );
};

export default ProfileInfo;