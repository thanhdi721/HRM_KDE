import React, { useState } from "react";
import { Modal } from "antd";

const ModalComponentUpdate = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Việc làm của bạn sẽ không khôi phục được!!!",
  );
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
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
              <input
                type="date"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Đến: </label>
              <input
                type="date"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lí do: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Hình ảnh: </label>
              <input
                type="file"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "16px" }}
            >
              Sứa
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponentUpdate;
