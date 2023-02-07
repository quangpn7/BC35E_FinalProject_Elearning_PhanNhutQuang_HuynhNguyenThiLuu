import { Rate } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { JsxElement } from "typescript";
import { number } from "yup";
import { courseAttendModal } from "../../interfaces/course/CourseType";
import { RootState } from "../../redux/configStore";

type Props = {};

const CourseAttend: React.FC = (props: Props) => {
  // Get User's attended courses
  const courseAttend: courseAttendModal[] = useSelector(
    (state: RootState) =>
      state.userReducer.userInfo?.chiTietKhoaHocGhiDanh || []
  ); //-> alway return an array as declare

  const renderCouresAttend = (courses: courseAttendModal[]) => {
    if (courses.length !== 0) {
      return courses?.map((item: courseAttendModal, index) => {
        return (
          <div className="my-3 course__box p-3 bg-white rounded" key={index}>
            <div className="row">
              <div className="course__lef col-2">
                <img src={item.hinhAnh} className="w-100 rounded" />
              </div>
              <div className="course__right col-10">
                <div
                  className="course__info d-flex flex-column h-100 justify-content-between
             "
                >
                  <div className="course__info-txt">
                    <h3>{item.tenKhoaHoc}</h3>
                    <p className="text-secondary">{item.moTa}</p>
                  </div>
                  <div className="course__info-stat fst-italic text-secondary d-flex align-items-center justify-content-between">
                    <div className="info__left">
                      <span className="course__viewCount ">
                        <i className="fas fa-eye"></i>: {item.luotXem}
                      </span>
                      <span className="course__dateCreated mx-3">
                        Date created: {item.ngayTao}
                      </span>
                      <span className="course__rate ">
                        Rate: <Rate disabled defaultValue={item.danhGia} />
                      </span>
                    </div>
                    <NavLink
                      to={"#"}
                      className="btn btn-primary fst-normal info__right"
                    >
                      View detail
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <h5 className="text-center fst-italic text-secondary">
        Not registered any course
      </h5>
    );
  };
  return <>{renderCouresAttend(courseAttend)}</>;
};

export default CourseAttend;
