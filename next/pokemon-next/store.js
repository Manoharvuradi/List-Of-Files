import { configureStore } from "@reduxjs/toolkit";
import pokeManReducer from "./redux/pokemonReducer";

export const store = configureStore({
  reducer: { allUsers: pokeManReducer },
});
