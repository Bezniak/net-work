import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageSize: 40,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state
    }
}


const followSuccess = (userId) => ({type: FOLLOW, userId});
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const requestUsers = (page, pageSize) => (dispatch) => {
    dispatch(toggleFetching(true))

    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(toggleFetching(false))
            dispatch(setCurrentPage(page))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
        .catch(error => {
            alert(`Error occurred: ${error}`);
        })
}

export const pageChange = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetching(true));
    usersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
        })
        .catch(error => {
            alert(`Error occurred: ${error}`);
        })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
}