import React from "react";
import { Col, Row } from "antd";
import {
  WrapperBody,
  WrapperContainer,
  WrapperContainerTitle,
} from "./style.js";
const HomePage = () => {
  return (
    <>
      <WrapperBody>
        <WrapperContainer>
          <WrapperContainerTitle>Tạo đơn ra cổng</WrapperContainerTitle>
          <Row style={{ paddingTop: "20px" }}>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </WrapperContainer>
      </WrapperBody>
    </>
  );
};

export default HomePage;
