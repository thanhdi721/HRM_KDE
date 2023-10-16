import { Col, Dropdown, Image } from "antd";
import React from "react";
import { useAuth } from "../../config/AuthContext";
import { useNavigate } from "react-router-dom";
import { WrapperHeader, WrapperIconHeader } from "./style";
import imageLogo from "../../assets/images/logo.png";
import { UnorderedListOutlined } from "@ant-design/icons";



const HeaderComponents = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleNavigateLogo = () => {
    navigate("/homepage");
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "#9255FD",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={4}>
          <Image
            onClick={handleNavigateLogo}
            src={imageLogo}
            alt=""
            style={{ width: "70px", height: "70px" }}
            preview={false}
          />
        </Col>
        <Col span={15}></Col>
        <Col span={5}>
          <WrapperIconHeader>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <a rel="noopener noreferrer" href="/infopage">
                        Thông tin cá nhân
                      </a>
                    ),
                  },
                  {
                    key: "2",
                    label: <a href="/homepage">Tạo đơn ra cổng</a>,
                  },
                  {
                    key: "3",
                    label: <a href="/order-creation-history">Lịch sử tạo đơn</a>,
                  },
                  {
                    key: "4",
                    label: <a href="/employee-manager-page">Quản Lý nhân viên</a>,
                  },
                  {
                    key: "5",
                    label: <a href="/management-protection-page">Bảo vệ quản lý</a>,
                  },
                  {
                    key: "6",
                    label: (
                      <a
                        rel="noopener noreferrer"
                        href="/hrpage"
                      >
                        Tính lương nhân viên
                      </a>
                    ),
                  },
                {
                  key: "7",
                  label: (user && <button onClick={handleLogout}>Đăng xuất</button>),
                },
                ]
              }}
              placement="bottomRight"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <UnorderedListOutlined style={{ fontSize: "25px" }} />
            </Dropdown>
          </WrapperIconHeader>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponents;
