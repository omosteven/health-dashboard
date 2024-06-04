import assets from "assets";
import { Icon } from "components/ui";
import "./HigherThanAverage.scss";

const { arrowUp } = assets.icons;

const HigherThanAverage = () => {
  return (
    <p className="higher-than-average">
      <Icon src={arrowUp} />
      Higher than Average
    </p>
  );
};

export default HigherThanAverage;
