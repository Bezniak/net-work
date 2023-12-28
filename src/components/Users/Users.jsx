import React from 'react';
import {SearchInput} from "../common/SearchInput/SearchInput";
import Pagination from "../common/Pagination/Pagination";
import s from "./Users.module.css";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                            ? <button onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '9ba4d78e-4f34-47ac-8b5f-12c640cd08f8'
                                                    }
                                                })
                                                    .then(res => {
                                                        if (res.data.resultCode === 0) {
                                                            props.unfollow(u.id)
                                                        }
                                                    })
                                            }}><IoPersonRemoveSharp/></button>
                                            : <button onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '9ba4d78e-4f34-47ac-8b5f-12c640cd08f8'
                                                    }
                                                })
                                                    .then(res => {
                                                        if (res.data.resultCode === 0) {
                                                            props.follow(u.id)
                                                        }
                                                    })
                                            }}><IoPersonAddSharp/></button>
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