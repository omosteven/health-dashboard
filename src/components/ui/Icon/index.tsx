import { icons } from "./icons";
import "./Icon.scss";

interface IIcon {
  icon?: string;
  color?: string;
  className?: string;
  src?: string;
  onClick?: Function;
}

const Icon: React.FC<IIcon> = ({ icon, color, className, src, onClick }) => {
  return (
    <>
      {src ? (
        <div className="custom-icon" onClick={() => onClick?.()}>
          <img
            src={src}
            className={`custom-icon__img || ${className}`}
            alt={"Icon"}
          />
        </div>
      ) : (
        <i
          className={`${icons[icon as keyof typeof icons]} || ${className}`}
          aria-hidden="true"
          style={{ color }}
          onClick={() => onClick?.()}
        />
      )}
    </>
  );
};

export default Icon;
