import React from "react";
import DataOfOrderCreationHistory from "./DataOfOrderCreationHistory";
import { WrapperContainerTitle } from "./style";

const OrderCreationHistoryPage = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <WrapperContainerTitle>Lịch sử tạo đơn</WrapperContainerTitle>

      <DataOfOrderCreationHistory style={{ width: "100%" }} />
    </div>
  );
};

export default OrderCreationHistoryPage;
