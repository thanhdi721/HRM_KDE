import React from "react";
import HeaderComponents from "../HeaderComponent/HeaderComponents";

const DefaultComponents = ({ children }) => {
  return (
    <div>
      <HeaderComponents />
      {children}
    </div>
  );
};

export default DefaultComponents;
