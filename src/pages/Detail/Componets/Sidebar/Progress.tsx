import { ReactElement } from "react";

function Progress(): ReactElement {
  return (
    <div className="progress">
      <div className="lead">5 Stars </div>
      <div
        data-wow-delay="1.2s"
        data-wow-duration="1.5s"
        data-progress="100%"
        className="progress-bar wow fadeInLeft   animated"
      ></div>
      <span>10</span>
    </div>
  );
}

export default Progress;
