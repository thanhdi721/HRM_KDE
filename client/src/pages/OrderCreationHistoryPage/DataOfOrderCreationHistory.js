import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent";

const DataOfOrderCreationHistory = () => {
  return (
    <div className="container mt-4">
      <div className="table-container" style={{ overflowX: "auto" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ngày tạo</th>
              <th>Từ</th>
              <th>Đến</th>
              <th>Lý do</th>
              <th>Trạng thái</th>
              <th>Từ(thực tế)</th>
              <th>Đến(thực tế)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/2/2222 12:00</td>
              <td>12/2/2222 12:00</td>
              <td>12/2/2222 12:00</td>
              <td>Đi đẻ :v</td>
              <td>Chờ Khứa xác nhận</td>
              <td>12/2/2222 12:00</td>
              <td>12/2/2222 12:00</td>
              <td className="d-flex justify-content-between">
                <ModalComponent>Xóa</ModalComponent>

                <button className="btn  btn-primary">Sửa </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataOfOrderCreationHistory;
