import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers, selectedUserReducer } from "./redux/userReducer";

const reducers = combineReducers({
  allUsers: usersReducers,
  individualUser: selectedUserReducer,
});

const Store = configureStore({ reducer: reducers });
export default Store;
