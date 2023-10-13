import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent";

const DataEmployeeManager = () => {
  return (
    <div className="container mt-4">
      <div className="table-container" style={{ overflowX: "auto" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ngày tạo</th>
              <th>Họ & tên CNV</th>
              <th>MSNV</th>
              <th>Bộ phận</th>
              <th>Từ</th>
              <th>Đến</th>
              <th>Lý do</th>
              <th> Trạng thái CBQL</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/2/2222 12:00</td>
              <td>Phan Thanh Dĩ</td>
              <td>2160280</td>
              <td>Chủ tệck</td>
              <td>12/2/2222 12:00</td>
              <td>12/2/2222 12:00</td>
              <td>Ngủ Nướng</td>
              <td>Chờ Khứa xác nhận</td>
              <td className="d-flex justify-content-between">
                <ModalComponent>Từ Chối</ModalComponent>

                <button className="btn  btn-primary">Duyệt </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataEmployeeManager;
