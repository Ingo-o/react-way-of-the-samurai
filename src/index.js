import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewPost, updateNewPostText} from "./redux/state"; // ЦИКЛИЧЕСКАЯ ЗАВИСИМОСТЬ!
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
