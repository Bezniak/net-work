import {FC} from 'react';
import {SearchInput} from '../common/SearchInput/SearchInput';
// @ts-ignore
import s from './Users.module.css';
import User from './User';
import {UserType} from "../../types/types";
// @ts-ignore
import {Pagination} from "../common/Pagination/Pagination.tsx";


type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUserCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
const Users: FC<PropsType> = ({
                                  currentPage,
                                  onPageChanged,
                                  totalUserCount,
                                  users,
                                  followingInProgress,
                                  follow,
                                  unfollow,
                                  ...props
                              }) => {
    return (
        <div>
            <SearchInput/>

            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChanged}
                totalPages={totalUserCount}
            />

            <div className={s.userBlock}>
                {users.map((u) => (<User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                />))}
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChanged}
                totalPages={totalUserCount}
            />
        </div>);
};

export default Users;