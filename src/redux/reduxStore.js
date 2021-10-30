import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
const {createStore} = require("redux");

let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
});

let store = createStore(reducers);

export default store;