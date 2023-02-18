import { Modal } from "antd";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { openType, showModal } from "../../redux/reducer/modalReducer";
import {
  ACCESS_TOKEN,
  delCookie,
  delStore,
  USER_LOGIN,
} from "../../util/config";
import LoginForm from "../Form/LoginForm";

type Props = {};

const AdminHeader = (props: Props) => {
  document.title = "Admin";
  const dispatch: DispatchType = useDispatch();
  const { isLogin, userInfo } = useSelector(
    (state: RootState) => state.userReducer
  );
  // Logout method
  const logOut = (): void => {
    delStore(USER_LOGIN);
    delCookie(ACCESS_TOKEN);
    window.location.reload();
  };
  const renderUserLog = (): ReactElement => {
    if (isLogin) {
      return (
        <li className="nav-item dropdown mt-sm-2">
          <a
            type="button"
            className="dropdown-toggle text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userInfo.taiKhoan}
          </a>
          <ul className="dropdown-menu">
            <div className="dropdown-divider"></div>
            <li></li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                type="button"
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </li>
      );
    }
    return (
      <li className="nav-item mt-sm-2">
        <button
          className="btn text-white"
          onClick={() => {
            dispatch(openType("LOGIN_FORM"));
            dispatch(showModal());
          }}
        >
          Login
        </button>
      </li>
    );
  };

  return (
    <>
      <header className="admin">
        <section className="header-wrap">
          <div className="header__bottom">
            <nav className="navbar navbar-expand-lg container">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to={""}>
                  ACADEMICS-ADMIN
                </NavLink>
                <button
                  className="navbar-toggler  bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-sm-2">
                    <li className="nav-item">
                      <NavLink className="nav-link " to={"/admin"} end>
                        USER MANAGEMENT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to={"/admin/course-management"}
                      >
                        COURSE MANAGEMENT
                      </NavLink>
                    </li>
                    {renderUserLog()}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default AdminHeader;
