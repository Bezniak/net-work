import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Ivan'},
];

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'Yo'},
]

const posts = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 169},
    {id: 2, message: 'It\'s my first post!', likeCounts: 57},
    {id: 3, message: 'Yo', likeCounts: 232},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
