import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import AdminFooter from "../components/Footer/AdminFooter";
import AdminHeader from "../components/Header/AdminHeader";
import { RootState } from "../redux/configStore";

type Props = {};

const AdminTemplate: React.FC<Props> = () => {
  const isLogin = useSelector((state: RootState) => state.userReducer.isLogin);

  return (
    <>
      <AdminHeader />
      {isLogin ? (
        <Outlet />
      ) : (
        <h1 className="my-5">You need authentication to access this page!</h1>
      )}

      <AdminFooter />
    </>
  );
};

export default AdminTemplate;
