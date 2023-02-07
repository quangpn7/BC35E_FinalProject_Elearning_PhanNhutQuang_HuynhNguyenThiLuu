import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer/courseReducer";
import modalReducer from "./reducer/modalReducer";
import userManageReducer from "./reducer/userManageReducer";
import userReducer from "./reducer/userReducer";

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
