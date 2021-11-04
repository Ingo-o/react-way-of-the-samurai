import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const {createStore} = require("redux");

// Преобразуем объект с данными и редьюсерами в одну функцию.
let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
});

// При помощи вышесозданной функции создаём store.
let store = createStore(reducers);

window.store = store;
export default store;