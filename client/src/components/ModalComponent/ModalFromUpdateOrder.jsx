import React, { useEffect, useState } from "react";
import { DatePicker, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateGatePass } from "../../services/GatePassService";
import {
  updateFromDate,
  updateFromTime,
  updateGatePassField,
  updateToDate,
  updateToTime,
} from "../../redux/slides/gatePassSlide";
import moment from "moment";

const ModalComponentUpdate = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Việc làm của bạn sẽ không khôi phục được!!!",
  );
  const gatePass = useSelector((state) => state.gatePass);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setModalText("Việc làm của bạn sẽ không khôi phục được!!!");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
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

  const handleFromDateChange = (date) => {
    // Cập nhật trường ngày trong state gatePass khi người dùng chọn từ ngày
    dispatch(updateFromDate(date));
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

  const handleSave = async () => {
    const updatedData = {
      from: { date: gatePass.from.date, time: gatePass.from.time },
      to: { date: gatePass.to.date, time: gatePass.to.time },
      reason: gatePass.reason,
      assetImage: gatePass.assetImage,
    };
    dispatch(updateGatePassField(updatedData));
    const response = await updateGatePass(id, updatedData);
    window.location.reload();
  };

  return (
    <>
      <button className="btn btn-success" onClick={showModal}>
        Sửa
      </button>
      <Modal
        title="Bạn có chắc là muốn sửa chứ ?"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Từ: </label>

              <DatePicker
                className="form-control"
                placeholder="Thời gian từ"
                onChange={handleFromDateChange}
                value={gatePass.from.date ? moment(gatePass.from.date) : null}
                size={"small"}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Đến: </label>

              <DatePicker
                className="form-control"
                placeholder="Thời gian Đến"
                onChange={handleToDateChange}
                value={gatePass.to.date ? moment(gatePass.to.date) : null}
                size={"small"}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lí do: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lí do"
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
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Hình ảnh: </label>
              <input
                type="file"
                className="form-control"
                placeholder="Password"
                onChange={handlePreviewImage}
              />
              {gatePass.assetImage && (
                <img src={gatePass.assetImage} alt="" width="50%" />
              )}
            </div>
            <button
              onClick={handleSave}
              className="btn btn-primary"
              style={{ marginTop: "16px" }}
            >
              Sửa
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponentUpdate;
