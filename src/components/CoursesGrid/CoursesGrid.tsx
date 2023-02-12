import { getAllCourseApi } from "../../redux/reducer/courseReducer";
import React, { useEffect } from "react";
import { DispatchType, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { NavLink } from "react-router-dom";

type Props = {};

const CoursesGrid = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { homeCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  // Calling course API
  useEffect(() => {
    const getAllCourseAction = getAllCourseApi();
    dispatch(getAllCourseAction);
  }, []);
  return (
    <>
      <div className="courses__content container">
        <h1 className="mb-0">Featured Courses</h1>
        <hr className="text-white mt-0 mb-4" />
        <div className="courses__grid">
          <div className="row align-items-center">
            <CourseCard courseList={homeCourses} />
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <NavLink to={"/search"} className="btn-viewAll text-decoration-none">
          VIEW ALL COURSES
        </NavLink>
      </div>
    </>
  );
};

export default CoursesGrid;
