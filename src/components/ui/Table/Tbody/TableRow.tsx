interface ITableRowProps {
  item?: any;
  rowClass?: string;
  dataClass?: string;
}

const TableRow: React.FC<ITableRowProps> = ({ item }) => {
  return (
    <>
      <tr>
        {Object.values(item).map((subitem: any, key) => (
          <td key={key}>{subitem}</td>
        ))}
      </tr>
    </>
  );
};

export default TableRow;
