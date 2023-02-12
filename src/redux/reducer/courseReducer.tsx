import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

interface CourseCreator {
  taiKhoan: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
  hoTen: string;
}

interface CourseCategory {
  maDanhMucKhoaHoc: string;
  tenDanhMucKhoaHoc: string;
}

interface Category {
  maDanhMuc: string;
  tenDanhMuc: string;
}

export interface CourseDetailModal {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: Date;
  soLuongHocVien: number;
  nguoiTao: CourseCreator;
  danhMucKhoaHoc: CourseCategory;
}

interface CourseState {
  currentCourse: CourseDetailModal | null;
  allCourses: CourseDetailModal[] | null;
  homeCourses: CourseDetailModal[];
  courseName: string;
  categoryCode: string;
  allCategory: Category[] | null;
  totalPage: number;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
}

const initialState: CourseState = {
  currentCourse: null,
  allCourses: null,
  homeCourses: [],
  courseName: "",
  categoryCode: "",
  allCategory: null,
  totalPage: -1,
  currentPage: 1,
  pageSize: 9,
  isLoading: false,
};

const courseReducer = createSlice({
  name: "courseReducer",
  initialState,
  reducers: {
    getAllCoursesAction: (state, action) => {
      state.totalPage = Math.ceil(action.payload.length / state.pageSize);
    },
    setHomeCoursesAction: (state, action) => {
      state.homeCourses = action.payload;
    },
    setCourseNameAction: (state, action) => {
      state.courseName = action.payload;
      state.categoryCode = "";
    },
    setCategoryCodeAction: (state, action) => {
      state.categoryCode = action.payload;
      state.courseName = "";
    },
    getCoursesByCategotyAction: (state, action) => {
      state.allCourses = action.payload;
      state.totalPage = -1;
      state.currentPage = 1;
    },
    getAllCategoryAction: (state, action) => {
      state.allCategory = action.payload;
    },
    getCoursesPaginationAction: (state, action) => {
      state.allCourses = action.payload.items;
      // state.currentPage = action.payload.currentPage;
      // state.pageSize = action.payload.count;
      state.totalPage = action.payload.totalPages;
    },
    setCurrentPageAction: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoadingAction: (state, action) => {
      state.isLoading = action.payload;
    },
    getCourseDetailAction: (state, action) => {
      state.currentCourse = action.payload;
    },
  },
});

export const {
  getAllCoursesAction,
  setHomeCoursesAction,
  setCourseNameAction,
  setCategoryCodeAction,
  getCoursesByCategotyAction,
  getAllCategoryAction,
  getCoursesPaginationAction,
  setCurrentPageAction,
  setLoadingAction,
  getCourseDetailAction,
} = courseReducer.actions;
export default courseReducer.reducer;

export const getAllCategoryApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const res = await http.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      if (res.status === 200) {
        const action: PayloadAction<CourseCategory[]> = getAllCategoryAction(
          res?.data
        );
        dispatch(action);
      }
    } catch (err) {}
  };
};

export const getAllCourseApi = (courseName?: string) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await http.get(
        "/QuanLyKhoaHoc/LayDanhSachKhoaHoc" +
          (courseName ? `?tenKhoaHoc=${courseName}` : "")
      );
      if (res.status === 200) {
        //#region NHUT QUANG'S ASIDE CODE START
        // Dispatch item for home page
        if (window.location.pathname === "/" || "/#") {
          const getGridItemAction: PayloadAction<CourseDetailModal[]> =
            setHomeCoursesAction(res?.data.slice(0, 8));
          dispatch(getGridItemAction);
          dispatch(setLoadingAction(false));

          return;
        }
        //#endregion NHUT QUANG'S ASIDE CODE START
        // HUYNH LUU'S MAIN CODE
        const action: PayloadAction<CourseDetailModal[]> = getAllCoursesAction(
          res?.data
        );
        dispatch(action);
        dispatch(setLoadingAction(false));
      } else {
        dispatch(getAllCoursesAction([]));
        dispatch(setLoadingAction(false));
      }
    } catch (err) {
      console.log(err);
      dispatch(getAllCoursesAction([]));
      dispatch(setLoadingAction(false));
    }
  };
};

export const getCoursesByCategoryApi = (categoryCode: string) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await http.get(
        `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryCode}`
      );
      if (res.status === 200) {
        const action: PayloadAction<CourseDetailModal[]> =
          getCoursesByCategotyAction(res?.data);
        dispatch(action);
        dispatch(setLoadingAction(false));
      } else {
        dispatch(getCoursesByCategotyAction([]));
        dispatch(setLoadingAction(false));
      }
    } catch (err) {
      console.log(err);
      dispatch(getCoursesByCategotyAction([]));
      dispatch(setLoadingAction(false));
    }
  };
};

export const getCoursesPaginationApi = (
  courseName: string,
  currentPage: number,
  pageSize = 9
) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await http.get(
        "/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang" +
          (courseName ? `?tenKhoaHoc=${courseName}` : "?tenKhoaHoc=") +
          `&page=${currentPage}&pageSize=${pageSize}`
      );
      if (res.status === 200) {
        const action: PayloadAction<CourseDetailModal[]> =
          getCoursesPaginationAction(res?.data);
        dispatch(action);
        dispatch(setLoadingAction(false));
      } else {
        dispatch(setLoadingAction(false));
      }
    } catch (err) {
      console.log(err);
      dispatch(getCoursesPaginationAction([]));
      dispatch(setLoadingAction(false));
    }
  };
};

export const getCourseDetailApi = (courseCode: string) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await http.get(
        "/QuanLyKhoaHoc/LayThongTinKhoaHoc" + `?maKhoaHoc=${courseCode}`
      );
      if (res.status === 200) {
        const action: PayloadAction<CourseDetailModal[]> =
          getCourseDetailAction(res?.data);
        dispatch(action);
        dispatch(setLoadingAction(false));
      } else {
        dispatch(getCourseDetailAction(null));
        dispatch(setLoadingAction(false));
      }
    } catch (err) {
      console.log(err);
      dispatch(getCourseDetailAction(null));
      dispatch(setLoadingAction(false));
    }
  };
};
