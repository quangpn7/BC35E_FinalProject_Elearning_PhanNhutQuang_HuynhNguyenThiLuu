import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { courseAttendModal } from "../../interfaces/course/CourseType";
import { DispatchType, RootState, store } from "../../redux/configStore";
import { deleteUsersCourseApi } from "../../redux/reducer/userManageReducer";
import {
  getUserInfoApi,
  setUserAttendCourse,
} from "../../redux/reducer/userReducer";

type Props = {};

const CourseAttend: React.FC = (props: Props) => {
  const { taiKhoan } = useSelector(
    (state: RootState) => state.userReducer.userInfo
  );
  const courseAttend: courseAttendModal[] = useSelector(
    (state: RootState) => state.userReducer.userInfo.chiTietKhoaHocGhiDanh || []
  );

  const dispatch: DispatchType = useDispatch();
  // handle un-register
  const handleUnRegister = (courseId: string, userName: string) => {
    store.dispatch(deleteUsersCourseApi(courseId, userName));
    const refreshList = courseAttend.filter(
      (item) => item.maKhoaHoc !== courseId
    );
    const action = setUserAttendCourse(refreshList);
    dispatch(action);
  };

  // render function
  const renderCouresAttend = (courses: any) => {
    if (courses.length !== 0) {
      return courses?.map((item: courseAttendModal, index: number) => {
        return (
          <div className="my-3 course__box p-3 bg-white rounded" key={index}>
            <div className="row">
              <div className="course__left col-2">
                <img
                  src={item.hinhAnh}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "./img/coding.png";
                  }}
                  className="w-100 rounded"
                />
              </div>
              <div className="course__right col-lg-10 col-md-12">
                <div
                  className="course__info d-flex flex-column h-100 justify-content-between
             "
                >
                  <div className="course__info-txt">
                    <h3>{item.tenKhoaHoc}</h3>
                    <p className="text-secondary">
                      {item.moTa.length > 150
                        ? item.moTa.slice(0, 150) + "..."
                        : item.moTa.length}
                    </p>
                  </div>
                  <div className="course__info-stat fst-italic text-secondary d-flex align-items-end justify-content-between">
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
                    <div className="info__right">
                      <button
                        type="button"
                        onClick={() => {
                          handleUnRegister(item.maKhoaHoc, taiKhoan);
                        }}
                        className="btn-removeAttend info__right me-2"
                      >
                        Un-register
                      </button>
                      <NavLink
                        to={`/detail/${item.maKhoaHoc}`}
                        className="btn-viewDetail info__right"
                      >
                        View detail
                      </NavLink>
                    </div>
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
