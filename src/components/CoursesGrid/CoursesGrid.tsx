import React from "react";

type Props = {};

const CoursesGrid = (props: Props) => {
  return (
    <>
      <div className="courses__content container">
        <h1>Featured Courses</h1>
        <div className="courses__grid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="card courses__item">
                <div className="card-img-top" id="coursesTop">
                  <img src="https://i.pravatar.cc" />
                </div>
                <div className="card-body">
                  <h4>Course name</h4>
                  <p>
                    Rmply dummy printing ypesetting industry it’s free demo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card courses__item">
                <div className="card-img-top">
                  <img src="https://i.pravatar.cc" />
                </div>
                <div className="card-body">
                  <h4>Course name</h4>
                  <p>
                    Rmply dummy printing ypesetting industry it’s free demo.
                  </p>
                </div>
              </div>
              <div className="card courses__item">
                <div className="card-img-top">
                  <img src="https://i.pravatar.cc" />
                </div>
                <div className="card-body">
                  <h4>Course name</h4>
                  <p>
                    Rmply dummy printing ypesetting industry it’s free demo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="card courses__item">
                <div className="card-img-top">
                  <img src="https://i.pravatar.cc" />
                </div>
                <div className="card-body">
                  <h4>Course name</h4>
                  <p>
                    Rmply dummy printing ypesetting industry it’s free demo.
                  </p>
                </div>
              </div>
              <div className="card courses__item">
                <div className="card-img-top">
                  <img src="https://i.pravatar.cc" />
                </div>
                <div className="card-body">
                  <h4>Course name</h4>
                  <p>
                    Rmply dummy printing ypesetting industry it’s free demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <a className="btn-viewAll text-decoration-none">VIEW ALL COURSES</a>
      </div>
    </>
  );
};

export default CoursesGrid;
