import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/rootReducer";

// const rootReducer = combineReducers({
//   login: loginReducer,
// });

const store = createStore(
  loginReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;