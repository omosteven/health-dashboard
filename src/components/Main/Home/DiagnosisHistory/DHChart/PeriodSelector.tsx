const periodList = [
  { value: 6, label: "Last 6 months" },
  { value: 12, label: "Last 12 months" },
  { value: 0, label: "All months" },
];

const PeriodSelector: React.FC<{ setPeriod: (period: number) => void }> = ({
  setPeriod,
}) => (
  <select onChange={(e) => setPeriod(Number(e.target.value))}>
    {periodList.map(({ label, value }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ))}
  </select>
);

export default PeriodSelector;
