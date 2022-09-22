import { configureStore } from "@reduxjs/toolkit";

import challengeSlice from "redux/modules/challenge";
import favoriteSlice from "redux/modules/myFavorite";
const store = configureStore({
  reducer: {
    favoriteSlice,
    challengeSlice,
  },
});

export default store;
