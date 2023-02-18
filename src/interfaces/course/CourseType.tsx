export type courseAttendModal = {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: string;
  danhGia: number;
};

export interface CourseFormModal {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  maDanhMucKhoaHoc: string;
  moTa: string;
}
// REDUX
export interface CourseCreator {
  taiKhoan: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
  hoTen: string;
}
export interface CourseCategory {
  maDanhMucKhoaHoc: string;
  tenDanhMucKhoaHoc: string;
}
export interface Category {
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
export interface CourseState {
  currentCourse: CourseDetailModal | null;
  allCourses: CourseDetailModal[];
  coursesEnrolled: [];
  courseName: string;
  categoryCode: string;
  allCategory: Category[] | null;
  totalPage: number;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  courseForm: any;
  homeCourses: CourseDetailModal[];
  keySearch: string;
}
