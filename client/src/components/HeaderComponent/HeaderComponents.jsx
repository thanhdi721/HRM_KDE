import { Col, Dropdown, Image } from "antd";
import React from "react";

import { WrapperHeader, WrapperIconHeader } from "./style";
import imageLogo from "../../assets/images/logo.png";
import { UnorderedListOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a
        rel="noopener noreferrer"
        href="/infopage"
      > 
        Thông tin cá nhân
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Tạo đơn ra cổng
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Lịch sử tạo đơn
      </a>
    ),
  },
];

const HeaderComponents = () => {
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
                items,
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
