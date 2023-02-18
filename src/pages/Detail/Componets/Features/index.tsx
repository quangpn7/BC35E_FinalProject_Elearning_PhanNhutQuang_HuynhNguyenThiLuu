import { ReactElement } from "react";
import Feature from "./Feature";
type Props = {
  features: [];
};
function Features(props: Props): ReactElement {
  return (
    <ul>
      <Feature label="" content="" />
      <Feature label="" content="" />
      <Feature label="" content="" />
      <Feature label="" content="" />
    </ul>
  );
}

export default Features;
