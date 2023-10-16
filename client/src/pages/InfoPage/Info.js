import logo1 from "./img/1-01.png";
import "./Info.css";

const Info = () => {
    return (
      <div className="container mt-4">
        <div className="column img-c">
            <img src={logo1} alt="logo1" />
        </div>
        <div className="column table-container" style={{ overflowX: "auto" }}>
            <table className="table" >
                <tbody>
                    <tr>
                        <td>MSNV:</td>
                        <td>10674</td>
                    </tr>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Nguyễn Hữu Chí</td>
                    </tr>
                    <tr>
                        <td>Giới tính:</td>
                        <td>Nam</td>
                    </tr>
                    <tr>
                        <td>Bộ phận:</td>
                        <td>Tiền lương</td>
                    </tr>
                    <tr>
                        <td>Phòng ban:</td>
                        <td>Nhân sự</td>
                    </tr>
                    <tr>
                        <td>CBQL trực tiếp:</td>
                        <td>TP. Nguyễn Thị Tuệ Tâm</td>
                    </tr>
                    <tr>
                        <td>CBQL cấp trên:</td>
                        <td>GĐ. Tăng Thị Vân</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
  };
  export default Info;
  