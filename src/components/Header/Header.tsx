import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="bg-primary text-center">Header</div>
      <div className="d-flex container mx-auto justify-content-evenly">
        <div>
          <h1>User UI</h1>
          <ul className="list-unstyled ">
            <li>
              <NavLink to={"Register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"search"}>Search</NavLink>
            </li>
            <li>
              <NavLink to={"Detail/1"}>Detail</NavLink>
            </li>
            <li>
              <NavLink to={"profile"}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={"Detail/1"}>Detail/1</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h1>AdminUI</h1>
          <ul className="list-unstyled ">
            <li>
              <NavLink to={"admin"}>Admin Page</NavLink>
            </li>
            <li>
              <NavLink to={"edit-user"}>EditUser</NavLink>
            </li>
            <li>
              <NavLink to={"course-management"}>Course Management</NavLink>
            </li>
            <li>
              <NavLink to={"course-management/edit-course"}>
                Edit course
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
