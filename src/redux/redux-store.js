import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import blocksReducer from "./blocks-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    EthBlock: blocksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;