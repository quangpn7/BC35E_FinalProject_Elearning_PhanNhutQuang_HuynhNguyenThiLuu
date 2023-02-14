import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import Course from "../../components/Course/Course";
import Loading from "../../components/Loading/Loading";
import { DispatchType, RootState } from "../../redux/configStore";
import { getAllCourseApi, getCoursesByCategoryApi, getCoursesPaginationApi, setCategoryCodeAction, setCourseNameAction, setCurrentPageAction } from "../../redux/reducer/courseReducer";
import FormSearchByName from "./Components/FormSearchByName";
import SearchByCategory from "./Components/SearchByCategory";
import { scrollToTop } from "../../util/common.js";

type Props = {};

const Search = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { allCourses, courseName, categoryCode, currentPage, totalPage, isLoading } = useSelector((state: RootState) => state.courseReducer)

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!categoryCode) {
      const coursePaginationAction = getCoursesPaginationApi(courseName, currentPage);
      dispatch(coursePaginationAction);
      //
      scrollToTop();
    }
  }, [currentPage])

  useEffect(() => {
    if (courseName) {
      setSearchParams({ tenKhoaHoc: courseName });
      //
      const action = getAllCourseApi(courseName);
      dispatch(action);

      const action1 = setCurrentPageAction(1);
      dispatch(action1);
      //
      scrollToTop();
    }
  }, [courseName])

  useEffect(() => {
    if (categoryCode) {
      setSearchParams({ maDanhMuc: categoryCode });
      //
      const action = getCoursesByCategoryApi(categoryCode);
      dispatch(action);
      //
      scrollToTop();
    }
  }, [categoryCode])

  useEffect(() => {
    const tenKhoaHoc = searchParams.get('tenKhoaHoc') || undefined;
    if (tenKhoaHoc) {
      const call1 = async () => {
        const action = setCourseNameAction(tenKhoaHoc);
        dispatch(action);
        //
        const coursePaginationAction = getCoursesPaginationApi(tenKhoaHoc, 1);
        await dispatch(coursePaginationAction);
      }

      call1();
    }
    else {
      const maDanhMuc = searchParams.get('maDanhMuc');
      if (maDanhMuc) {
        const call2 = async () => {
          const action = setCategoryCodeAction(maDanhMuc);
          dispatch(action);
          //
          const action1 = getCoursesByCategoryApi(maDanhMuc);
          await dispatch(action1);
        }

        call2();
      }
      if (!maDanhMuc) {
        const action = getAllCourseApi(tenKhoaHoc);
        dispatch(action);
      }
    }
  }, [])

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
        <div className="col-xs-12 col-lg-3">
          <FormSearchByName />
          <SearchByCategory />
        </div>
        <div className="col-xs-12 col-lg-9">
          <div className="courses">
            <div className="row">
              {isLoading &&
                <div className="col-12 d-flex justify-content-center aligns-item-center pt-5">
                  <Loading />
                </div>
              }
              {!isLoading && allCourses?.map(course => (
                <div className="col-xs-12 col-md-6 col-lg-4" key={course.maKhoaHoc}>
                  <Course course={course} />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="pagitions">
                {totalPage > 1 && Array.from({ length: totalPage }, (_, i) => i + 1).map(page => (
                  <li className={page === currentPage ? "active" : ""}
                    key={`page-${page}`}
                    onClick={() => {
                      const action = setCurrentPageAction(page);
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
