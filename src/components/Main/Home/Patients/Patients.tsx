import assets from "assets";
import Patient from "./Patient/Patient";
import { IPatientInfo } from "types";
import { Icon, SkeletonLoader } from "components/ui";
import "./Patients.scss";

const { searchIcon } = assets.icons;

interface IPatientsProps {
  isLoading: boolean;
  patients: IPatientInfo[];
  selectedPatientName?: string;
  selectPatient: (patient: IPatientInfo) => void;
}

const Patients: React.FC<IPatientsProps> = ({
  isLoading,
  patients,
  selectedPatientName,
  selectPatient,
}) => {
  const renderSkeletons = () => (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonLoader key={i} />
      ))}
    </>
  );

  const renderPatients = () => (
    <>
      {patients.map((data, id) => (
        <Patient
          key={id}
          patient={data}
          isActive={selectedPatientName === data.name}
          selectPatient={selectPatient}
        />
      ))}
    </>
  );

  return (
    <div className="patients">
      <div className="patients__header">
        <h3>Patients</h3>
        <Icon src={searchIcon} />
      </div>
      <div className="patients__list">
        {isLoading ? renderSkeletons() : renderPatients()}
      </div>
    </div>
  );
};

export default Patients;
