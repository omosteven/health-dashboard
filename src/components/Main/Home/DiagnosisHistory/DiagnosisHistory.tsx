import { useState } from "react";

import assets from "assets";
import DHMetric from "./DHMetric/DHMetric";
import "./DiagnosisHistory.scss";
import DHChart from "./DHChart/DHChart";
import { computeAvgDiagnosisMetrics, computeMetricStatus } from "utils/helpers";
import { IDiagnosisData } from "types";

const { heartBPIcon, temperatureIcon, respiratoryIcon } = assets.icons;

interface IDHistoryProps {
  isLoading: boolean;
  diagnosisData?: IDiagnosisData[];
}

const DiagnosisHistory: React.FC<IDHistoryProps> = ({
  isLoading,
  diagnosisData,
}) => {
  const [period, setPeriod] = useState(0);

  const { temperature, respiratory_rate, heart_rate, diastolic, systolic } =
    computeAvgDiagnosisMetrics(diagnosisData || [], period);

  const metrics = [
    {
      icon: respiratoryIcon,
      title: "Respiratory Rate",
      value: `${respiratory_rate?.value?.toFixed(1)} bpm`,
      status: computeMetricStatus(respiratory_rate?.level),
      bgColor: "#E0F3FA",
      isLoading,
    },
    {
      icon: temperatureIcon,
      title: "Temperature",
      value: `${temperature?.value?.toFixed(1)} F`,
      status: computeMetricStatus(temperature?.level),
      bgColor: "#FFE6E9",
      isLoading,
    },
    {
      icon: heartBPIcon,
      title: "Heart Rate",
      value: `${heart_rate?.value?.toFixed(1)} bpm`,
      status: computeMetricStatus(heart_rate?.level),
      bgColor: "#FFE6F1",
      isLoading,
    },
  ];

  return (
    <div className="diagnosis-history">
      <h3>Diagnosis History</h3>
      <div>
        <DHChart
          chartData={diagnosisData?.slice(
            0,
            period === 0 ? diagnosisData?.length : period
          )}
          systolic={systolic}
          diastolic={diastolic}
          setPeriod={setPeriod}
          isLoading={isLoading}
        />
      </div>
      <div className="diagnosis-history__metrics">
        {metrics?.map((metric, key) => (
          <DHMetric key={key} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default DiagnosisHistory;
