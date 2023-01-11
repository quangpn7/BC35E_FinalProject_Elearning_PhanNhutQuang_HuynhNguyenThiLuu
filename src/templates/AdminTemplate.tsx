import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "../components/Footer/AdminFooter";
import AdminHeader from "../components/Header/AdminHeader";

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminTemplate;
