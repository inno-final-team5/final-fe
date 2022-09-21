import { configureStore } from "@reduxjs/toolkit";
import challengeSlice from "redux/modules/challenge";

const store = configureStore({
  reducer: {
    challengeSlice,
  },
});

export default store;
