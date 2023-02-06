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
import { setUserEditing } from "../../redux/reducer/userManageReducer";

// Handle event
const handleEditClick = (values: userInfoModal) => {
  console.log(values);
  store.dispatch(setEditType(false));
  store.dispatch(setUserEditing(values));
  store.dispatch(openType("ADD_EDIT_USER"));
  store.dispatch(showModal());
};

// Columns config - USER LIST TABLE
export const columns: any = [
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
    // sorter: (a: userInfoAdminModal, b: userInfoAdminModal) => {
    //   if (a.maLoaiNguoiDung && b.maLoaiNguoiDung) {
    //     return a.maLoaiNguoiDung.localeCompare(b.maLoaiNguoiDung);
    //   }
    //   return 0;
    // },
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
