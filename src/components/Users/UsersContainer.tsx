import {connect} from "react-redux";
import {Component} from "react";
import Preloader from "../common/Preloader/Preloader";
import {follow, pageChange, requestUsers, unfollow} from "../../redux/users-reducer.ts";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";
import {compose} from "redux";
// @ts-ignore
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors.ts";
import Users from "./Users.tsx";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropTypes = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUserCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    pageChange: (pageNumber: number, pageSize: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropTypes & MapDispatchPropType & OwnPropsType

class UsersContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
    }


    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : (
                        <Users currentPage={this.props.currentPage}
                               onPageChanged={this.onPageChanged}
                               totalUserCount={this.props.totalUserCount}
                               unfollow={this.props.unfollow}
                               follow={this.props.follow}
                               users={this.props.users}
                               followingInProgress={this.props.followingInProgress}
                        />
                    )
                }
            </>
        );
    }
}

function mapState(state: AppStateType): MapStatePropTypes {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect<MapStatePropTypes, MapDispatchPropType, OwnPropsType, AppStateType>(mapState, {
        unfollow,
        follow,
        requestUsers,
        pageChange
    }),
    withAuthRedirect
)(UsersContainer)