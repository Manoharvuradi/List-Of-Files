import { ECommerceReducer } from "./redux/e-commerceReducer";
import { configureStore } from "@reduxjs/toolkit";
import { addOrRemoveItemToCartReducer } from "./redux-cart/cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  eCommerceAPIData: ECommerceReducer,
  addItemToCart: addOrRemoveItemToCartReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // reducer: { eCommerceAPIData: ECommerceReducer },
});
