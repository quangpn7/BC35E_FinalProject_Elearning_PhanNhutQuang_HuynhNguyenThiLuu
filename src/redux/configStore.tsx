import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
