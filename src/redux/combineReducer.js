import { combineReducers } from "redux";
import { reducer , basketReducer } from "./reducer";

const rootReducer = combineReducers({
  login: reducer,
  book: basketReducer
})

export default rootReducer