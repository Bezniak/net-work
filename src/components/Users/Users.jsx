import React from 'react';
import {SearchInput} from '../common/SearchInput/SearchInput';
import Pagination from '../common/Pagination/Pagination';
import s from './Users.module.css';
import User from './User';

const Users = (props) => {
    return (<div>
            <SearchInput/>

            <Pagination
                currentPage={props.currentPage}
                onPageChange={props.onPageChanged}
                totalPages={props.totalUserCount}
            />

            <div className={s.userBlock}>
                {props.users.map((u) => (<User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />))}
            </div>

            <Pagination
                currentPage={props.currentPage}
                onPageChange={props.onPageChanged}
                totalPages={props.totalUserCount}
            />
        </div>);
};

export default Users;