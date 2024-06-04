import { Icon } from "components/ui";
import { ReactNode } from "react";

interface IDHMetricProps {
  icon: string;
  title: string;
  value: string;
  status: string | ReactNode;
  bgColor?: string;
  isLoading: boolean;
}

const DHMetric: React.FC<IDHMetricProps> = ({
  icon,
  title,
  value,
  status,
  bgColor,
  isLoading,
}) => {
  return (
    <div
      className="diagnosis-history__metrics__card"
      style={{ background: bgColor }}
    >
      <Icon src={icon} />
      <p>{title}</p>
      <b>{isLoading ? "-" : value}</b>
      <h4>{isLoading ? "" : status}</h4>
    </div>
  );
};

export default DHMetric;
