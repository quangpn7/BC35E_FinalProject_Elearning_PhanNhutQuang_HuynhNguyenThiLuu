import { Carousel } from "antd";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CourseDetailModal } from "../../interfaces/course/CourseType";
import { CarouselProps } from "../../interfaces/others/CarouselType";
import { RootState } from "../../redux/configStore";

const NextArrow: React.ElementType = ({
  currentSlide,
  slideCount,
  ...props
}: any) => (
  <div {...props}>
    <i className="fas fa-arrow-circle-right"></i>
  </div>
);

const PrevArrow: React.ElementType = ({
  currentSlide,
  slideCount,
  ...props
}: any) => (
  <div {...props}>
    <i className="fas fa-arrow-circle-left"></i>
  </div>
);

const CarouselAntd: React.FC<CarouselProps> = (props: CarouselProps) => {
  const { homeCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  const setCarouselContent = (
    coursesList: CourseDetailModal[]
  ): ReactNode[] => {
    return coursesList?.slice(0, 3).map((course, index) => {
      return (
        <div>
          <div className="carousel__content" key={index}>
            {/* <div className="carousel__img">
              <img src={`img/carou-${index + 1}.jpg`} className="" />
            </div> */}
            <div className="carousel__text  text-center">
              <h1 className="display-6">{course.tenKhoaHoc}</h1>
              <p className="carousel__description">
                {course.moTa.length > 150
                  ? course.moTa.slice(0, 150) + "..."
                  : course.moTa}
              </p>
              <NavLink
                to={`/detail/${course.maKhoaHoc}`}
                className="btn-viewDetail"
              >
                Detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  if (props?.renderType === "welcome") {
    return (
      <>
        <Carousel
          draggable={true}
          autoplay={true}
          dots={true}
          pauseOnDotsHover={true}
          arrows={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {setCarouselContent(homeCourses)}
        </Carousel>
      </>
    );
  } else {
    return (
      <>
        <Carousel
          autoplay={true}
          draggable={true}
          slidesToShow={4}
          infinite={true}
          autoplaySpeed={5000}
          slidesToScroll={1}
          focusOnSelect={false}
          dots={false}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <div className="brandCoop__item">
            <img src="img/brand-1.jpg" alt="Education" className="mx-auto" />
          </div>
          <div className="brandCoop__item">
            <img src="img/brand-2.jpg" alt="Education" className="mx-auto" />
          </div>
          <div className="brandCoop__item">
            <img src="img/brand-3.jpg" alt="Education" className="mx-auto" />
          </div>
          <div className="brandCoop__item">
            <img src="img/brand-4.jpg" alt="Education" className="mx-auto" />
          </div>
          <div className="brandCoop__item">
            <img src="img/brand-2.jpg" alt="Education" className="mx-auto" />
          </div>
        </Carousel>
      </>
    );
  }
};

export default CarouselAntd;
