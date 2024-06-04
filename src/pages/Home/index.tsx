import { useEffect, useState } from "react";

import {
  API_QUERY_METHODS,
  DATA_QUERY_STATUSES,
  DEFAULT_PATIENT_ID,
} from "enums";

import Patients from "components/Main/Home/Patients/Patients";
import Profile from "components/Main/Home/Profile/Profile";
import LabResults from "components/Main/Home/LabResults/LabResults";
import DiagnosticList from "components/Main/Home/DiagnosticList/DiagnosticList";
import DiagnosisHistory from "components/Main/Home/DiagnosisHistory/DiagnosisHistory";

import { ErrorView } from "components/ui";

import { apiUrls } from "utils/api";
import { getErrorMessage } from "utils/helpers";
import API from "utils/api/API";

import { IPatientInfo } from "types";

import "./Home.scss";

const { IDLE, LOADING, ERROR, SUCCESS } = DATA_QUERY_STATUSES;

const Home: React.FC = () => {
  const [status, setStatus] = useState<string>(IDLE);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [allPatients, setAllPatients] = useState<IPatientInfo[]>([]);

  const [selectedPatient, selectPatient] = useState<IPatientInfo | undefined>();

  const getPatientData = async () => {
    setStatus(LOADING);
    try {
      const resp = await API({
        method: API_QUERY_METHODS.GET,
        url: apiUrls.getAllPatients,
      });

      const { data } = resp;
      const foundPatient = data.find(
        ({ name }: any) => name === DEFAULT_PATIENT_ID
      );
      selectPatient(foundPatient);
      setAllPatients(data);
      setStatus(SUCCESS);
    } catch (error) {
      const errMsg = getErrorMessage(error);
      setErrorMessage(errMsg);
      setStatus(ERROR);
    }
  };

  const renderBasedOnStatus = () => {
    switch (status) {
      case IDLE:
        return null;
      case ERROR:
        return (
          <ErrorView message={errorMessage} handleRetry={getPatientData} />
        );
      case SUCCESS:
      case LOADING:
        return (
          <div className="home">
            <section>
              <Patients
                isLoading={status === LOADING}
                patients={allPatients}
                selectedPatientName={selectedPatient?.name}
                selectPatient={selectPatient}
              />
            </section>
            <section>
              <DiagnosisHistory
                isLoading={status === LOADING}
                diagnosisData={selectedPatient?.diagnosis_history}
              />
              <DiagnosticList
                isLoading={status === LOADING}
                diagnosticList={selectedPatient?.diagnostic_list}
              />
            </section>
            <section>
              <Profile
                isLoading={status === LOADING}
                profile={selectedPatient}
              />
              <LabResults
                isLoading={status === LOADING}
                labResults={selectedPatient?.lab_results}
              />
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    getPatientData();
    // eslint-disable-next-line
  }, []);

  return renderBasedOnStatus();
};

export default Home;
