import React from "react";

import CarouselAntd from "../../components/Carousel/CarouselAntd";
import CoursesGrid from "../../components/CoursesGrid/CoursesGrid";
import Number from "../../components/Number/Number";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main>
        <div>
          <div className="carousel">
            <CarouselAntd renderType="welcome" />
          </div>
          <section className="welcome">
            <div className="welcome__wrapper text-center container">
              <div className="welcome__title">
                <h1>Welcome To Academics</h1>
                <p>
                  Tmply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been theindustry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>
              </div>
              <div className="welcome__row row">
                <div className="welcome__item col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <span className="welcome__icon">
                    <i className="fas fa-graduation-cap" />
                  </span>
                  <h4>Scholarship Facility</h4>
                  <p>
                    Dorem Ipsum has been the industry's standard dummy text ever
                    since the en an unknown printer galley dear.
                  </p>
                </div>
                <div className="welcome__item col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <span className="welcome__icon">
                    <i className="fas fa-user" />
                  </span>
                  <h4>Skilled Lecturers</h4>
                  <p>
                    Dorem Ipsum has been the industry's standard dummy text ever
                    since the en an unknown printer galley dear.
                  </p>
                </div>
                <div className="welcome__item col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <span className="welcome__icon">
                    <i className="fas fa-book" />
                  </span>
                  <h4>Book Library &amp; Store</h4>
                  <p>
                    Dorem Ipsum has been the industry's standard dummy text ever
                    since the en an unknown printer galley dear.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="courses">
            <CoursesGrid />
          </section>
          <div className="number">
            <Number />
          </div>
          <div className="brandCoop">
            <div className="container">
              <CarouselAntd renderType={"brand"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
