import { Col, Dropdown, Image, Popover, Space } from "antd";
// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperHeader } from "./style";
import imageLogo from "../../assets/images/logo.png";
import { CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
import { useEffect } from "react";
const HeaderComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogout = async () => {
    await UserService.logoutUser();
    dispatch(resetUser());
    navigate("/");
  };
  //key dropdown menu
  const items = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/employee-manager-page">
          Quản lý nhân viên
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" to="/management-protection-page">
          Bảo vệ quản lý
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" to="/hrpage">
          Tính lương nhân viên
        </Link>
      ),
    },
  ];

  useEffect(() => {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
      });
    }
  }, []);
  const handleNavigateLogo = () => {
    navigate("/homepage");
  };
  const handleNavigateLogin = () => {
    navigate("/");
  };
  const content = (
    <div>
      <button
        style={{ border: "none", background: "transparent" }}
        onClick={handleLogout}
      >
        Đăng xuất
      </button>
    </div>
  );

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "#FCE09B",
        color: "#B2533E",
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
        <Col
          span={14}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{ width: "20px", height: "20px" }}
                  ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul
                    className="navbar-nav"
                    style={{ whiteSpace: "nowrap", gap: "16px" }}
                  >
                    <li className="nav-item">
                      <Link className="nav-link" to="/infopage">
                        Thông tin cá nhân
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/homepage">
                        Tạo đơn ra cổng
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/order-creation-history">
                        Lịch sử tạo đơn
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/employee-manager-page">
                        Quản lý nhân viên
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/management-protection-page">
                        Bảo vệ quản lý
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/hrpage">
                        Tính lương nhân viên
                      </Link>
                    </li> */}
                    <li
                      style={{
                        paddingTop: "8px",
                        color: "var(--bs-nav-link-color)",
                      }}
                    >
                      <Space direction="vertical">
                        <Space wrap>
                          <Dropdown
                            menu={{
                              items,
                            }}
                            placement="bottomLeft"
                          >
                            <div className="nav-link">
                              Chức năng khác
                              <CaretDownOutlined />
                            </div>
                          </Dropdown>
                        </Space>
                      </Space>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ float: "right" }}>
            {user?.fullName ? (
              <>
                <Popover content={content} trigger="click">
                  <div style={{ cursor: "pointer" }}>
                    {user.fullName}
                    <span style={{ marginLeft: "20px" }}>
                      <CaretDownOutlined />
                    </span>
                  </div>
                </Popover>
              </>
            ) : (
              <div>
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <span>Đăng nhập/Đăng ký</span>
                  <div>
                    <span>Tài khoản</span>
                    <CaretDownOutlined />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponents;
