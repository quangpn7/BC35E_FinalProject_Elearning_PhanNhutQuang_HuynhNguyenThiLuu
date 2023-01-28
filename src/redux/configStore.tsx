import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer/courseReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    courseReducer: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
