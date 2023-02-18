import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { history } from "../..";
import {
  FormValuesLogin,
  FormValuesRegister,
  userInfoModal,
} from "../../interfaces/user/UserType";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setCookie,
  setStoreJson,
  USER_LOGIN,
} from "../../util/config";
import { DispatchType } from "../configStore";
import { hideModal } from "./modalReducer";

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
    getUserInfoAction: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUserAction: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserAttendCourse: (state, action) => {
      state.userInfo.chiTietKhoaHocGhiDanh = action.payload;
    },
  },
});

export const {
  userLoginAction,
  getUserInfoAction,
  updateUserAction,
  setUserAttendCourse,
} = userReducer.actions;

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
const currentPath = window.location.pathname;
// Login
export const userLoginApi = (values: FormValuesLogin) => {
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
          if (currentPath === "/admin") {
            dispatch(hideModal());
          } else {
            history.push("/");
          }
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
export const userRegisterApi = (values: FormValuesRegister) => {
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
