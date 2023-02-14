import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer/courseReducer";
import userManageReducer from "./reducer/userManageReducer";
import userReducer from "./reducer/userReducer";
import modalReducer from "./reducer/modalReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    courseReducer: courseReducer,
    modalReducer: modalReducer,
    userManageReducer: userManageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
