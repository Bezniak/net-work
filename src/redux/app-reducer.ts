// @ts-ignore
import {getAuthUserData} from "./auth-reducer.ts";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState


type ActionsType = InitializedSuccessActionType // add any other action type ... | ...

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}


type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


export const initializeApp = (): ThunkType => async (dispatch, getState) => {
    try {
        await dispatch(getAuthUserData());
        dispatch(initializedSuccess());
    } catch (error) {
        console.error("Initialization failed:", error);
    }

};


export default appReducer;