const initializer = {
  isLoading: false,
  productsList: null,
  error: null,
};

export const ECommerceReducer = (state = initializer, action) => {
  switch (action.type) {
    case "FETCH_E_COMMERCE_API_REQUEST":
      console.log("success");
      return {
        ...state,
        isLoading: true,
      };

    case "FETCHING_E_COMMERCE_API_REQUEST_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        productsList: action.payload,
        isLoading: false,
      };
    case "FETCHING_E_COMMERCE_API_REQUEST_FAILURE":
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return {
        state,
      };
  }
};
