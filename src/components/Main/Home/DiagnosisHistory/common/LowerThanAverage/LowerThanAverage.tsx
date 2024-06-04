import assets from "assets";
import { Icon } from "components/ui";
import "./LowerThanAverage.scss";

const { arrowDown } = assets.icons;

const LowerThanAverage = () => {
  return (
    <p className="lower-than-average">
      <Icon src={arrowDown} />
      Lower than Average
    </p>
  );
};

export default LowerThanAverage;
