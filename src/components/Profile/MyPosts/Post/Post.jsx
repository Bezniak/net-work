import React, {useState} from 'react';
import s from './Post.module.css';
import {BiLike, BiSolidLike} from "react-icons/bi";
import {FaUser} from "react-icons/fa";


const Post = (props) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(+props.likeCounts);


    const onLikedChanged = () => {
        setIsLiked(prevState => !prevState)
        if (!isLiked) {
            setLikeCount(likeCount + 1)
        } else {
            setLikeCount(likeCount - 1)
        }
    }

    return (
        <div className={s.postWrapper}>
            <div className={s.postContainer}>
                <FaUser className={s.noAvatarPhoto}/>
                <div>{props.message}</div>
            </div>
            <div>
                <div className={s.likeContainer}>
                    {
                        isLiked
                            ? <BiSolidLike onClick={onLikedChanged} className={s.like} fill='#3b5998'/>
                            : <BiLike onClick={onLikedChanged} className={s.like}/>
                    }

                    <div>{likeCount}</div>
                </div>
            </div>
        </div>

    );
};

export default Post;