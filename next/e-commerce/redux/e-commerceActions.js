import axios from "axios";

export const fetchECommerceAPI = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_E_COMMERCE_API_REQUEST" });
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: "FETCHING_E_COMMERCE_API_REQUEST_SUCCESS",
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCHING_E_COMMERCE_API_REQUEST_FAILURE",
          payload: error,
        });
      });
  };
};
