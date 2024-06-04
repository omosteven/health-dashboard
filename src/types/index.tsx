export interface IBase {
  status?:
    | "SUCCESS"
    | "LOADING"
    | "IDLE"
    | "LOADING"
    | "ERROR"
    | "SUCCESS"
    | "NULLMODE";
}

export interface IPatientInfo {
  diagnosis_history: Array<any>;
  age: number;
  date_of_birth: string;
  diagnostic_list: Array<any>;
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: Array<any>;
  name: string;
  phone_number: string;
  profile_picture: string;
}

interface IDiagnosisMetric {
  value: number;
  levels: string;
}

export interface IDiagnosisData {
  blood_pressure: {
    diastolic: IDiagnosisMetric;
    systolic: IDiagnosisMetric;
  };
  heart_rate: IDiagnosisMetric;
  month: string;
  respiratory_rate: IDiagnosisMetric;
  temperature: IDiagnosisMetric;
  year: string;
}
