import { getStoreJson, http } from "../../../../util/config";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/configStore";

import Progress from "./Progress";
import { history } from "../../../..";
import { toast } from "react-hot-toast";
import { ReactElement } from "react";

function Sidebar(): ReactElement {
  const { currentCourse } = useSelector(
    (state: RootState) => state.courseReducer
  );
  // const dispatch: DispatchType = useDispatch();
  // handle enroll
  const handleEnrollClick = (
    courseId: string | undefined,
    userName: string | undefined
  ): void => {
    if (!userName) {
      history.push("/login");
      return;
    }
    http
      .post("/QuanLyKhoaHoc/DangKyKhoaHoc", {
        maKhoaHoc: courseId,
        taiKhoan: userName,
      })
      .then((): void => {
        toast.success("Register successfully!");
      })
      .catch((): void => {
        toast.error("You have enrolled this course!");
      });
  };

  return (
    <div className="sidebar">
      {/* enroll */}
      <div className="sidebar-box">
        <div className="sidebar-box-inner">
          <h3 className="title">Course Price</h3>
          <div className="sidebar-course-price">
            <span>$800.00</span>
            <button
              className="enroll-btn"
              onClick={() => {
                handleEnrollClick(
                  currentCourse?.maKhoaHoc,
                  getStoreJson("userLogin")?.taiKhoan
                );
              }}
            >
              Enroll This Course
            </button>
            <button className="download-btn">Download PDF</button>
          </div>
        </div>
      </div>
      {/* review */}
      <div className="sidebar-box">
        <div className="sidebar-box-inner">
          <h3 className="title">Course Reviews</h3>
          <div className="sidebar-course-reviews">
            <h4>
              Average Rating<span>4.8</span>
            </h4>
            <ul>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
            </ul>
            <div className="skill-area">
              <Progress />
              <Progress />
              <Progress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
