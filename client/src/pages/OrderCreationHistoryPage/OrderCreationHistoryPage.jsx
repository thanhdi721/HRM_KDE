import React from "react";
import DataOfOrderCreationHistory from "./DataOfOrderCreationHistory";
import { WrapperContainerTitle } from "./style";

const OrderCreationHistoryPage = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <WrapperContainerTitle>Lịch sử tạo đơn</WrapperContainerTitle>

      <DataOfOrderCreationHistory />
    </div>
  );
};

export default OrderCreationHistoryPage;
