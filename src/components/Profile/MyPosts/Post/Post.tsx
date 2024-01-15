// @ts-ignore
import React, {FC, useState} from 'react';
// @ts-ignore
import s from './Post.module.css';
import {BiLike, BiSolidLike} from "react-icons/bi";
import {FaUser} from "react-icons/fa";


type PropsType = {
    message: string
    likeCounts: number
}

const Post: FC<PropsType> = ({message, likeCounts}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(+likeCounts);


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
                <div>{message}</div>
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