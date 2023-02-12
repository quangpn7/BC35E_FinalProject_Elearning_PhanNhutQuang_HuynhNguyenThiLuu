import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import CourseSearch from "./CourseSearch";
import CourseTable from "./CourseTable";

type Props = {};

const CourseManagement = (props: Props) => {
  const searchResultLength = useSelector(
    (state: RootState) => state.courseReducer.allCourses?.length || 0
  );
  return <>
    <div className="user__title my-5 container">
      <h1>COURSE MANAGEMENT</h1>
      <hr />
    </div>
    <div className="user__search container">
      <h2>Course list</h2>
      <h6 className="mt-4">Result: {searchResultLength}</h6>

      <CourseSearch />
      <CourseTable />
    </div>
  </>
};

export default CourseManagement;
