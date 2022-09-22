import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import users from '../modules/userSlice';

const middlewares = [thunk];

const rootReducer = combineReducers({ users: users });

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
