import assets from "assets";

// import { useState } from "react";
import LayoutHeaderActions from "./LayoutHeaderActions/LayoutHeaderActions";
import LayoutHeaderBox from "./LayoutHeaderBox/LayoutHeaderBox";

import "./LayoutHeader.scss";

const { testCareLogo } = assets.images;

const LayoutHeader = () => {
  return (
    <header className="layout-header">
      <section className="layout-header__logo">
        <img src={testCareLogo} alt="Test Care" />
      </section>

      <LayoutHeaderActions />
      <LayoutHeaderBox />
    </header>
  );
};

export default LayoutHeader;
