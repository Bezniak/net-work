import {followAPI, usersAPI} from "../api/api";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 40,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // array of users ids
}

type InitialState = typeof initialState

export const usersReducer = (state = initialState, action: any): InitialState => {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});


type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId});


type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});


type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});


type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});


type ToggleFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});


type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
    userId: number
}
const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const pageChange = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetching(true));

    let data = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
}

export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await followAPI.follow(userId);
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await followAPI.unfollow(userId);
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

