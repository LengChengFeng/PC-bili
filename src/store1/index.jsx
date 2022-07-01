import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import ThunkMiddleware from "redux-thunk";

const storeEnhancer = applyMiddleware(ThunkMiddleware);
// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
let store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
