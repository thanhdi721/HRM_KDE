import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminOrder from "../../components/AdminOrder/AdminOrder";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Nhân Viên", "user", <MailOutlined />),
  getItem("Update...", "order", <AppstoreOutlined />),
];

const AdminPage1 = () => {
  const [keySelected, setKeySelected] = useState("");

  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "order":
        return <AdminOrder />;
      default:
        return <></>;
    }
  };

  const handleOnClick = ({ key }) => {
    console.log("click", { key });
    setKeySelected(key);
  };
  return (
    <div style={{ display: "flex" }}>
      <Menu
        mode="inline"
        onClick={handleOnClick}
        style={{
          width: "256px",
          boxShadow: "1px 1px 2px #ccc",
        }}
        items={items}
      />
      <div style={{ flex: 1, padding: "15px" }}>{renderPage(keySelected)}</div>
    </div>
  );
};
export default AdminPage1;
