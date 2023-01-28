import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import Course from "../../components/Course/Course";
import { DispatchType, RootState } from "../../redux/configStore";
import courseReducer, { getAllCourseApi, getCoursesByCategoryApi, getCoursesPaginationApi, setCategoryCodeAction, setCourseNameAction, setCurrentPgaeAction } from "../../redux/reducer/courseReducer";
import Courses from "../Courses/Courses";
import FormSearchByName from "./Components/FormSearchByName";
import SearchByCategory from "./Components/SearchByCategory";

type Props = {};

const Search = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { allCourses, courseName, categoryCode, currentPage, pageSize, totalPage, isLoading } = useSelector((state: RootState) => state.courseReducer)

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tenKhoaHoc = searchParams.get('tenKhoaHoc');
    if (tenKhoaHoc) {
      const action = setCourseNameAction(tenKhoaHoc);
      dispatch(action);
      //
      const coursePaginationAction = getCoursesPaginationApi(tenKhoaHoc, 1);
      dispatch(coursePaginationAction);
    }

    const maDanhMuc = searchParams.get('maDanhMuc');
    if (maDanhMuc) {
      const action = setCategoryCodeAction(maDanhMuc);
      dispatch(action);
      //
      const action1 = getCoursesByCategoryApi(maDanhMuc);
      dispatch(action1);
    }

    if (!tenKhoaHoc && !maDanhMuc) {
      const action = getAllCourseApi();
      dispatch(action);
    }
  }, [])

  useEffect(() => {
    if (courseName) {
      setSearchParams({ tenKhoaHoc: courseName });
      //
      const action = getAllCourseApi(courseName);
      dispatch(action);
    }
  }, [courseName])

  useEffect(() => {
    if (categoryCode) {
      setSearchParams({ maDanhMuc: categoryCode });
      //
      const action = getCoursesByCategoryApi(categoryCode);
      dispatch(action);
    }
  }, [categoryCode])

  useEffect(() => {
    const coursePaginationAction = getCoursesPaginationApi(courseName, currentPage);
    dispatch(coursePaginationAction);
  }, [courseName, currentPage])

  console.log(isLoading)

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
              {isLoading && "Loading..."}
              {!isLoading && allCourses?.map(course => (
                <div className="col-4">
                  <Course course={course} key={course.maKhoaHoc} />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="pagitions">
                {totalPage > 1 && Array.from({ length: totalPage }, (_, i) => i + 1).map(page => (
                  <li className={page === currentPage ? "active" : ""}
                    key={page}
                    onClick={() => {
                      const action = setCurrentPgaeAction(page);
                      dispatch(action);
                    }}
                  >{page}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Search;
