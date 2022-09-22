import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
