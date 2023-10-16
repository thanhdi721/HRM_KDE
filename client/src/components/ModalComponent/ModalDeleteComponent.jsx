import React, { useState } from "react";
import { Modal } from "antd";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ModalComponent = () => {
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
    <div>
      <ButtonComponent
        onClick={showModal}
        textbutton={"Xóa"}
        className="btn btn-danger"
      />
      <Modal
        title="Bạn có chắc là muốn tiếp tục chứ chứ ?"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
