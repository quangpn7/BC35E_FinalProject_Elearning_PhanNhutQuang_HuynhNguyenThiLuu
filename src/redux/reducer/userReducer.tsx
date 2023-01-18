import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { error } from "console";
import { toast } from "react-hot-toast";

import { history } from "../..";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/config";
import { DispatchType } from "../configStore";

export interface userInfoModal {
  taiKhoan: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken: string;
}
export interface userLoginModal {
  taiKhoan: string;
  matKhau: string;
}
export interface userRegisterModal {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
}
export interface userState {
  userInfo: userInfoModal;
  isLogin: boolean;
}

const initialState: userState = {
  userInfo: getStoreJson(USER_LOGIN)
    ? getStoreJson(USER_LOGIN)
    : {
        taiKhoan: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: "",
        accessToken: "",
      },
  isLogin: Boolean(getStoreJson(USER_LOGIN)),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userLoginAction: (state, action) => {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
  },
});

export const { userLoginAction } = userReducer.actions;

export default userReducer.reducer;
/* -----------ASYNC ACTION------------- */
// Login
export const userLoginApi = (values: userLoginModal) => {
  return async (dispatch: DispatchType) => {
    const result = await http
      .post("/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        if (res.status === 200) {
          setStoreJson(USER_LOGIN, res?.data);
          setCookie(ACCESS_TOKEN, res?.data.accessToken, 3000);
          const action: PayloadAction<userInfoModal> = userLoginAction(
            res?.data
          );
          dispatch(action);
          history.push("/");
          toast.success(`Welcome ${res?.data.taiKhoan}`);
        }
      })
      .catch((err) => {
        toast.error("Wrong username or password!");
        // //API doesn't provide response for error?
      });
  };
};
export const userRegisterApi = (values: userRegisterModal) => {
  return async (dispatch: DispatchType) => {
    await http
      .post("/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Register successful!");
          setTimeout(() => {
            history.push("/login");
          }, 3000);
        }
      })
      .catch(() => {
        toast.error("Username or password was existed!");
      }); //API doesn't provide response for error?
  };
};
