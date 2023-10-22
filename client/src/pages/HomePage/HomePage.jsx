import React, { useEffect, useState } from "react";
import { Col, DatePicker, Radio, Select } from "antd";

import {
  WrapperBody,
  WrapperContainer,
  WrapperContainerText,
  WrapperContainerTitle,
} from "./style.js";
import "./SetTime.js";
import TextArea from "antd/es/input/TextArea.js";
// import UploadButton from "./UploadButton.js";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent.jsx";

import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent.jsx";
import SetTime from "./SetTime.js";
import { useSelector } from "react-redux";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const HomePage = () => {
  const user = useSelector((state) => state.user)
  const [image, setImage] = useState()

  useEffect(() =>{
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])

  const handlePreviewImage =(e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setImage(file)
  }
  return (
    <>
      <WrapperBody>
        <WrapperContainer>
          <WrapperContainerTitle>Tạo đơn ra cổng</WrapperContainerTitle>
          <WrapperContainerText>
            <Col span={8}>Họ & tên CNV:</Col>
            <Col span={8}>{user.fullName}</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>MSNV:</Col>
            <Col span={8}>{user.msnv}</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Bộ phận:</Col>
            <Col span={8}>{user.office}</Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Từ:</Col>

            <Col span={8}>
              <span>Thời gian: </span>
              <SetTime />
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
              <SetTime />
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
                  }
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
                <input
                  type="file"
                  onChange={handlePreviewImage}
                />
            </Col>
            <Col span={8} style={{margin: '5px'}}>
              {image && (
                <img src={image.preview} alt="" width="100%" />
              )}
            </Col>
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
                    value: <span>{user.directManagers}</span>,
                    label: <span>{user.directManagers}</span>,
                  },
                  {
                    value: <span>{user.superiorManagers}</span>,
                    label: <span>{user.superiorManagers}</span>,
                  }
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
                className="btn btn-success"
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
