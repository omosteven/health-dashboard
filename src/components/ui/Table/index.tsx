import { ReactNode } from "react";
import "./Table.scss";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";

interface ITableProps {
  tableClass?: string;
  head: Array<ReactNode>;
  body: Array<object>;
}

const Table: React.FC<ITableProps> = ({ tableClass, head, body }) => {
  return (
    <div className="custom-table">
      <table className={`${tableClass}`}>
        <Thead head={head} />
        <Tbody body={body} />
      </table>
    </div>
  );
};

export default Table;
