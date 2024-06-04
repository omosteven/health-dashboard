import HigherThanAverage from "components/Main/Home/DiagnosisHistory/common/HigherThanAverage/HigherThanAverage";
import LowerThanAverage from "components/Main/Home/DiagnosisHistory/common/LowerThanAverage/LowerThanAverage";
import { IDiagnosisData } from "types";

export const getBasicAuthHeader = (
  username: string,
  password: string
): string => {
  const credentials = `${username}:${password}`;
  return `Basic ${btoa(credentials)}`;
};

export const getErrorMessage = (error: any) => {
  const response = error?.response;
  const defaultMssg = "Something went wrong. Please try again.";
  const has500xError = response?.status?.toString?.()?.includes?.("50");
  const errorMessage = has500xError
    ? defaultMssg
    : response?.data
    ? response?.data?.detail || response?.data?.message
    : defaultMssg;

  return errorMessage;
};

export const getFormattedDate = (date?: string) => {
  let monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateTime = date ? new Date(date) : new Date();

  let fullYear = dateTime.getFullYear();
  let month = dateTime.getMonth();
  let day = dateTime.getDate();
  let dayString = String(day);
  if (day < 10 && day > 0) {
    dayString = `0${day}`;
  }

  // let hour = dateTime.getHours();
  // let minute = dateTime.getMinutes();

  return `${monthList[month]} ${dayString}, ${fullYear}`;
};

const determineLevel = (
  value: number,
  lowerRange: number,
  higherRange: number
) => {
  const lowerThanAverage = "Lower than Average";
  const normalLevel = "Normal";
  const higherThanAverage = "Higher than Average";

  return {
    level:
      value < lowerRange
        ? lowerThanAverage
        : value > higherRange
        ? higherThanAverage
        : normalLevel,
    value,
  };
};

export const computeAvgDiagnosisMetrics = (
  data: IDiagnosisData[],
  limit: number = 0
) => {
  const dataSize =
    limit > data.length ? data.length : limit > 0 ? limit : data.length;

  let totalTemp = 0;

  let totalRespRate = 0;
  let totalHeartRate = 0;
  let totalDiastolic = 0;
  let totalSystolic = 0;

  for (let i = 0; i < dataSize; i++) {
    const eachMetric = data[i];
    const { blood_pressure, heart_rate, respiratory_rate, temperature } =
      eachMetric;

    totalTemp += temperature?.value;
    totalRespRate += respiratory_rate?.value;
    totalTemp += temperature?.value;
    totalDiastolic += blood_pressure?.diastolic?.value;
    totalSystolic += blood_pressure?.systolic?.value;
    totalHeartRate += heart_rate?.value;
  }

  let avgDiastolic = totalDiastolic / dataSize;
  let avgSystolic = totalSystolic / dataSize;
  let avgHeartRate = totalHeartRate / dataSize;
  let avgRespRate = totalRespRate / dataSize;
  let avgTemp = totalTemp / dataSize;

  // --- Some of these ranges may not be accurate ---
  let temperature = determineLevel(avgTemp, 97, 99);
  let respiratory_rate = determineLevel(avgRespRate, 10, 30);
  let heart_rate = determineLevel(avgHeartRate, 80, 100);
  let diastolic = determineLevel(avgDiastolic, 60, 80);
  let systolic = determineLevel(avgSystolic, 90, 120);

  return {
    temperature,
    respiratory_rate,
    heart_rate,
    diastolic,
    systolic,
  };
};

export const computeMetricStatus = (value: string) => {
  return value === "Normal" ? (
    "Normal"
  ) : value === "Lower than Average" ? (
    <LowerThanAverage />
  ) : (
    <HigherThanAverage />
  );
};
