import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  addEditUserModal,
  userCourseEnroll,
  userInfoAdminModal,
  userManagementReducerSate,
} from "../../interfaces/user/UserType";
import { http } from "../../util/config";
import { DispatchType, store } from "../configStore";

const initialState: userManagementReducerSate = {
  userList: [],
  userEditing: null,
  userSelected: "",
  userWaitingCourses: [],
  userRegisteredCourses: [],
  isLoading: false,
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
    setUserSelected: (state, action) => {
      state.userSelected = action.payload;
    },
    setUserEditing: (state, action) => {
      state.userEditing = action.payload;
    },
    setUserWaitingCourses: (state, action) => {
      state.userWaitingCourses = action.payload;
    },
    setUserRegisterdCourses: (state, action) => {
      state.userRegisteredCourses = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  getAllUser,
  setUserEditing,
  setForm,
  setUserSelected,
  setUserWaitingCourses,
  setUserRegisterdCourses,
  setIsLoading,
} = userManageReducer.actions;
/**----------ASYNC ACTION------------- */
// GET ALL USER
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
// DELETE USER
export const deleteUserApi = (userName: string) => {
  return async (dispatch: DispatchType) => {
    await http
      .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
      .then(() => {
        toast.success(`Deleted user: ${userName}`);
        // Refresh - direct mutate the state without api

        const { userList } = store.getState().userManageReducer;
        let refreshList = userList.filter(
          (item: userInfoAdminModal) => item.taiKhoan !== userName
        );
        const action: PayloadAction<userInfoAdminModal[]> =
          getAllUser(refreshList);
        dispatch(action);
      })
      .catch(() => {
        toast.error(
          `The user: ${userName} has been registed, applied the course or created a course`
        );
      });
  };
};
/**----------- */

// GET USER'S WAITING COURSES
export const getUserWaitingCourseApi = (userName: string | null) => {
  return async (dispatch: DispatchType) => {
    await http
      .post("/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", {
        taiKhoan: userName,
      })
      .then((res) => {
        const data = res?.data.map((item: userCourseEnroll, index: number) => {
          return { ...item, key: index, index: index + 1 };
        });

        const action: PayloadAction<userCourseEnroll[]> =
          setUserWaitingCourses(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// GET USER'S REGISTERED COURSES
export const getUserRegisterdCourseApi = (userName: string | null) => {
  return async (dispatch: DispatchType) => {
    await http
      .post("/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", {
        taiKhoan: userName,
      })
      .then((res) => {
        const data = res?.data.map((item: userCourseEnroll, index: number) => {
          return { ...item, key: index, index: index + 1 };
        });

        const action: PayloadAction<userCourseEnroll[]> =
          setUserRegisterdCourses(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// REGISTER STUDENT (WAITING -> REGISTER)
export const registerStudentApi = (courseId: string, userName: string) => {
  return async (dispatch: DispatchType) => {
    await http
      .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", {
        maKhoaHoc: courseId,
        taiKhoan: userName,
      })
      .then((res) => {
        // Notification
        toast.success("Register completed!");
        // Quick refresh
        const coursesWaiting =
          store.getState().userManageReducer.userWaitingCourses;
        const waitingCoursesLeft = coursesWaiting.filter(
          (course) => courseId !== course.maKhoaHoc
        );
        const courseRegistered = coursesWaiting.filter(
          (course) => courseId === course.maKhoaHoc
        );
        const coursesReigsterUpdate = store
          .getState()
          .userManageReducer.userRegisteredCourses.concat(courseRegistered);

        // dispatch
        // ----waiting course
        const actionRefreshWaiting: PayloadAction<userCourseEnroll> =
          setUserWaitingCourses(waitingCoursesLeft);
        dispatch(actionRefreshWaiting);
        //----register course
        const actionRefreshRegister: PayloadAction<userCourseEnroll> =
          setUserRegisterdCourses(coursesReigsterUpdate);
        dispatch(actionRefreshRegister);
      })
      .catch((err) => {
        toast.error("This student is already in the class!");
        console.log(err);
      });
  };
};
// DELETE USER'S ENROLLED COURSE
export const deleteUsersCourseApi = (
  courseId: string,
  userName: string,
  isWaiting?: boolean
) => {
  return async (dispatch: DispatchType) => {
    await http
      .post("/QuanLyKhoaHoc/HuyGhiDanh", {
        maKhoaHoc: courseId,
        taiKhoan: userName,
      })
      .then(() => {
        // Noti
        toast.success(`Deleted ${userName} from course successfully!`);
        // If not admin page -> break
        if (window.location.pathname === "/profile") {
          return;
        }

        // If delete at waiting list
        if (isWaiting) {
          const waitingCourses =
            store.getState().userManageReducer.userWaitingCourses;
          const coursesLeft = waitingCourses.filter(
            (course) => course.maKhoaHoc !== courseId
          );
          const actionRefreshWaiting: PayloadAction<userCourseEnroll> =
            setUserWaitingCourses(coursesLeft);
          dispatch(actionRefreshWaiting);
          return;
        }

        // If delete at registered list
        const registeredCourses =
          store.getState().userManageReducer.userRegisteredCourses;

        const courseLeft = registeredCourses.filter(
          (course) => course.maKhoaHoc !== courseId
        );

        // dispatch
        const actionRefreshRegister: PayloadAction<userCourseEnroll> =
          setUserRegisterdCourses(courseLeft);
        dispatch(actionRefreshRegister);
      })
      .catch(() => {
        toast.error("Delete failed!");
      });
  };
};

export default userManageReducer.reducer;
