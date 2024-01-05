import React from 'react';
import s from "./Users.module.css";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow,}) => {

    return (
        <div className={s.userBlock}>
            <div className={s.userContainer}>
                <div className={s.usersWrapper} key={user.id}>

                    <NavLink to={'/profile/' + user.id}>
                        <div className={s.photoButtonBlock}>
                            {user.photos.small
                                ? <img src={user.photos.small} alt="ava"/>
                                : <MdOutlinePhotoCamera className={s.userSVG}/>
                            }
                        </div>
                    </NavLink>


                    <div className={s.userInfo}>

                        <NavLink to={'/profile/' + user.id}>
                            <div className={s.userNameStatus}>
                                <div className={s.fullName}>{user.name}</div>
                            </div>
                        </NavLink>

                        <div className={s.friendButton}>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>
                                    <IoPersonRemoveSharp
                                        style={followingInProgress.some(id => id === user.id) ? {color: "gray"} : ''}/>
                                </button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}><IoPersonAddSharp
                                    style={followingInProgress.some(id => id === user.id) ? {color: "gray"} : ''}/>
                                </button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;