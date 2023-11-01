import React, { useEffect, useRef, useState } from "react";
import { Col, DatePicker, Radio, Select, TimePicker } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  WrapperBody,
  WrapperContainer,
  WrapperContainerText,
  WrapperContainerTitle,
} from "./style.js";

import TextArea from "antd/es/input/TextArea.js";
// import UploadButton from "./UploadButton.js";

import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent.jsx";

import { useDispatch, useSelector } from "react-redux";
import {
  updateGatePassField,
  resetGatePass,
  updateToTime,
  updateToDate,
  updateFromTime,
  updateFromDate,
} from "../../redux/slides/gatePassSlide.js";
import { createGatePass } from "../../services/GatePassService.js";
import moment from "moment";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const HomePage = () => {
  const user = useSelector((state) => state.user);
  const gatePass = useSelector((state) => state.gatePass);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [isAssetSelected, setIsAssetSelected] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);
  const refreshInterval = 5 * 60 * 1000; // 5 phút
  let timerId;

  useEffect(() => {
    if (user.fullName) {
      // Cập nhật giá trị fullName trong gatePass
      dispatch(
        updateGatePassField({ field: "fullName", value: user.fullName }),
      );
    }
    // Kiểm tra xem user.msnv có giá trị không
    if (user.msnv) {
      // Cập nhật giá trị msnv trong gatePass
      dispatch(updateGatePassField({ field: "msnv", value: user.msnv }));
    }

    // Kiểm tra xem user.office có giá trị không
    if (user.office) {
      // Cập nhật giá trị office trong gatePass
      dispatch(updateGatePassField({ field: "office", value: user.office }));
    }
  }, [user.fullName, user.msnv, user.office, dispatch]);

  const handleFromDateChange = (date) => {
    // Cập nhật trường ngày trong state gatePass khi người dùng chọn từ ngày
    dispatch(updateFromDate(date));
  };
  
  useEffect(() => {
    if (isCameraActive) {
      startCamera();
    }
  }, [isCameraActive]);
  
  const startCamera = async () => {
    const constraints = {
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };
  
  const captureImage = (e) => {
    e.preventDefault();
    const videoElement = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL();
  
    // Cập nhật giá trị assetImage trong gatePass với ảnh đã chụp
    dispatch(updateGatePassField({ field: "assetImage", value: imageUrl }));
    
    // Lưu ảnh vào localStorage
    if (imageUrl) {
      localStorage.setItem("assetImage", imageUrl);
    }
    setIsCameraActive(false);
  };
  
  
  const handleFromTimeChange = (time) => {
    // Cập nhật trường giờ trong state gatePass khi người dùng chọn từ giờ
    dispatch(updateFromTime(time));
  };
  
  const handleToDateChange = (date) => {
    // Cập nhật trường ngày trong state gatePass khi người dùng chọn đến ngày
    dispatch(updateToDate(date));
  };
  
  const handleToTimeChange = (time) => {
    // Cập nhật trường giờ trong state gatePass khi người dùng chọn đến giờ
    dispatch(updateToTime(time));
  };
  
  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    // Cập nhật giá trị assetImage trong gatePass
    dispatch(updateGatePassField({ field: "assetImage", value: file.preview }));
    
    // Lưu ảnh vào localStorage
    if (file.preview) {
      localStorage.setItem("assetImage", file.preview);
    }
    
    setImage(file);
  };
  
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  useEffect(() => {
  
    timerId = setInterval(() => {
      refreshBlob(); 
    }, refreshInterval);
  
    return () => {
      clearInterval(timerId);
    }
  }, []);

  const refreshBlob = async () => {
    // Lấy url blob từ state
    const blobUrl = gatePass.assetImage;
  
    // Thêm tham số để tránh cache
    const url = `${blobUrl}?id=${Date.now()}`;  
  
    // Gọi ajax
    await fetch(url);
  }
  
  const handleRadioChange = (e) => {
    setIsAssetSelected(e.target.value === "1");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const assetOutBoolean = isAssetSelected;
    dispatch(
      updateGatePassField({ field: "assetOut", value: assetOutBoolean }),
    );

    if (!isAssetSelected) {
      dispatch(updateGatePassField({ field: "assetDescription", value: "" }));
    }

    dispatch(createGatePass(gatePass))
      .then(() => {
        dispatch(resetGatePass());
      })
      .catch((error) => {
        console.error("Error creating gate pass:", error);
      });
      clearInterval(timerId);
  };
  dayjs.extend(customParseFormat);

  const minuteOptions = [];
  for (let i = 5; i <= 60; i += 5) {
    minuteOptions.push(i);
  }

  return (
    <form>
      <WrapperBody>
        <WrapperContainer>
          <WrapperContainerTitle>Tạo đơn ra cổng</WrapperContainerTitle>
          <WrapperContainerText>
            <Col span={8}>Họ & tên CNV:</Col>
            <Col span={8} value={gatePass.fullName}>
              {user.fullName && <span>{user.fullName}</span>}
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>MSNV:</Col>
            <Col span={8} value={gatePass.msnv}>
              {user.msnv && <span>{user.msnv}</span>}
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Bộ phận:</Col>
            <Col span={8} value={gatePass.office}>
              {user.office && <span>{user.office}</span>}
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Từ:</Col>
            <Col span={8}>
              <span>Thời gian: </span>
              <TimePicker
                format="HH:mm"
                onChange={handleFromTimeChange}
                value={gatePass.from.time}
              />
            </Col>
            <Col span={8}>
              <span>Ngày: </span>
              <DatePicker
                size={"small"}
                onChange={handleFromDateChange}
                value={gatePass.from.date ? moment(gatePass.from.date) : null}
              />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Đến:</Col>
            <Col span={8}>
              <span>Thời gian: </span>
              <TimePicker
                format="HH:mm"
                onChange={handleToTimeChange}
                value={gatePass.to.time}
              />
            </Col>
            <Col span={8}>
              <span>Ngày: </span>
              <DatePicker
                size={"small"}
                onChange={handleToDateChange}
                value={gatePass.to.date ? moment(gatePass.to.date) : null}
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
                ]}
              />
            </Col>
            <Col span={8}>
              <TextArea
                rows={2}
                placeholder="Nhập lý do"
                value={gatePass.reason}
                onChange={(e) => {
                  // Cập nhật giá trị reason trong gatePass khi người dùng nhập vào TextArea
                  dispatch(
                    updateGatePassField({
                      field: "reason",
                      value: e.target.value,
                    }),
                  );
                }}
              />
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Có đem vật tư:</Col>
            <Col span={8}>
              <Radio.Group
                name="radiogroup"
                defaultValue={gatePass.assetOut ? "1" : "2"}
                value={isAssetSelected ? "1" : "2"}
                onChange={handleRadioChange}
              >
                <Radio value="1">Có</Radio>
                <Radio value="2">Không</Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              {isAssetSelected && (
                <TextArea
                  rows={2}
                  placeholder="Vật tư..."
                  value={gatePass.assetDescription}
                  onChange={(e) => {
                    dispatch(
                      updateGatePassField({
                        field: "assetDescription",
                        value: e.target.value,
                      }),
                    );
                  }}
                />
              )}
            </Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}>Hình ảnh tài sản:</Col>
            {isAssetSelected && (
              <>
                {isCameraActive && (
                  <>
                    <Col span={8}>
                      <video
                        ref={videoRef}
                        style={{ width: "100%", borderRadius: "5px" }}
                      />
                      <button
                        onClick={captureImage}
                        style={{ borderRadius: "5px" }}
                      >
                        Chụp ảnh
                      </button>
                    </Col>
                  </>
                )}
                {!isCameraActive && (
                  <div>
                    <button
                      style={{
                        borderRadius: "5px",
                        border: "1px solid transparent",
                      }}
                      onClick={() => setIsCameraActive(true)}
                    >
                      <CameraOutlined style={{ fontSize: "22px" }} />
                    </button>
                  </div>
                )}
              </>
            )}
            {isAssetSelected && (
              <>
                <Col span={8}>
                  <input type="file" onChange={handlePreviewImage} />
                </Col>
                <Col span={8} style={{ margin: "5px" }}>
                  {gatePass.assetImage && (
                    <img src={gatePass.assetImage} alt="" width="50%" />
                  )}
                </Col>
              </>
            )}
          </WrapperContainerText>

          <WrapperContainerText>
            <Col span={8}>CBQL duyệt:</Col>
            <Col span={8}>
              <Select
                style={{
                  width: "80%",
                }}
                onChange={handleChange}
                value={gatePass.approval} // Giả sử gatePass.approval chứa giá trị người duyệt
                onSelect={(value) => {
                  // Cập nhật giá trị người duyệt trong gatePass khi người dùng chọn từ Select
                  dispatch(updateGatePassField({ field: "approval", value }));
                }}
              >
                {/* Option cho người duyệt từ user.directManagers */}
                {user.directManagers && (
                  <Select.Option value={user.directManagers}>
                    {user.directManagers}
                  </Select.Option>
                )}
                {/* Option cho người duyệt từ user.superiorManagers */}
                {user.superiorManagers && (
                  <Select.Option value={user.superiorManagers}>
                    {user.superiorManagers}
                  </Select.Option>
                )}
              </Select>
            </Col>
            <Col span={8}></Col>
          </WrapperContainerText>
          <WrapperContainerText>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8} style={{ display: "flex", gap: "8px" }}>
              <ModalComponent></ModalComponent>
              <button onClick={handleSubmit} className="btn btn-success">
                Gửi
              </button>
            </Col>
          </WrapperContainerText>
        </WrapperContainer>
      </WrapperBody>
    </form>
  );
};

export default HomePage;
