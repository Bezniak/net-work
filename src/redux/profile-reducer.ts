import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
const SET_ERRORS = 'SET_ERRORS';





let newPostId = 4;
const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    errors: [],
}

export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: newPostId++, message: action.post, likeCounts: 0,}]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        case UPDATE_PROFILE_INFO:
            return {
                ...state,
                profile: {...state.profile,}
            }

        case SET_ERRORS:
            return {
                ...state,
                errors: action.messages,
            }

        default:
            return state
    }

}


type AddPostActionType = {
    type: typeof ADD_POST
    post: string
}
export const addPost = (post: string): AddPostActionType => ({type: ADD_POST, post});


type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})


type SetStatus = {
    type: typeof SET_STATUS
    status: string
}
const setStatus = (status: string): SetStatus => ({type: SET_STATUS, status})


type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})


type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


type ProfileErrorsActionType = {
    type: typeof SET_ERRORS
    messages: string
}
const profileErrors = (messages: string): ProfileErrorsActionType => ({type: SET_ERRORS, messages})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(res.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let res = await profileAPI.updateStatus(status);

        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let res = await profileAPI.savePhoto(file);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;

    const res = await profileAPI.saveProfile(profile);

    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(profileErrors(res.data.messages))
    }
}

