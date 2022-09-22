import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "redux/modules/myFavorite";

const store = configureStore({
  reducer: {
    favoriteSlice,
  },
});

export default store;

