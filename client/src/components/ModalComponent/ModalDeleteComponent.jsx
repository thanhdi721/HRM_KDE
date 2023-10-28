import React, { useState } from "react";
import { Modal } from "antd";
import { deleteGatePass } from "../../services/GatePassService";

const ModalComponent = ({id}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Việc làm của bạn sẽ không khôi phục được!!!",
  );
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
  
    const response = await deleteGatePass(id);
    window.location.reload();
  };
  
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button className="btn btn-danger" onClick={showModal}>
        Xóa
      </button>
      <Modal
        title="Bạn có chắc là muốn tiếp tục chứ chứ ?"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
