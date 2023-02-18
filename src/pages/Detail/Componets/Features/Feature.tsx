import { ReactElement } from "react";

type Props = {
  label: string;
  content: string;
};
function Feature(props: Props): ReactElement<Props> {
  return (
    <li className="feature">
      <i className="far fa-check-circle"></i>
      Start: 01 January, 2017
    </li>
  );
}

export default Feature;
