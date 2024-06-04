import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IDiagnosisData } from "types";
import { computeMetricStatus } from "utils/helpers";
import PeriodSelector from "./PeriodSelector";

interface Metric {
  level: string;
  value: number;
}

interface IDHChartProps {
  diastolic: Metric;
  systolic: Metric;
  chartData?: IDiagnosisData[];
  setPeriod: (period: number) => void;
  isLoading: boolean;
}

const DHChart: React.FC<IDHChartProps> = ({
  diastolic,
  systolic,
  chartData,
  setPeriod,
  isLoading,
}) => {
  const formattedData = chartData?.map((item) => ({
    ...item,
    date: `${item.month.substring(0, 3)} ${item.year}`,
  }));

  return (
    <div className="diagnosis-history__chart">
      <div className="diagnosis-history__chart__plot">
        <div className="diagnosis-history__chart__plot__header">
          <h4>Blood Pressure</h4>
          <PeriodSelector setPeriod={setPeriod} />
        </div>
        <div style={{ width: "100%", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={formattedData}
              margin={{ left: -32, bottom: -6, top: 8, right: 0 }}
            >
              <XAxis dataKey="date" stroke="#072635" />
              <YAxis stroke="#072635" />
              <CartesianGrid strokeDasharray="1 3" />
              <Tooltip />
              <Line
                type="natural"
                dataKey="blood_pressure.systolic.value"
                stroke="#E66FD2"
                name="Systolic"
                fill="#E66FD2"
              />
              <Line
                type="natural"
                dataKey="blood_pressure.diastolic.value"
                stroke="#8C6FE6"
                name="Diastolic"
                fill="#8C6FE6"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="diagnosis-history__chart__legends">
        <div className="diagnosis-history__chart__legends__item">
          <h5>
            <span className="pink"></span>
            Systolic
          </h5>
          <h4>{isLoading ? "-" : systolic.value.toFixed(0)}</h4>
          {isLoading ? "" : computeMetricStatus(systolic.level)}
        </div>

        <div className="diagnosis-history__chart__legends__item">
          <h5>
            <span className="purple"></span>
            Diastolic
          </h5>
          <h4>{isLoading ? "-" : diastolic.value.toFixed()}</h4>
          {isLoading ? "" : computeMetricStatus(diastolic.level)}
        </div>
      </div>
    </div>
  );
};

export default DHChart;
