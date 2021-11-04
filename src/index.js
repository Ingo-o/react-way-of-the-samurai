import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    // Для использования компоненты Route нужно обернуть код в котором она присутствует в BrowserRouter.
    // Provider оборачивает основной компонент приложения и делает store доступным для дочерних компонент.
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
