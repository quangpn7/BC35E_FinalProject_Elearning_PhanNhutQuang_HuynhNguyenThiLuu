import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createKeywordTypeNode } from "typescript";
import {
  userInfoAdminModal,
  userManagementReducerSate,
} from "../../interfaces/user/UserType";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

const initialState: userManagementReducerSate = {
  userList: [],
};

const userManageReducer = createSlice({
  name: "userManageReducer",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.userList = action.payload;
    },
  },
});
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
        // add key prop to render by antd
        const data = res?.data.map(
          (item: userInfoAdminModal, index: number) => ({
            ...item,
            key: index,
          })
        );
        const action: PayloadAction<userInfoAdminModal[]> = getAllUser(data);
        dispatch(action);
      })
      .catch((error) => console.log(error));
  };
};
export const { getAllUser } = userManageReducer.actions;

export default userManageReducer.reducer;
