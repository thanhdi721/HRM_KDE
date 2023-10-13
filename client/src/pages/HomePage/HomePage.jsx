import React from "react";
import { Col, DatePicker, Radio, Select } from "antd";
import { useState, useEffect } from "react";
import {
  WrapperBody,
  WrapperContainer,
  WrapperContainerText,
  WrapperContainerTitle,
} from "./style.js";
import "./SetTime.js";
import TextArea from "antd/es/input/TextArea.js";
import UploadButton from "./UploadButton.js";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent.jsx";
import CustomTimePicker from "./SetTime.js";
import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent.jsx";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const HomePage = () => {
  return (
    <>
      <WrapperBody>
        <WrapperContainer>
          <WrapperContainerTitle>Tạo đơn ra cổng</WrapperContainerTitle>
          <WrapperContainerText>
            <Col span={8}>Họ & tên CNV:</Col>
            <Col span={8}>PHẠM VĂN KIỂU</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>MSNV:</Col>
            <Col span={8}>10975</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Bộ phận:</Col>
            <Col span={8}>Phòng Công nghệ thông tin</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Từ:</Col>

            <Col span={8}>
              <span>Thời gian: </span>
              <CustomTimePicker />
            </Col>
            <Col span={8}>
              <span>Ngày: </span>
              <DatePicker size={"small"} />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Đến:</Col>

            <Col span={8}>
              <span>Thời gian: </span>
              <CustomTimePicker />
            </Col>
            <Col span={8}>
              <span>Ngày: </span>
              <DatePicker size={"small"} />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Lý do:</Col>
            <Col span={8}>
              <Select
                defaultValue="lý do"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Đến muộn",
                    label: "Đến muộn",
                  },
                  {
                    value: "Ra giữa giờ",
                    label: "Ra giữa giờ",
                  },
                  {
                    value: "Về sớm",
                    label: "Về sớm",
                  },

                  {
                    value: "tự trốn",
                    label: "tự trốn",
                    disabled: true,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <TextArea rows={2} placeholder="Nhập lý do" />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Có đem vật tư:</Col>
            <Col span={8}>
              <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Có</Radio>
                <Radio value={2}>Không</Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <TextArea rows={2} placeholder="Nhập lý do" />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Hình ảnh tài sản:</Col>
            <Col span={8}>
              <UploadButton />
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>CBQL duyệt:</Col>
            <Col span={8}>
              <Select
                defaultValue="Người duyệt"
                style={{
                  width: 150,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Cu Thống",
                    label: "Cu Thống",
                  },
                  {
                    value: "Cu Trực",
                    label: "Cu Trực",
                  },

                  {
                    value: "tự trốn",
                    label: "tự trốn",
                    disabled: true,
                  },
                ]}
              />
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8} style={{ display: "flex" }}>
              <ModalComponent>
                <ButtonComponent textbutton={"hủy"} />
              </ModalComponent>

              <ButtonComponent
                textbutton={"gửi"}
                class="btn  btn-primary "
                style={{ marginLeft: "20px" }}
              />
            </Col>
          </WrapperContainerText>
        </WrapperContainer>
      </WrapperBody>
    </>
  );
};

export default HomePage;
