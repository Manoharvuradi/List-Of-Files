// import { fetchUsers } from "./pokemonActions";
import { userTypes } from "./pokemonTypes";
const initialState = {
  isLoading: false,
  pokeMonsList: [],
  error: null,
};

const pokeMonReducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case userTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userTypes.FETCH_USERS_SUCCESS:
      console.log(action.payload.pokeMonsList);
      return {
        ...state,
        isLoading: false,
        pokeMonsList: action.payload.pokeMonsList,
      };

    case userTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return {
        state,
      };
  }
};
export default pokeMonReducer;

// const pokeManReducer = (state = initialState, action) => {
//   console.log(action.payload);
//   console.log(action.type);
//   switch (action.type) {
//     case "FETCH_USERS_REQUEST":
//       console.log(action.payload);
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "FETCH_USERS_SUCCESS":
//       console.log(action.payload);
//       return {
//         ...state,
//         pokeMonsList: action.payload,
//         isLoading: false,
//       };
//     case "FETCH_USERS_ERROR":
//       console.log(action.payload);
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };
