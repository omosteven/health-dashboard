import Icon from "../Icon";
import "./ErrorView.scss";

interface IErrorViewProps {
  message?: string;
  iconClass?: string;
  messageClass?: string;
  handleRetry?: Function;
}

const ErrorView: React.FC<IErrorViewProps> = ({
  iconClass,
  messageClass,
  message,
  handleRetry,
}) => {
  return (
    <div className="error-view">
      <Icon icon="error" className={`error-view__icon ${iconClass}`} />
      <p className={`${messageClass}`}>
        {message ? message : "An error occurred."}
      </p>
      <p className="error-view__retry" onClick={() => handleRetry?.()}>
        Retry
      </p>
    </div>
  );
};

export default ErrorView;
