import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./mySlice";

export const store = configureStore({
  reducer: {
    location: myReducer,
  },
});
