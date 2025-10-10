import GradientCon from "./GradientCon";
import { conDetails } from "../../constants/radialConDetails";

function RadialGradient() {
  return (
    <div className="con relative">
      {conDetails.map((el) => (
        <GradientCon conDetail={el} key={el.id} />
      ))}
    </div>
  );
}
export default RadialGradient;
