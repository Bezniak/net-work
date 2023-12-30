import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const GET_STATUS = 'GET_STATUS';


let newPostId = 4;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 169},
        {id: 2, message: 'It\'s my first post!', likeCounts: 57},
        {id: 3, message: 'Yo', likeCounts: 232},
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    profileStatus: '',
}
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: newPostId++, message: state.newPostText, likeCounts: 0,}]
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            }

        case GET_STATUS:
            return {
                ...state,
                profileStatus: action.status,
            }

        default:
            return state
    }

}


export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const toggleIsFetching = (value) => ({type: SET_TOGGLE_IS_FETCHING, value});

const setStatus = (status) => ({type: GET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(res.data));
        });
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(toggleIsFetching(false))
            dispatch(setStatus(res.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.updateStatus(status)
        .then(response => {
            dispatch(toggleIsFetching(false));
            if (response.resultCode ===0) {
                dispatch(setStatus(status))
            }
        })
}

