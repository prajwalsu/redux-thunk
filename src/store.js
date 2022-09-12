import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import { userReducer } from "./redux/reducers/UserReducer";

// import {userReducer} from "../redux/reducers/userReducer";

const rootReducer = combineReducers({
    userList: userReducer,
});
const middlware = [thunk]; //it is an array
const initionalState = {};

const store=createStore(
    rootReducer,
    initionalState,
    applyMiddleware(...middlware)
);

export default store;


