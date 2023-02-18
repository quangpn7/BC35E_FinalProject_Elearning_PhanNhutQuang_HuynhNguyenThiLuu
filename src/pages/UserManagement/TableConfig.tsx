import { Modal, Space, TablePaginationConfig, Tag } from "antd";
import { ReactElement } from "react";

import {
  userInfoAdminModal,
  userInfoModal,
} from "../../interfaces/user/UserType";
import { store } from "../../redux/configStore";
import {
  setEditType,
  openType,
  showModal,
} from "../../redux/reducer/modalReducer";
import {
  deleteUserApi,
  deleteUsersCourseApi,
  registerStudentApi,
  setUserEditing,
  setUserSelected,
} from "../../redux/reducer/userManageReducer";

/* ------Handle event ------*/
// Handle enroll
const handleEnrollClick = (userName: string): void => {
  store.dispatch(setUserSelected(userName));
  store.dispatch(openType("ENROLL_USER"));
  store.dispatch(showModal());
};
// Handle edit
const handleEditClick = (values: userInfoModal): void => {
  store.dispatch(setEditType(false));
  store.dispatch(setUserEditing(values));
  store.dispatch(openType("ADD_EDIT_USER"));
  store.dispatch(showModal());
};
// Hanlde delete - delete user
const handleDeleteClick = (userName: string): void => {
  store.dispatch(deleteUserApi(userName));
};
// Handle register click
const handleRegisterClick = (courseId: string, userName: string): void => {
  const registerAction = registerStudentApi(courseId, userName);
  store.dispatch(registerAction);
};
// Handl delete - user's course enroll
const handleDeleteCourse = (
  courseId: string,
  userName: string,
  isWaiting: boolean
): void => {
  Modal.confirm({
    onOk: (): void => {
      const deleteUsersCourseAction = deleteUsersCourseApi(
        courseId,
        userName,
        isWaiting
      );
      store.dispatch(deleteUsersCourseAction);
    },
    // title: `Are you sure to delete ${(
    //   <span className="text-danger">{userName}</span>
    // )} from the course with ID: ${courseId}`,
    title: (
      <span>
        Are you sure to delete user:
        <span className="text-danger">{userName}</span> from the course with ID:{" "}
        <span className="text-danger">{courseId}</span>
      </span>
    ),
  });
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
        {((): ReactElement => {
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
    onFilter: (value: string, record: userInfoAdminModal): boolean | number => {
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
    render: (_: any, record: any): ReactElement => (
      <Space size="middle">
        <button
          className="btn btn-primary"
          onClick={(): void => {
            handleEnrollClick(record.taiKhoan);
          }}
        >
          Enroll
        </button>
        <button
          className="btn btn-success"
          onClick={(): void => {
            handleEditClick(record);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={(): void => {
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

    render: (_: any, record: any): ReactElement => (
      <Space size="middle">
        <button
          className="btn btn-primary"
          onClick={(): void => {
            // get 2nd parameter
            const userName = store.getState().userManageReducer.userSelected;
            // handle
            handleRegisterClick(record.maKhoaHoc, userName);
          }}
        >
          Register
        </button>
        <button
          className="btn btn-danger"
          onClick={(): void => {
            // get 2nd parameter
            const userName = store.getState().userManageReducer.userSelected;
            handleDeleteCourse(record.maKhoaHoc, userName, true);
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
    render: (_: any, record: any): ReactElement => (
      <Space size="middle">
        <button
          className="btn btn-danger"
          onClick={(): void => {
            // get 2nd parameter
            const userName = store.getState().userManageReducer.userSelected;
            handleDeleteCourse(record.maKhoaHoc, userName, false);
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
