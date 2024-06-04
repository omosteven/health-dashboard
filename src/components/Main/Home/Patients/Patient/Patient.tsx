import { IPatientInfo } from "types";
import assets from "assets";
import "./Patient.scss";
import { Icon } from "components/ui";
import classNames from "classnames";

const { menuIcon } = assets.icons;

interface IPatientProps {
  patient: IPatientInfo;
  isActive?: boolean;
  selectPatient: (patient: IPatientInfo) => void;
}

const Patient: React.FC<IPatientProps> = ({
  patient,
  isActive,
  selectPatient,
}) => {
  const { name, profile_picture, age, gender } = patient;

  return (
    <div
      className={classNames("patient", { active: isActive })}
      onClick={() => selectPatient(patient)}
    >
      <div className="patient__info">
        <Icon src={profile_picture} />
        <div>
          <h4>{name}</h4>
          <p>{`${gender}, ${age}`}</p>
        </div>
      </div>
      <div>
        <Icon src={menuIcon} />
      </div>
    </div>
  );
};
export default Patient;
