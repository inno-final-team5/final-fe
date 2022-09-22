import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import SignupReducer from "../modules/SignupSlice";
import thunk from "redux-thunk";

const middlewares = [thunk];
// 리듀서 통합
const rootReducer = combineReducers({
  // signup: SignupReducer,
});
// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;