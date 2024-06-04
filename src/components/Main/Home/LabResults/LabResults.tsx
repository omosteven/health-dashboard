import { Icon, SkeletonLoader } from "components/ui";
import "./LabResults.scss";
import assets from "assets";

const { downloadIcon } = assets.icons;

interface ILabResultsProps {
  isLoading: boolean;
  labResults?: string[];
}

const LabResults: React.FC<ILabResultsProps> = ({ isLoading, labResults }) => {
  const renderSkeletons = () => (
    <>
      {Array.from({ length: 2 }, (_, i) => (
        <SkeletonLoader key={i} counter={1} useLargeFrames />
      ))}
    </>
  );

  const renderLabResults = () => (
    <div className="lab-results__list">
      {labResults?.map((title, key) => (
        <li key={key}>
          {/* className="active" */}
          <span>{title}</span>
          <Icon src={downloadIcon} />
        </li>
      ))}
    </div>
  );

  return (
    <div className="lab-results">
      <h3>Lab Results</h3>
      {isLoading ? renderSkeletons() : renderLabResults()}
    </div>
  );
};

export default LabResults;
