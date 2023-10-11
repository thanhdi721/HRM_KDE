import React from "react";
import { Col, DatePicker, Radio, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import {
  WrapperBody,
  WrapperContainer,
  WrapperContainerText,
  WrapperContainerTitle,
} from "./style.js";

import TextArea from "antd/es/input/TextArea.js";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const HomePage = () => {
  const format = "HH:mm";
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
              <span>Ngày: </span>
              <DatePicker size={"small"} />
            </Col>
            <Col span={8}>
              <span>Thời gian: </span>
              <TimePicker
                size={"small"}
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Đến:</Col>
            <Col span={8}>
              <span>Ngày: </span>
              <DatePicker size={"small"} />
            </Col>
            <Col span={8}>
              <span>Thời gian: </span>
              <TimePicker
                size={"small"}
                defaultValue={dayjs("00:00", format)}
                format={format}
              />
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
              <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Có</Radio>
                <Radio value={2}>Không</Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <TextArea rows={2} placeholder="Nhập lý do" />
            </Col>
          </WrapperContainerText>
        </WrapperContainer>
      </WrapperBody>
    </>
  );
};

export default HomePage;