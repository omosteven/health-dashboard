import { SkeletonLoader, Table } from "components/ui";

import "./DiagnosticList.scss";

interface Diagnostic {
  problem: string;
  description: string;
  status: string;
}

interface IDiagnosticListProps {
  diagnosticList?: Diagnostic[];
  isLoading: boolean;
}

const DiagnosticList: React.FC<IDiagnosticListProps> = ({
  isLoading,
  diagnosticList = [],
}) => {
  
  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>
      <div className="diagnostic-list__table">
        {isLoading ? (
          <SkeletonLoader counter={6} />
        ) : (
          <Table
            head={["Problem/Diagnosis", "Description", "Status"]}
            body={diagnosticList}
          />
        )}
      </div>
    </div>
  );
};

export default DiagnosticList;
