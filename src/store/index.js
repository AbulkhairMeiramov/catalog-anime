import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth";
import { catalogReducer } from "./slice/catalog";

const store = configureStore({
  reducer: {
    catalog: catalogReducer, 
    auth: authReducer }
});

// store.subscribe(() => {
//   localStorage.setItem("basket", JSON.stringify(store.getState().shop.basket));
// });

export default store;
