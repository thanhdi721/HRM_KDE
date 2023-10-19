import { Col, Dropdown, Image, Popover } from "antd";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperHeader, WrapperIconHeader } from "./style";
import imageLogo from "../../assets/images/logo.png";
import { UnorderedListOutlined,CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import {useDispatch} from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";


const HeaderComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  console.log('use',user);
  const handleLogout = async () => {
    await UserService.logoutUser()
    dispatch(resetUser())
  };

  const handleNavigateLogo = () => {
    navigate("/homepage");
  };
  const handleNavigateLogin = () => {
    navigate("/");
  }
  const content = (
    <div>
      <a onClick={handleLogout}>Đăng xuất</a>
    </div>
  )
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
        <Col span={15}></Col>
        <Col span={5}>
          {user?.fullName? (
            <>
              <Popover content={content} trigger='click'>
                <div style={{cursor:'pointer'}}>
                  {user.fullName}
                  <span style={{marginLeft:'20px'}}><CaretDownOutlined /></span>
                </div>
              </Popover>
            </>
          ):(
            <>
              <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                <span>Đăng nhập/Đăng ký</span>
                <div>
                  <span>Tài khoản</span>
                  <CaretDownOutlined />
                </div>
              </div>
            </>
          )}
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
