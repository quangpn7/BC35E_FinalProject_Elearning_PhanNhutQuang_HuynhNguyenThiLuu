import { Breadcrumb, Tabs, TabsProps } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Course from "../../components/Course/Course";
import { DispatchType, RootState } from "../../redux/configStore";
import Features from "./Componets/Features";
import Lectures from "./Componets/Lectures";
import Reviews from "./Componets/Reviews";
import Sidebar from "./Componets/Sidebar";
import { getCourseDetailApi } from "../../redux/reducer/courseReducer";
import Loading from "../../components/Loading/Loading";
import { scrollToTop } from "../../util/common";

type Props = {
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Features`,
    children: <Features features={[]} />,
  },
  {
    key: '2',
    label: `Lectures`,
    children: <Lectures />,
  },
  {
    key: '3',
    label: `Reviews`,
    children: <Reviews />,
  },
];

const Detail = (props: Props) => {
  const { currentCourse, isLoading, allCourses } = useSelector((state: RootState) => state.courseReducer);

  const onChange = (key: string) => {
    console.log(key);
  };

  const { id } = useParams();

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (id) {
      //
      const action = getCourseDetailApi(id);
      dispatch(action);

      scrollToTop();
    }
  }, [id])

  return <div className="courseDetail">
    <div className="banner">
      <div className="overlay"></div>
      <div className="content">
        <div className="pagination-area">
          <h1>Single course - 02</h1>
          <Breadcrumb>
            <BreadcrumbItem>
              <NavLink to={'/'} className="link">Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <div className="text">{currentCourse?.tenKhoaHoc}</div>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>


    <div className="coursePage">
      <div className="container">
        {isLoading &&
          <div className="col-12 d-flex justify-content-center aligns-item-center pt-5">
            <Loading />
          </div>
        }
        {!isLoading && !currentCourse &&
          <div>
            <div style={{ fontWeight: 400, color: '#fec800', fontSize: '1rem', paddingLeft: '1rem' }}>
              <i>Không tìm thấy khóa học</i>
            </div>
          </div>}
        {!isLoading && currentCourse &&
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12" >
              <div className="courseDetail__inner">
                <h2 className="title title--after">
                  {currentCourse?.tenKhoaHoc}
                </h2>
                <p>{currentCourse?.moTa}</p>
                <img
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  src={currentCourse?.hinhAnh}
                  className="img-responsive"
                  alt="course"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/img/brand-1.jpg';
                  }}
                />
                <div className="courseDetail__tabs">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <Sidebar />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 className="title">Related courses</h3>
              <div className="courses">
                <div className="row">
                  {allCourses?.slice(0, 4).map(course => (
                    <div className="col-md-6 col-xl-3 col-lg-4 col-xs-12" key={course.maKhoaHoc}>
                      <Course course={course} />
                    </div>
                  ))}
                  {(!allCourses || allCourses.length === 0) && <div>
                    <div style={{ fontWeight: 400, color: '#fec800', fontSize: '1rem', paddingLeft: '1rem' }}>
                      <i>Không có dữ liệu phù hợp</i>
                    </div>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
};

export default Detail;
