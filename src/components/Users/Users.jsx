import React, {Component} from 'react';
import {SearchInput} from "../common/SearchInput/SearchInput";
import s from "./Users.module.css";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {IoPersonAddSharp, IoPersonRemoveSharp} from "react-icons/io5";
import axios from "axios";

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <SearchInput/>
                <div className={s.userBlock}>
                    {
                        this.props.users.map((u, index) => (
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
                                                    this.props.unfollow(u.id)
                                                }}><IoPersonRemoveSharp/></button>
                                                : <button onClick={() => {
                                                    this.props.follow(u.id)
                                                }}><IoPersonAddSharp/></button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Users;