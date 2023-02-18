import { Space, TablePaginationConfig } from "antd";
import { useDispatch } from "react-redux";

import { userInfoModal } from "../../interfaces/user/UserType";
import { DispatchType, store } from "../../redux/configStore";
import {
  CourseDetailModal,
  deleteCourseApi,
} from "../../redux/reducer/courseReducer";
import {
  setEditType,
  openType,
  showModal,
} from "../../redux/reducer/modalReducer";
import { setCourseFormAction } from "../../redux/reducer/courseReducer";

// Handle event
const handleEditClick = (values: any) => {
  store.dispatch(setEditType(false));
  store.dispatch(
    setCourseFormAction({
      ...values,
      danhMucKhoaHoc: values.danhMucKhoaHoc.maDanhMucKhoahoc,
    })
  );
  store.dispatch(openType("ADD_EDIT_COURSE"));
  store.dispatch(showModal());
};

const handleDelete = (value: CourseDetailModal) => {
  console.log(value);
  store.dispatch(deleteCourseApi(value.maKhoaHoc));
};

// Columns config - COURSE LIST TABLE
export const columns: any = [
  {
    dataIndex: "key",
    key: "key",
  },
  {
    title: "#",
    dataIndex: "maKhoaHoc",
    key: "maKhoaHoc",
  },
  {
    title: "Tên khóa học",
    dataIndex: "tenKhoaHoc",
    key: "tenKhoaHoc",
  },
  {
    title: "Bí danh",
    dataIndex: "biDanh",
    key: "biDanh",
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",

    render: (_: any, record: any) => (
      <img
        src={record.hinhAnh}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/img/brand-1.jpg";
        }}
        alt=""
      />
    ),
  },

  {
    title: "Số lượng HV",
    dataIndex: "soLuongHocVien",
    key: "soLuongHocVien",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <button
          className="btn btn-success"
          onClick={() => {
            handleEditClick(record);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(record);
          }}
        >
          Delete
        </button>
      </Space>
    ),
    className: "text-center",
  },
];

// Pagination config
export const paginationConfig: TablePaginationConfig = {
  defaultPageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: ["5", "10", "15", "20"],
  hideOnSinglePage: true,
};
