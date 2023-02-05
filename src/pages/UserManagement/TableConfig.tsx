import {
  Space,
  TableColumnGroupType,
  TableColumnType,
  TablePaginationConfig,
  Tag,
} from "antd";
import { ColumnGroupType, ColumnProps, ColumnType } from "antd/es/table";
import { ColumnGroupProps } from "antd/es/table/ColumnGroup";

import { useDispatch } from "react-redux";
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

// Handle event
const handleEditClick = (values: userInfoModal) => {
  console.log(values);
  store.dispatch(setEditType(false));
  store.dispatch(openType("ADD_EDIT_USER"));
  store.dispatch(showModal());
};

// Columns config
export const columns: any = [
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
    dataIndex: "soDt",
    key: "soDt",
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
  },

  ,
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <button className="btn btn-primary">Enroll</button>
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
            console.log(record);
          }}
        >
          Delete
        </button>
      </Space>
    ),
  },
];

// Pagination config
export const paginationConfig: TablePaginationConfig = {
  defaultPageSize: 5,
  showSizeChanger: true,
  pageSizeOptions: ["5", "10", "15", "20"],
};
