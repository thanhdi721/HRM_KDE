import { useState } from "react";
import HeaderAdminComponent from "../../../components/HeaderAdminComponent/HeaderAdminComponent";
const DeteleStaff = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <HeaderAdminComponent />
      <div className="container mt-4">
        <div className="table-container" style={{ overflowX: "auto" }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>MSNV</th>
                <th> Họ và tên</th>
                <th>Giới tính</th>
                <th>Chức vụ</th>
                <th> Phòng ban</th>
                <th>người quản lý trực tiếp</th>
                <th>cấp trên Quản lý</th>
                <th> Giờ làm việc</th>
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
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            </tbody>
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
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default DeteleStaff;
