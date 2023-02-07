/**-----------FORM--------- */

import { courseAttendModal } from "../course/CourseType";

// type Login form
export type FormValuesLogin = {
  taiKhoan: string;
  matKhau: string;
};
// type Register form
export type FormValuesRegister = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  confirmMatKhau?: string;
  soDT: string;
  maLoaiNguoiDung?: string;
  maNhom: string;
  email: string;
};
// type Profile form
export type FormValuesProfile = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};
/**-----------REDUCER--------- */
export type userInfoModal = {
  taiKhoan: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken?: string;
  chiTietKhoaHocGhiDanh?: courseAttendModal[];
};
// userManagementReducer state
export type userInfoManageModal = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt?: string;
  soDT: string;
  maLoaiNguoiDung: string;
};
export type userManagementReducerSate = {
  userList: userInfoManageModal[];
  userEditing: addEditUserModal | null;
};

export type addEditUserModal = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  email: string;
  maLoaiNguoiDung: string;
  maNhom: string;
};
/**-----------API RECEIVED--------- */
export type userInfoAdminModal = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt?: string;
  soDT?: string;
  maNhom?: string;
  maLoaiNguoiDung?: string;
  tenLoaiNguoiDung?: string;
};
