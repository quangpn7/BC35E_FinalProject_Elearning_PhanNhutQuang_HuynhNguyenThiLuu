import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Course from "../../components/Course/Course";
import Courses from "../Courses/Courses";
import FormSearchByName from "./Components/FormSearchByName";
import SearchByCategory from "./Components/SearchByCategory";

type Props = {};

const Search = (props: Props) => {
  return <div className="searchPage">
    <div className="banner">
      <div className="overlay"></div>
      <div className="content">
        <div className="pagination-area">
          <h1>Course - 02</h1>
          <Breadcrumb>
            <BreadcrumbItem>
              <NavLink to={'/'} className="link">Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <div className="text">Course</div>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row" style={{ padding: '1rem 0' }}>
        <div className="col-3">
          <FormSearchByName />
          <SearchByCategory />
        </div>
        <div className="col-9">
          <div className="courses">
            <div className="row">
              <div className="col-4">
                <Course />
              </div>
              <div className="col-4">
                <Course />
              </div>
              <div className="col-4">
                <Course />
              </div>
              <div className="col-4">
                <Course />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="pagitions">
                <li className="active">1</li>
                <li>2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Search;
