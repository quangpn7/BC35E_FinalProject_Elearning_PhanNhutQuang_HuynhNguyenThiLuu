import { Table } from "antd";
import { DisabledType } from "antd/es/config-provider/DisabledContext";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { hideModal } from "../../redux/reducer/modalReducer";
import {
  getUserRegisterdCourseApi,
  getUserWaitingCourseApi,
  setIsLoading,
} from "../../redux/reducer/userManageReducer";
import {
  columnsRegisteredTable,
  columnsWaitingTable,
  paginationEnrollConfig,
} from "./TableConfig";

type Props = {};

const Enrollment: React.FC = (props: Props) => {
  // GET DISPATCH
  const dispatch: DispatchType = useDispatch();

  // GET FROM REDUX STORE
  const { userSelected, userWaitingCourses, userRegisteredCourses } =
    useSelector((state: RootState) => state.userManageReducer);

  // Handle discard
  const handleDiscard = () => {
    dispatch(hideModal());
  };
  // useEffect calling api
  useEffect(() => {
    const getUserCoursesAll = (userName: string | null) => {
      return (dispatch: DispatchType) => {
        dispatch(getUserWaitingCourseApi(userName));
        dispatch(getUserRegisterdCourseApi(userName));
      };
    };
    dispatch(getUserCoursesAll(userSelected));
  }, [userSelected]);

  // Handling when user has not registerd any course
  if (userRegisteredCourses.length === 0 && userWaitingCourses.length === 0) {
    return (
      <>
        <h4>THIS USER HAS NOT REGISTERED OR APPLIED ANY COURSE</h4>
        <div className="btnZone text-end mt-5">
          <button onClick={handleDiscard} className="btn btn-secondary">
            Discard
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Enrollment User</h2>
      <div
        className="waiting"
        style={{
          display: userWaitingCourses.length !== 0 ? "block" : "none",
        }}
      >
        <hr />
        <h4 className="">Waiting assign:</h4>
        <div className="table-responsive">
          <Table
            columns={columnsWaitingTable}
            dataSource={userWaitingCourses}
            pagination={paginationEnrollConfig}
            size={"large"}
          />
        </div>
      </div>
      <div
        className="registered"
        style={{
          display: userRegisteredCourses.length !== 0 ? "block" : "none",
        }}
      >
        <hr />
        <h4>Registered: </h4>
        <div className="table-responsive">
          <Table
            columns={columnsRegisteredTable}
            dataSource={userRegisteredCourses}
            pagination={paginationEnrollConfig}
          />
        </div>
      </div>
      <div className="btnZone text-end mt-5">
        <button className="btn btn-secondary" onClick={handleDiscard}>
          Discard
        </button>
      </div>
    </>
  );
};

export default Enrollment;
