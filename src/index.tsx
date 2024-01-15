// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
import {store} from "./redux/redux-store.ts";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();




















