import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import CourseSearch from "./CourseSearch";
import CourseTable from "./CourseTable";

type Props = {};

const CourseManagement: React.FC<Props> = () => {
  const { allCourses, keySearch } = useSelector(
    (state: RootState) => state.courseReducer
  );
  const searchResultLength = keySearch
    ? allCourses.filter((item): boolean => item.tenKhoaHoc.includes(keySearch))
        ?.length
    : allCourses.length;

  return (
    <>
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
  );
};

export default CourseManagement;
