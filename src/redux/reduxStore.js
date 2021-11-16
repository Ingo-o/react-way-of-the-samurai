import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const {createStore} = require("redux");

// Преобразуем объект с данными и редьюсерами в одну функцию.
let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    usersState: usersReducer,
    authState: authReducer,
});

// При помощи вышесозданной функции создаём store.
let store = createStore(reducers);

window.store = store;
export default store;