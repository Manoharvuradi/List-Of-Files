import { userActionTypes } from "./action-types";
export const setUsers = (users) => {
  return {
    type: userActionTypes.SET_USERS,
    payload: users,
  };
};

export const selectedUser = (user) => {
  console.log(user);
  return {
    type: userActionTypes.SELECTED_USER,
    payload: user,
  };
};
