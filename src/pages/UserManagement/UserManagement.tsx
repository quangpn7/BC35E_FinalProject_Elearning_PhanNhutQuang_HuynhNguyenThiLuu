import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/Form/LoginForm";
import ModalHOC from "../../hoc/ModalHOC/ModalHOC";
import { DispatchType } from "../../redux/configStore";

import UserSearch from "./UserSearch";
import UserTable from "./UserTable";

type Props = {};

const UserManagement = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  return (
    <>
      <div className="user__title my-5 container">
        <h1>USER MANAGEMENT</h1>
      </div>
      <div className="user__search container">
        <h2>User list</h2>
        <UserSearch />
        <UserTable />
      </div>
    </>
  );
};

export default UserManagement;
