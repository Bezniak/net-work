import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import {initializeApp} from "./redux/app-reducer.ts";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.tsx'));


const App = (props) => {

    useEffect(() => {

        props.initializeApp();

        const catchAllUnhandledErrors = (promiseRejectionEvent) => {
            alert(`Some error occurred: ${promiseRejectionEvent}`)
            console.log(promiseRejectionEvent)
        }


        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
        }

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

const mapState = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    connect(mapState, {initializeApp})
)(App);