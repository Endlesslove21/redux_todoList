import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const conposedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, conposedEnhancers);

export default store;
