import React from "react";
import { WrapperContainerTitle } from "./style";
import DataEmployeeManager from "./DataEmployeeManager";

const EmployeeManagerPage = () => {
  return (
    <div>
      <WrapperContainerTitle>
        Danh sách các đơn cần quản lý
      </WrapperContainerTitle>
      <DataEmployeeManager />
    </div>
  );
};

export default EmployeeManagerPage;
