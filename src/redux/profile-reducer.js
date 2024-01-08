import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';


let newPostId = 4;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ],
    profile: null,
    status: '',
}
export const profileReducer = (state = initialState, action) => {

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

        default:
            return state
    }

}


export const addPost = (post) => ({type: ADD_POST, post});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => async (dispatch) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(res.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let res = await profileAPI.savePhoto(file);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const res = await profileAPI.saveProfile(profile);

    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

