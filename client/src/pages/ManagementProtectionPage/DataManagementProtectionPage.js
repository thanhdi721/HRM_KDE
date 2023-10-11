const DataManagementProtectionPage = () => {
  return (
    <div class="container mt-4">
      <div className="table-container" style={{ overflowX: "auto" }}>
        <table class="table table-bordered">
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
              <th>Từ(thực tế)</th>
              <th>Đến(thực tế)</th>
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
              <td>Bảo vệ điền ngày, giờ, phút thực tế ra cổng</td>
              <td>Bảo vệ điền ngày, giờ, phút thực tế ra cổng</td>
              <td class="d-flex justify-content-between">
                <button class="btn  btn-primary">Duyệt </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataManagementProtectionPage;
