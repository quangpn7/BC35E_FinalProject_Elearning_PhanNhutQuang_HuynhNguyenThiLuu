import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { columnsUserTable, paginationConfig } from "./TableConfig";

type Props = {};

// dummy building UI

// Main component
const UserTable: React.FC<Props> = (props: Props) => {
  const userData = useSelector(
    (state: RootState) => state.userManageReducer.userList
  );

  return (
    <>
      <div className="table-responsive">
        <Table
          className="mt-4"
          dataSource={userData}
          columns={columnsUserTable}
          pagination={paginationConfig}
          tableLayout="auto"
        />
      </div>
    </>
  );
};

export default UserTable;
