// @ts-ignore
import {PostType, ProfileType} from "../types/types.ts";
// @ts-ignore
import { BaseThunkType, InferActionsTypes} from "./redux-store.ts";
// @ts-ignore
import {profileAPI} from "../api/profile-api.ts";
// @ts-ignore
import {ResultCodeEnum} from "../api/api.ts";


let newPostId = 4;
const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    errors: [] as Array<string> | string,
}


export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, {id: newPostId++, message: action.post, likeCounts: 0,}]
            }
        }

        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case 'SET_STATUS':
            return {
                ...state,
                status: action.status,
            }

        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.messages,
            }

        default:
            return state
    }

}


export const actions = {
    addPost: (post: string) => ({type: 'ADD_POST', post} as const),

    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),

    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),

    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),

    savePhotoSuccess: (photos: any) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),

    profileErrors: (messages: Array<string>) => ({type: 'SET_ERRORS', messages} as const),
}



export const getUserProfile = (userId: number): ThunkType => async (dispatch, getState) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(res));
}

export const getStatus = (userId: number): ThunkType => async (dispatch, getState) => {
    let res = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(res))
}

export const updateStatus = (status: string): ThunkType => async (dispatch, getState) => {
    try {
        let res = await profileAPI.updateStatus(status);

        if (res.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setStatus(status))
        }

    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch, getState) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === ResultCodeEnum.Success) {
        if (userId !== null) {
            await dispatch(getUserProfile(userId))
        } else {
            throw new Error('userId can\'t be null')
        }
    } else {
        dispatch(actions.profileErrors(data.messages))
    }
}



export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
