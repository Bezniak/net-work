// @ts-ignore
import {followAPI, ResultCodeEnum, usersAPI} from "../api/api.ts";
import {UserType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 40,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // array of users ids
}

type InitialState = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }

        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUserCount: action.count,
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),

    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),

    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),

    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),

    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),

    toggleFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

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

