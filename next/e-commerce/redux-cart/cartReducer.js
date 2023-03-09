const initialState = {
  items: [],
  quantity: 1,
  noOfItems: 0,
};

export const addOrRemoveItemToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        noOfItems: state.noOfItems + 1,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEMS_FROM_CART":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
        noOfItems: state.noOfItems - 1,
      };

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            action.counter += 1;
          }
        }),
      };

    case "DECREMENT":
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return {
        ...state,
      };
  }
};
