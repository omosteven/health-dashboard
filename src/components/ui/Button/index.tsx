import Icon from "../Icon";
import "./Button.scss";

const statusTypes = {
  IDLE: "IDLE",
  LOADING: "LOADING",
};

interface IButton {
  text: string;
  authText?: string;
  isLoadingText?: string;
  className?: string;
  onClick?: Function;
  id?: string;
  invertStyle?: boolean;
  isLoading?: boolean;
  status?: string;
  icon?: string;
}

const Button: React.FC<IButton> = ({
  text,
  className,
  onClick,
  id,
  invertStyle,
  isLoading,
  isLoadingText,
  status,
  icon,
}) => {
  return (
    <div className="custom-button">
      <button
        id={id}
        className={`button ${invertStyle ? "button-invert" : ""} ${className}
         ${
           isLoading || status === statusTypes.LOADING ? "button-disabled" : ""
         }`}
        onClick={() => onClick?.()}
        disabled={isLoading || status === statusTypes.LOADING}
      >
        {icon && <Icon icon={icon} className="button-icon" />}
        {isLoading || status === statusTypes.LOADING ? (
          <> {isLoadingText ? isLoadingText : text}</>
        ) : (
          <>{text}</>
        )}
        {(isLoading || status === statusTypes.LOADING) && (
          <Icon icon="loading" className="loading-icon rotating" />
        )}
      </button>
    </div>
  );
};

export default Button;
