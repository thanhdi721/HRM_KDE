import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "Ngày tạo",
    dataIndex: "dateCreated",
  },
  {
    title: "Từ",
    dataIndex: "from",
  },
  {
    title: "Đến",
    dataIndex: "to",
  },
  {
    title: "Lý do",
    dataIndex: "reason",
  },
  {
    title: "Trạng thái CBQL",
    dataIndex: "status",
  },
  {
    title: "Từ (thực tế)",
    dataIndex: "fromReality",
  },
  {
    title: "Đến (thực tế)",
    dataIndex: "toReality",
  },
  {
    title: "Sửa",
    dataIndex: "fix",
  },
  {
    title: "Xóa",
    dataIndex: "delete",
  },
];
const data = [
  {
    key: "1",
    dateCreated: "01/08/2023",
    from: "2023/8/30 11:00:00",
    to: "2023/8/30 1:00:00 ",
    reason: "Việc gia đình",
    status: "Chờ",
    fromReality: "30/08/2023 10:10",
    toReality: "30/08/2023  11:00",
    fix: "sửa",
    delete: "xóa",
  },
  {
    key: "2",
    dateCreated: "01/08/2023",
    from: "2023/8/30 11:00:00",
    to: "2023/8/30 1:00:00 ",
    reason: "Việc gia đình",
    status: "Chờ",
    fromReality: "30/08/2023 10:10",
    toReality: "30/08/2023  11:00",
    fix: "sửa",
    delete: "xóa",
  },
  {
    key: "3",
    dateCreated: "01/08/2023",
    from: "2023/8/30 11:00:00",
    to: "2023/8/30 1:00:00 ",
    reason: "Việc gia đình",
    status: "Chờ",
    fromReality: "30/08/2023 10:10",
    toReality: "30/08/2023  11:00",
    fix: "sửa",
    delete: "xóa",
  },
];

const DataOfOrderCreationHistory = () => {
  return (
    <div>
      <Table
        scroll={{ x: true, y: 400 }}
        columns={columns}
        dataSource={data}
        size="middle"
        style={{ width: "100%", margin: "auto" }}
      />
    </div>
  );
};

export default DataOfOrderCreationHistory;
