import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import UserSearch from "./UserSearch";
import UserTable from "./UserTable";

type Props = {};

const UserManagement: React.FC<Props> = () => {
  const searchResultLength = useSelector(
    (state: RootState) => state.userManageReducer.userList.length
  );
  return (
    <>
      <div className="user__title my-5 container">
        <h1>USER MANAGEMENT</h1>
        <hr />
      </div>
      <div className="user__search container">
        <h2>User list</h2>
        <h6 className="mt-4">Result: {searchResultLength}</h6>

        <UserSearch />
        <UserTable />
      </div>
    </>
  );
};

export default UserManagement;
