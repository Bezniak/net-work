import React from 'react';
import s from './Users.module.css';
import {MdOutlinePhotoCamera} from "react-icons/md";
import {SearchInput} from "../common/SearchInput/SearchInput";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";


export const Users = (props) => {

    return (
        <>
            <SearchInput/>
            <div className={s.userBlock}>
                {
                    props.users.map(u => (
                        <div key={u.id} className={s.userContainer}>
                            <div className={s.usersWrapper} key={u.id}>

                                <div className={s.photoButtonBlock}>
                                    {u.photoUrl
                                        ? <img src={u.photoUrl} alt="ava"/>
                                        : <MdOutlinePhotoCamera className={s.userSVG}/>
                                    }
                                </div>


                                <div className={s.userInfo}>
                                    <div className={s.userNameStatus}>
                                        <div className={s.fullName}>{u.fullName}</div>
                                        <div className={s.status}>{u.status}</div>
                                    </div>

                                    <div className={s.friendButton}>
                                        {u.followed
                                            ? <button onClick={() => {props.unfollow(u.id)}}><IoPersonRemoveSharp/></button>
                                            : <button onClick={() => {props.follow(u.id)}}><IoPersonAddSharp/></button>
                                        }
                                    </div>

                                    {/*<div>*/}
                                    {/*    <div>{u.location.country},</div>*/}
                                    {/*    <div>{u.location.city}</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

