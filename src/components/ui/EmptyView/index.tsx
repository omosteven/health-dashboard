import Icon from "../Icon";
import "./EmptyView.scss";

interface IEmptyViewProps {
  message?: string;
  iconClass?: string;
  messageClass?: string;
}

const EmptyView: React.FC<IEmptyViewProps> = ({
  iconClass,
  messageClass,
  message,
}) => {
  return (
    <>
      <div className="empty-view">
        <Icon icon="empty" className={`empty-view__icon ${iconClass}`} />
        <p className={`${messageClass}`}>
          {message ? message : "No Results Found"}
        </p>
      </div>
    </>
  );
};

export default EmptyView;
