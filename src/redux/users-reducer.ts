// @ts-ignore
import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
// @ts-ignore
import {usersAPI} from "../api/users-api.ts";
// @ts-ignore
import {followAPI} from "../api/follow-api.ts";
// @ts-ignore
import {ResultCodeEnum} from "../api/api.ts";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 40,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // array of users ids
}


export const usersReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: action.users,
            }

        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }

        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUserCount: action.count,
            }
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}


export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),

    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),

    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),

    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),

    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),

    toggleFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}


export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleFetching(true))
        dispatch(actions.setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(actions.toggleFetching(false))
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

export const pageChange = (pageNumber: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.setCurrentPage(pageNumber));
        dispatch(actions.toggleFetching(true));

        let data = await usersAPI.getUsers(pageNumber, pageSize);

        dispatch(actions.toggleFetching(false));
        dispatch(actions.setUsers(data.items));
    }
}

export const follow = (userId: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await followAPI.follow(userId);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const unfollow = (userId: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await followAPI.unfollow(userId);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}


export type InitialState = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
