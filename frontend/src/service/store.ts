import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./reducer";

const store = configureStore({
	reducer: dataReducer,
	middleware: [thunkMiddleware],
});

export default store;
