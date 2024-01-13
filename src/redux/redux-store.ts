import {applyMiddleware, combineReducers, compose, createStore} from "redux";
// @ts-ignore
import {profileReducer} from "./profile-reducer.ts";
// @ts-ignore
import {sidebarReducer} from "./sidebar-reducer.ts";
// @ts-ignore
import {usersReducer} from "./users-reducer.ts";
// @ts-ignore
import {authReducer} from "./auth-reducer.ts";
import {thunk} from "redux-thunk";
// @ts-ignore
import appReducer from "./app-reducer.ts";
// @ts-ignore
import {dialogsReducer} from "./dialogs-reducer.ts";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});


type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// @ts-ignore
window.store = store;