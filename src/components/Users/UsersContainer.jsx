import {connect} from "react-redux";
import React, {Component} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    unfollow
} from "../../redux/users-reducer";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(error => {
                alert(`Error occurred: ${error}`);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
            })
            .catch(error => {
                alert(`Error occurred: ${error}`);
            })
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
    }
}

export default connect(mapState, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
})(UsersContainer)