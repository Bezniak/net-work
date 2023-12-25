import React from 'react';
import s from './Users.module.css';
import {MdOutlinePhotoCamera} from "react-icons/md";
import {SearchInput} from "../common/SearchInput/SearchInput";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";
import axios from "axios";


export const Users = (props) => {


    let getUsers = () => {
        {
            if (props.users.length === 0) {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                    .then(response => {
                        props.setUsers(response.data.items)
                    })
            }
        }
    }


    return (
        <>
            <button className='btn' onClick={getUsers}>Get user</button>
            <SearchInput/>
            <div className={s.userBlock}>
                {
                    props.users.map(u => (
                        <div key={u.id} className={s.userContainer}>
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
        </>
    );
};

