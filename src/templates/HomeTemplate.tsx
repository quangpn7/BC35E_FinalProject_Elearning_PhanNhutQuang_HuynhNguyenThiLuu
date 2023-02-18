import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type Props = {};

const HomeTemplate: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
