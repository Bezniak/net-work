import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
    return (<div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile profilePage={props.state.profilePage}
                                             addPost={props.addPost}
                                             updateNewPostText={props.updateNewPostText}/>}
                    />
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                             updateNewMessageText={props.updateNewMessageText}
                                                             sendMessage={props.sendMessage}/>}
                    />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;