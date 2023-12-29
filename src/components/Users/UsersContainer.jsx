import {connect} from "react-redux";
import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {follow, getUsers, pageChange, unfollow} from "../../redux/users-reducer";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
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


function mapState(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapState, {
    unfollow,
    follow,
    getUsers,
    pageChange,
})(withRedirect)