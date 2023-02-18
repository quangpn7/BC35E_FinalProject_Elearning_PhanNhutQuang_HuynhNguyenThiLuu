import { ReactElement } from "react";

function Lecture(): ReactElement {
  return (
    <li className="lecture">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 d-flex col-md-6 col-lg-5 col-xl-5">
            <div className="img">
              <a href="">
                <img
                  src="https://www.radiustheme.com/demo/html/academics/academics/img/sidebar/1.jpg"
                  className="img-responsive"
                  alt="skilled"
                />
              </a>
            </div>
            <div className="content">
              <h4>
                <a href="">Kazi Fahim</a>
              </h4>
              <p>Senior UI Designer</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 col-xl-5">
            <div className="schedule" style={{ padding: ".5rem 0" }}>
              <ul className=" d-flex">
                <li>
                  <h4>Day</h4>
                  <p>Wed Day</p>
                </li>
                <li>
                  <h4>Time</h4>
                  <p>9 am - 11 am</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-lg-3 col-xl-2">
            <div className="details">
              <a href="#" className="btn">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Lecture;
