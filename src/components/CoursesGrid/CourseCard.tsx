import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { CourseDetailModal } from "../../redux/reducer/courseReducer";

type Props = {
  courseList: CourseDetailModal[];
};

const CourseCard = (props: Props) => {
  return (
    <>
      {props?.courseList.map((course, index) => {
        return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={index}>
            <div className="card courses__item">
              <div className="card-img-top">
                <img
                  src={course.hinhAnh}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/img/coding.png";
                  }}
                />
              </div>
              <div className="card-body">
                <NavLink
                  className="card-body-title"
                  to={`/detail/${course.maKhoaHoc}`}
                >
                  {course.tenKhoaHoc}
                </NavLink>
                <p>
                  {course.moTa.length > 50
                    ? course.moTa.substring(0, 50) + "..."
                    : course.moTa}
                </p>

                <NavLink
                  className="btn-viewDetail"
                  to={`/detail/${course.maKhoaHoc}`}
                >
                  View detail
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseCard;
