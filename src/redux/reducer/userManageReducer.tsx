import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { createKeywordTypeNode } from "typescript";
import {
  addEditUserModal,
  userInfoAdminModal,
  userManagementReducerSate,
} from "../../interfaces/user/UserType";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";
import { hideModal } from "./modalReducer";

const initialState: userManagementReducerSate = {
  userList: [],
  userEditing: null,
};

const userManageReducer = createSlice({
  name: "userManageReducer",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.userList = action.payload;
    },
    setForm: (state) => {
      state.userEditing = {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
        maLoaiNguoiDung: "",
        maNhom: "GP01",
      };
    },
    setUserEditing: (state, action) => {
      state.userEditing = action.payload;
    },
  },
});
export const { getAllUser, setUserEditing, setForm } =
  userManageReducer.actions;
/**----------ASYNC ACTION------------- */
export const getAllUserInfoApi = (
  group?: string | null,
  keyword?: string | null
) => {
  return async (dispatch: DispatchType) => {
    // Handle suffix domain
    let suffixDomain = `QuanLyNguoiDung/LayDanhSachNguoiDung`;
    if (group && keyword) {
      suffixDomain += `?MaNhom=${group}&tuKhoa=${keyword}`;
    } else if (!group && keyword) {
      suffixDomain += `?tuKhoa=${keyword}`;
    } else if (group) {
      suffixDomain += `?MaNhom=${group}`;
    }
    await http
      .get(suffixDomain)
      .then((res) => {
        // add key prop, fix soDt -> soDT
        const data = res?.data.map(
          (item: userInfoAdminModal, index: number) => {
            const newItem = Object.assign({}, item);
            newItem.soDT = newItem.soDt;
            delete newItem.soDt;
            return {
              ...newItem,
              key: index + 1,
            };
          }
        );
        //
        const action: PayloadAction<userInfoAdminModal[]> = getAllUser(data);
        dispatch(action);
      })
      .catch((error) => console.log(error));
  };
};
// ADD NEW USER -
export const addNewUserApi = (values: addEditUserModal) => {
  return async () => {
    await http
      .post("QuanLyNguoiDung/ThemNguoiDung", values)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Added user successfully!");
        }
      })
      .catch((error) => {
        if (error?.response.status === 500) {
          toast.error("Username or Email existed!");
        }
      });
  };
};
// EDIT USER
export const editUserApi = (values: addEditUserModal) => {
  return async (dispatch: DispatchType) => {
    await http
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
      .then((res) => {
        toast.success("Updated successfully!");
      })
      .catch((error) => {
        if (error?.response.status === 500) {
          toast.error("Email existed!");
        }
      });
  };
};

export default userManageReducer.reducer;
