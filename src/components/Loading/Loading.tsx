import React, { ReactElement } from "react";

type Props = {};

function Loading({}: Props): ReactElement {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
