import { Table } from "antd";
import React from "react";
import Loading from "../LoadingComponent/Loading";

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows,
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const TableComponent = (props) => {
  const {
    selectionType = "checkbox",
    data = [],
    columns = [],
    isLoading = false,
  } = props;

  return (
    <Loading isLoading={isLoading}>
      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
          {...props}
        />
      </div>
    </Loading>
  );
};

export default TableComponent;
