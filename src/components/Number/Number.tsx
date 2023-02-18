import React from "react";
import CountUp from "react-countup";

type Props = {};

const Number: React.FC<Props> = () => {
  return (
    <>
      <div className="number__content container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center">
            <h2 className="number__inner">
              <CountUp
                end={80}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={4}
              />
            </h2>
            <p>PROFESSIONAL TEACHER</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center">
            <h2 className="number__inner">
              <CountUp
                end={20}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={4}
              />
            </h2>
            <p>NEW COURSES EVERY YEARS</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center">
            <h2 className="number__inner">
              <CountUp
                end={56}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={4}
              />
            </h2>
            <p>FACILITIES ESTABLISHED</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex align-items-center">
            <h2 className="number__inner">
              <CountUp
                end={77}
                duration={5}
                enableScrollSpy={true}
                scrollSpyDelay={4}
              />
            </h2>
            <p>REGISTERD STUDENTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Number;
