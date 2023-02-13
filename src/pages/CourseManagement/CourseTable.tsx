import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { CourseDetailModal } from "../../redux/reducer/courseReducer";

import { columns, paginationConfig } from "./TableConfig";

type Props = {};


// Main component
const CourseTable: React.FC = (props: Props) => {
  const { allCourses, keySearch } = useSelector(
    (state: RootState) => state.courseReducer
  );

  const [courses, setCourses] = useState<CourseDetailModal[]>([]);

  useEffect(() => {
    if (keySearch) {
      setCourses(allCourses.filter(item => item.tenKhoaHoc.includes(keySearch)));
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
