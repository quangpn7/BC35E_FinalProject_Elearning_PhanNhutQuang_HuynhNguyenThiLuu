import React, { ReactElement, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/configStore";

import {
  ACCESS_TOKEN,
  delCookie,
  delStore,
  getStoreJson,
  USER_LOGIN,
} from "../../util/config";

type Props = {};

const Header = (props: Props) => {
  // Get store Redux
  const { isLogin, userInfo } = useSelector(
    (state: RootState) => state.userReducer
  );
  // Logout method
  const logOut = (): void => {
    delStore(USER_LOGIN);
    delCookie(ACCESS_TOKEN);
    window.location.reload();
  };
  // Push store redux

  // Render user-nav
  const renderUserNav = (): ReactElement => {
    if (isLogin) {
      return (
        <>
          <a
            type="button"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userInfo.taiKhoan}
          </a>
          <ul className="dropdown-menu">
            <li>
              {" "}
              <NavLink className="dropdown-item" to="/profile">
                Profile
              </NavLink>
            </li>
            <div className="dropdown-divider"></div>
            <li></li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                type="button"
                onClick={() => logOut()}
              >
                Logout
              </a>
            </li>
          </ul>
        </>
      );
    }
    return <NavLink to={"login"}>Login</NavLink>;
  };

  return (
    <>
      <header>
        <section className="header-wrap">
          <div className="header__upper">
            <div className="header__upper-content container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="header__upper-left">
                  <a href="tel:+763837727122">
                    <span className="p-2">
                      <i className="fas fa-phone" />
                    </span>
                    + 947 289 38817
                  </a>
                  <a href="mailto:info@academics.com">
                    <span className="p-2">
                      <i className="fas fa-envelope" />
                    </span>
                    info@academics.com
                  </a>
                </div>
                <div className="header__upper-right">
                  {renderUserNav()}

                  <a
                    href="#"
                    onClick={() => {
                      toast("this is toast");
                    }}
                    className="applyBtn"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <nav className="navbar navbar-expand-lg container">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to={""}>
                  ACADEMICS
                </NavLink>
                <button
                  className="navbar-toggler"
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
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        COURSES
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider bg-white" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider bg-white" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        BLOG
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        EVENTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        INFO
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        CONTACT
                      </a>
                    </li>
                    <li className="nav-item nav-search">
                      <a className="nav-link" href="#">
                        <i className="fas fa-search" />
                      </a>
                    </li>
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

export default Header;
