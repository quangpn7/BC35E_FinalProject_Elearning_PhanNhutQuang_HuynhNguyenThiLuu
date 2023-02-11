import {
  Space,
  TableColumnGroupType,
  TableColumnsType,
  TableColumnType,
  TablePaginationConfig,
  Tag,
} from "antd";
import { ColumnGroupType, ColumnProps, ColumnType } from "antd/es/table";
import { ColumnGroupProps } from "antd/es/table/ColumnGroup";

import { useDispatch, useSelector } from "react-redux";
import {
  userInfoAdminModal,
  userInfoModal,
} from "../../interfaces/user/UserType";
import { RootState, store } from "../../redux/configStore";
import {
  setEditType,
  openType,
  showModal,
} from "../../redux/reducer/modalReducer";
import userManageReducer, {
  deleteUserApi,
  getAllUserInfoApi,
  getUserRegisterdCourseApi,
  getUserWaitingCourseApi,
  setUserEditing,
  setUserSelected,
} from "../../redux/reducer/userManageReducer";

/* ------Handle event ------*/
// Handle enroll
const handleEnrollClick = (userName: string) => {
  store.dispatch(setUserSelected(userName));
  store.dispatch(openType("ENROLL_USER"));
  store.dispatch(showModal());
};
// Handle edit
const handleEditClick = (values: userInfoModal) => {
  store.dispatch(setEditType(false));
  store.dispatch(setUserEditing(values));
  store.dispatch(openType("ADD_EDIT_USER"));
  store.dispatch(showModal());
};
// Hanlde delete

const handleDeleteClick = async (userName: string) => {
  await store.dispatch(deleteUserApi(userName));
};

// Columns config - USER LIST TABLE
export const columnsUserTable: any = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Username",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Name",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Phone",
    dataIndex: "soDT",
    key: "soDT",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Type",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",

    render: (_: any, record: any) => (
      <>
        {(() => {
          const color = record?.maLoaiNguoiDung === "HV" ? "blue" : "red";
          return <Tag color={color}>{record?.maLoaiNguoiDung}</Tag>;
        })()}
      </>
    ),
    filters: [
      {
        text: "HV",
        value: "HV",
      },
      {
        text: "GV",
        value: "GV",
      },
    ],
    onFilter: (value: string, record: userInfoAdminModal) => {
      if (record.maLoaiNguoiDung) {
        return record.maLoaiNguoiDung.indexOf(value) === 0;
      }
      return 0;
    },
  },
  ,
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleEnrollClick(record.taiKhoan);
          }}
        >
          Enroll
        </button>
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
            handleDeleteClick(record.taiKhoan);
          }}
        >
          Delete
        </button>
      </Space>
    ),
    className: "text-center",
  },
];
// Columns config - USER WAITING ASSIGN TABLE
export const columnsWaitingTable: any = [
  { title: "#", key: "keyWait", dataIndex: "index", width: "5%" },
  { title: "Course", key: "courseWait", dataIndex: "tenKhoaHoc", width: "70%" },
  {
    title: "",
    key: "actionWait",
    render: (_: any, record: any) => (
      <Space size="middle">
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(record);
          }}
        >
          Register
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            console.log(record);
          }}
        >
          Delete
        </button>
      </Space>
    ),
    className: "text-end",
  },
];
// Columns config - USER REGISTERED TABLE
export const columnsRegisteredTable: any = [
  { title: "#", key: "keyReg", dataIndex: "index", width: "5%" },
  { title: "Course", key: "courseReg", dataIndex: "tenKhoaHoc", width: "70%" },
  {
    title: "",
    key: "actionRes",
    render: (_: any, record: any) => (
      <Space size="middle">
        <button
          className="btn btn-danger"
          onClick={() => {
            console.log(record);
          }}
        >
          Delete
        </button>
      </Space>
    ),
    className: "text-end",
  },
];

// Pagination config
export const paginationConfig: TablePaginationConfig = {
  defaultPageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: ["5", "10", "15", "20"],
  hideOnSinglePage: true,
};

export const paginationEnrollConfig: TablePaginationConfig = {
  defaultPageSize: 5,
  showSizeChanger: true,

  pageSizeOptions: ["5", "10"],
};
