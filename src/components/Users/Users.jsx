import React from 'react';
import {SearchInput} from "../common/SearchInput/SearchInput";
import Pagination from "../common/Pagination/Pagination";
import s from "./Users.module.css";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {

    return (
        <div>
            <SearchInput/>

            <Pagination currentPage={props.currentPage} onPageChange={props.onPageChanged}
                        totalPages={props.totalUserCount}/>

            <div className={s.userBlock}>
                {
                    props.users.map((u, index) => (
                        <div key={`${u.id}-${index}`} className={s.userContainer}>
                            <div className={s.usersWrapper} key={u.id}>

                                <NavLink to={'/profile/' + u.id}>
                                    <div className={s.photoButtonBlock}>
                                        {u.photos.small
                                            ? <img src={u.photos.small} alt="ava"/>
                                            : <MdOutlinePhotoCamera className={s.userSVG}/>
                                        }
                                    </div>
                                </NavLink>


                                <div className={s.userInfo}>

                                    <NavLink to={'/profile/' + u.id}>
                                        <div className={s.userNameStatus}>
                                            <div className={s.fullName}>{u.name}</div>
                                        </div>
                                    </NavLink>

                                    <div className={s.friendButton}>
                                        {u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                props.toggleFollowingProgress(true, u.id);
                                                followAPI.unfollow(u.id)
                                                    .then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.unfollow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false, u.id);
                                                    })
                                            }}><IoPersonRemoveSharp style={props.followingInProgress.some(id => id === u.id) ? {color: "gray"} : ''}/></button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                props.toggleFollowingProgress(true, u.id);
                                                followAPI.follow(u.id)
                                                    .then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false, u.id);
                                                    })
                                            }}><IoPersonAddSharp style={props.followingInProgress.some(id => id === u.id) ? {color: "gray"} : ''}/></button>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Pagination currentPage={props.currentPage} onPageChange={props.onPageChanged}
                        totalPages={props.totalUserCount}/>

        </div>)
}

export default Users;