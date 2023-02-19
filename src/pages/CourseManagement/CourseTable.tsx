import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CourseDetailModal } from "../../interfaces/course/CourseType";
import { RootState } from "../../redux/configStore";

import { columns, paginationConfig } from "./TableConfig";

type Props = {};

// Main component
const CourseTable: React.FC<Props> = () => {
  const { allCourses, keySearch } = useSelector(
    (state: RootState) => state.courseReducer
  );

  const [courses, setCourses] = useState<CourseDetailModal[]>([]);

  useEffect(() => {
    if (keySearch) {
      setCourses(
        allCourses.filter((item) => item.tenKhoaHoc.toLowerCase().includes(keySearch.toLowerCase()))
      );
    } else {
      setCourses([...allCourses]);
    }
  }, [keySearch, allCourses]);

  return (
    <>
      <div className="table-responsive">
        <Table
          className="mt-4"
          dataSource={courses || []}
          columns={columns}
          pagination={paginationConfig}
          tableLayout="auto"
        />
      </div>
    </>
  );
};

export default CourseTable;
