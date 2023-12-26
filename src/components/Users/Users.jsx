import React from 'react';
import {SearchInput} from "../common/SearchInput/SearchInput";
import Pagination from "../common/Pagination/Pagination";
import s from "./Users.module.css";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";

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

                                <div className={s.photoButtonBlock}>
                                    {u.photos.small
                                        ? <img src={u.photos.small} alt="ava"/>
                                        : <MdOutlinePhotoCamera className={s.userSVG}/>
                                    }
                                </div>


                                <div className={s.userInfo}>
                                    <div className={s.userNameStatus}>
                                        <div className={s.fullName}>{u.name}</div>
                                    </div>

                                    <div className={s.friendButton}>
                                        {u.followed
                                            ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}><IoPersonRemoveSharp/></button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
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

        </div>
    );
};

export default Users;