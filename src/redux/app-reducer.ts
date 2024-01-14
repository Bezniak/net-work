// @ts-ignore
import {getAuthUserData} from "./auth-reducer.ts";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";


const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState


type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const),
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkType => async (dispatch, getState) => {
    try {
        await dispatch(getAuthUserData());
        dispatch(actions.initializedSuccess());
    } catch (error) {
        console.error("Initialization failed:", error);
    }

};


export default appReducer;