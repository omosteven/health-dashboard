import "./SkeletonLoader.scss";

interface ISkeletonLoaderProps {
  counter?: number;
  useLargeFrames?: boolean;
}

const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({
  counter = 2,
  useLargeFrames = false,
}) => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-header"></div>
      <div className="skeleton-body">
        {Array.from({ length: counter }, (_, i) => (
          <div
            className={`skeleton-line ${useLargeFrames ? "large" : ""}`}
          ></div>
        ))}
        <div className="skeleton-line short"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
