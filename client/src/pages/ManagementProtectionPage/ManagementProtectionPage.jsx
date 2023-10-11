import React from "react";
import { WrapperContainerTitle } from "./style";
import DataManagementProtectionPage from "./DataManagementProtectionPage";

const ManagementProtectionPage = () => {
  return (
    <div>
      <WrapperContainerTitle>
        Danh sách các đơn cần xác nhận
      </WrapperContainerTitle>
      <DataManagementProtectionPage />
    </div>
  );
};

export default ManagementProtectionPage;
