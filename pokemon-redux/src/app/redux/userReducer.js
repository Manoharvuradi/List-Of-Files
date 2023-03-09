import { userActionTypes } from "./action-types";

const initialState = {
  users: [],
};

export const usersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return {
        state,
      };
  }
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case userActionTypes.SELECTED_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return {
        state,
      };
  }
};
