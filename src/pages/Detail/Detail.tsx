import { Breadcrumb, Tabs, TabsProps } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import React from "react";
import { NavLink } from "react-router-dom";
import Features from "./Componets/Features";
import Lectures from "./Componets/Lectures";
import Reviews from "./Componets/Reviews";
import Sidebar from "./Componets/Sidebar";

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

  const onChange = (key: string) => {
    console.log(key);
  };

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
              <div className="text">Course Detail 02</div>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>

    <div className="coursePage">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12" >
            <div className="courseDetail__inner">
              <h2 className="title title--after">
                Advance WordPress Development Class
              </h2>
              <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime
                book. It has survived not only five centuries.</p>
              <img src="https://www.radiustheme.com/demo/html/academics/academics/img/course/19.jpg" className="img-responsive" alt="course" />
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
        </div>
      </div>
    </div>
  </div>
};

export default Detail;
