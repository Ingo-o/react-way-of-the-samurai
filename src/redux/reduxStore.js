import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";

const {createStore} = require("redux");

// Преобразуем объект с данными и редьюсерами в одну функцию.
let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    usersState: usersReducer,
    authState: authReducer,
    appState: appReducer,
    form: formReducer, // Reducer библиотеки redux-form (state должен называться именно form).
});

// При помощи созданной выше функции создаём store.
// applyMiddleware - создание промежуточного слоя для использования thunks.
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;