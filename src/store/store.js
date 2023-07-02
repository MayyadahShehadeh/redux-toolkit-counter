import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import counterReducer from '../counter/counterSlice';

const reducers = combineReducers({counter: counterReducer });

export const store = configureStore({reducer: reducers});