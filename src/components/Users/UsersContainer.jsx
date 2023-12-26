import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import React, {Component} from "react";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(error => {
                alert(`Error occurred: ${error}`);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => {
                alert(`Error occurred: ${error}`);
            })
    }


    render() {
        return (
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   totalUserCount={this.props.totalUserCount}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}

            />
        );
    }
}


function mapState(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

function mapDispatch(dispatch) {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapState, mapDispatch)(UsersContainer)