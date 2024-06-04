import { ReactNode } from "react";

interface ITheadProps {
  head: Array<ReactNode>;
}

const Thead: React.FC<ITheadProps> = ({ head }) => {
  return (
    <>
      <thead>
        <tr>
          {head.map((item: any, key) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;
