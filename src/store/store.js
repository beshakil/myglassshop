import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";
import wishlistSlice from "./wishlistSlice";
import productDetailsSlice from "./productDetailsSlice";
import userSlice from "./userSlice";
import filtersSlice from "./filtersSlice";
import usersListSlice from "./usersListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    wishlist: wishlistSlice,
    productDetails: productDetailsSlice,
    user: userSlice,
    filters: filtersSlice,
    usersList: usersListSlice,
  },
});

export default store;
