import "./Layout.scss";
import { ReactNode } from "react";
import LayoutHeader from "./LayoutHeader/LayoutHeader";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
