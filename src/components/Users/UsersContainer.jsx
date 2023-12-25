import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

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


export default connect(mapState, mapDispatch)(Users)