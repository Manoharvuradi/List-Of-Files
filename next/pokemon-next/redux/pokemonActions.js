import { userTypes } from "./pokemonTypes";
import axios from "axios";
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: userTypes.FETCH_USERS_REQUEST });
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=100"
      );
      dispatch({
        type: userTypes.FETCH_USERS_SUCCESS,
        payload: { pokeMonsList: response },
      });
    } catch (e) {
      dispatch({
        type: userTypes.FETCH_USERS_ERROR,
        payload: { error: error.message },
      });
    }
  };
};

export const fetchSelectedUser = () => {
  return async (dispatch) => {
    dispatch({});
    try {
      dispatch({});
    } catch (e) {
      dispatch({});
    }
  };
};
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     dispatch({ type: "FETCH_USERS_REQUEST" });
//     try {
//       const response = await fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=100&offset=100"
//       );
//       const info = response.json();
//       console.log(info);
//       dispatch({ type: "FETCH_USERS_SUCCESS", payload: info });
//     } catch (error) {
//       dispatch({ type: "FETCH_USERS_ERROR", payload: error.message });
//     } finally {
//     }
//   };
// };
