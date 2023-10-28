import { useEffect, useState } from "react";
import ModalComponent from "../../components/ModalComponent/ModalDeleteComponent";
import {
  getPendingGatePasses,
} from "../../services/GatePassService";
import ModalComponentUpdate from "../../components/ModalComponent/ModalFromUpdateOrder";
import { useSelector } from "react-redux";

const DataOfOrderCreationHistory = () => {
  const [pendingGatePasses, setPendingGatePasses] = useState([]);
  const [gatePassImage, setGatePassImage] = useState("");
  const gatePass = useSelector((state) => state.gatePass);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPendingGatePasses();
        setPendingGatePasses(data);
      } catch (error) {
        console.error("Error fetching pending gate passes:", error);
      }
    };

    fetchData(); // Gọi hàm để lấy dữ liệu khi component được render
  }, []);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("assetImage");
    if (storedImageUrl) {
      setGatePassImage(storedImageUrl);
    }
    console.log(storedImageUrl);
  }, []);

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
              <th>Hình ảnh vật tư</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingGatePasses.map((gatePass) => (
              <tr key={gatePass._id}>
                <td>{gatePass.createdAt}</td>
                <td>{gatePass.from.date}</td>
                <td>{gatePass.to.date}</td>
                <td>{gatePass.reason}</td>
                <td>{gatePass.status}</td>
                <td>{gatePass.from.time}</td>
                <td>{gatePass.to.time}</td>
                <td>
                  {gatePass.assetImage && (
                    <img
                      src={gatePass.assetImage}
                      alt="Asset"
                      style={{ width: "50px" }}
                    />
                  )}
                </td>
                <td
                  className="d-flex justify-content-between"
                  style={{ gap: "8px" }}
                >
                  <ModalComponent id={gatePass._id}>Xóa</ModalComponent>
                  <ModalComponentUpdate id={gatePass._id} className="btn btn-primary">
                    Sửa
                  </ModalComponentUpdate>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DataOfOrderCreationHistory;
