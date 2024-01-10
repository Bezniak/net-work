import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer.ts";
import {sidebarReducer} from "./sidebar-reducer.ts";
import {usersReducer} from "./users-reducer.ts";
import {authReducer} from "./auth-reducer.ts";
import {thunk} from "redux-thunk";
import appReducer from "./app-reducer.ts";
import {dialogsReducer} from "./dialogs-reducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

window.store = store;