import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const AdminHeader = (props: Props) => {
  document.title = "Admin";
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
                      <NavLink className="nav-link active" to={"/admin"}>
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
