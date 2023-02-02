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
  accessToken?: string;
  chiTietKhoaHocGhiDanh?: courseAttendModal[];
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
export interface courseAttendModal {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: string;
  danhGia: number;
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
    getUserInfoAction: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUserAction: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { userLoginAction, getUserInfoAction, updateUserAction } =
  userReducer.actions;

export default userReducer.reducer;
/* -----------ASYNC ACTION------------- */
// Get user info
export const getUserInfoApi = () => {
  return async (dispatch: DispatchType) => {
    await http
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        const action: PayloadAction<userInfoModal> = getUserInfoAction(
          res?.data
        );
        dispatch(action);
      })
      .catch((err) => history.push("/login"));
  };
};
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
// Register
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
        toast.error("Username or Email was existed!");
      }); //API doesn't provide response for error?
  };
};
//  Profile update
export const userUpdateApi = (values: userInfoModal) => {
  return async (dispatch: DispatchType) => {
    await http
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Updated successfully!");
          let fixedRes = { ...res?.data, ["soDT"]: res?.data?.soDt };
          delete fixedRes?.soDt;
          setStoreJson(USER_LOGIN, fixedRes);
          console.log(values);
          console.log("received:", fixedRes);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Updated failed!");
      });
  };
};
