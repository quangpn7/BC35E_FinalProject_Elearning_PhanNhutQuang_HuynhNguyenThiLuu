import { Carousel } from "antd";
import React from "react";

interface CarouselProps {
  renderType: string;
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const NextArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <i className="fas fa-arrow-circle-right"></i>
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <i className="fas fa-arrow-circle-left"></i>
  </div>
);

const CarouselAntd = (props: CarouselProps) => {
  if (props?.renderType === "welcome") {
    return (
      <>
        <Carousel
          draggable={true}
          autoplay={false}
          dots={true}
          pauseOnDotsHover={true}
          arrows={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          <div>
            <div className="carousel__content">
              <div className="carousel__img">
                <img src="img/carou-1.jpg" className="w-100" />
              </div>
              <div className="carousel__text  text-center">
                <h1 className="display-5"> Front-End Developer</h1>
                <p className="carousel__description">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>
                <a href="#" className="btn-viewDetail">
                  Detail
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel__content">
              <div className="carousel__img">
                <img src="img/carou-2.jpg" className="w-100" />
              </div>
              <div className="carousel__text  text-center">
                <h1 className="display-5"> Front-End Developer</h1>
                <p className="carousel__description">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>
                <a href="#" className="btn-viewDetail">
                  Detail
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel__content">
              <div className="carousel__img">
                <img src="img/carou-3.jpg" className="w-100" />
              </div>
              <div className="carousel__text  text-center">
                <h1 className="display-5"> Front-End Developer</h1>
                <p className="carousel__description">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>
                <a href="#" className="btn-viewDetail">
                  Detail
                </a>
              </div>
            </div>
          </div>
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
            <img src="img/brand-1.jpg" alt="Education" className="mx-auto" />
          </div>
        </Carousel>
      </>
    );
  }
};

export default CarouselAntd;
