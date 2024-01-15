// @ts-ignore
import React, {FC, Suspense, useEffect} from 'react';
import './App.css';
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
// @ts-ignore
import News from "./components/News/News.tsx";
// @ts-ignore
import Music from "./components/Music/Music.tsx";
// @ts-ignore
import Settings from "./components/Settings/Settings.tsx";
// @ts-ignore
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
// @ts-ignore
import Login from "./components/Login/Login.tsx";
// @ts-ignore
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import {connect} from "react-redux";
import {compose} from "redux";
// @ts-ignore
import Preloader from "./components/common/Preloader/Preloader.tsx";
// @ts-ignore
import NotFound from "./components/NotFound/NotFound.tsx";
// @ts-ignore
import {initializeApp} from "./redux/app-reducer.ts";
import {AppStateType} from "./redux/redux-store";


// @ts-ignore
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));
// @ts-ignore
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.tsx'));


type MapPropsType = ReturnType<typeof mapState>
type DispatchPropsType = {
    initializeApp: () => void
}

const App: FC<MapPropsType & DispatchPropsType> = (props) => {

    useEffect(() => {

        props.initializeApp();

    }, [props.initialized]);

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:id?' element={<ProfileContainer/>}/>
                    <Route path='/users'
                           element={
                               <Suspense>
                                   <UsersContainer/>
                               </Suspense>}/>
                    <Route path='/dialogs'
                           element={
                               <Suspense fallback={<Preloader/>}>
                                   <DialogsContainer/>
                               </Suspense>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/' element={<Navigate to='/profile'/>}/>
                </Routes>
            </div>
        </div>

    )
}

const mapState = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose<React.ComponentType>(
    connect(mapState, {initializeApp})
)(App);