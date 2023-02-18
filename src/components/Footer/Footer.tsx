import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer>
        <section className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 footer-col-1 mb-sm-4 mb-md-4">
                <h3 className="fw-bold">ACADEMICS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  eos architecto sapiente repellendus tempora unde dolor
                  consequatur repudiandae cumque delectu.
                </p>
                <div className="d-flex">
                  <a className="ms-0" href="#">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-square" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 footer-col-2">
                <h4>Featured Links</h4>
                <div className="d-flex">
                  <ul>
                    <li>
                      <a href="#">Graduation</a>
                    </li>
                    <li>
                      <a href="#">Admissions</a>
                    </li>
                    <li>
                      <a href="#">Internation</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Book store</a>
                    </li>
                    <li>
                      <a href="#">Alumni</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 footer-col-3">
                <h4>Information</h4>
                <div className="information-content">
                  <a href="tel:+763837727122" className="d-block">
                    <span className="pe-2">
                      <i className="fas fa-phone" />
                    </span>
                    + 947 289 38817
                  </a>
                  <a href="mailto:info@academics.com" className="d-block">
                    <span className="pe-2">
                      <i className="fas fa-envelope" />
                    </span>
                    info@academics.com
                  </a>
                  <h5>Newsletter</h5>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email..."
                      aria-describedby="btn-sign"
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      id="btn-sign"
                    >
                      <i className="far fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
