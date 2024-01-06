import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import MoreDetails from "./components/Profile/ProfileInfo/ProfileInfoComponents/MoreDetails/MoreDetails";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


const App = (props) => {


    useEffect(() => {
        props.initializeApp();
    }, []);

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
                    <Route path='login' element={<Login/>}/>
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