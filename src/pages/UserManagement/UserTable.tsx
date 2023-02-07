import { Space, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  setEditType,
  openType,
  showModal,
} from "../../redux/reducer/modalReducer";
import { getAllUserInfoApi } from "../../redux/reducer/userManageReducer";
import { columns, paginationConfig } from "./TableConfig";

type Props = {};

// dummy building UI

// Main component
const UserTable: React.FC = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const userData = useSelector(
    (state: RootState) => state.userManageReducer.userList
  );

  //  setup dispatch

  return (
    <>
      <div className="table-responsive">
        <Table
          className="mt-4"
          dataSource={userData}
          columns={columns}
          pagination={paginationConfig}
          tableLayout="auto"
        />
      </div>
    </>
  );
};

export default UserTable;
