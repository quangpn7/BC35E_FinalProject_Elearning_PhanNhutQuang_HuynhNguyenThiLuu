import React from "react";

type Props = {};

const PageNotFound: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="container">
        <div
          className="display-4 fw-bold"
          style={{
            padding: "50px 0px 20px 0px",
          }}
        >
          Sorry, But your page is not found!!
          <br />
        </div>
        <p className="fst-italic fs-5">
          *Click the above logo to move back to home page
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
