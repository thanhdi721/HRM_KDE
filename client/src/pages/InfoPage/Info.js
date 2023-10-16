import React, { useEffect, useState } from "react";
import logo1 from "./img/1-01.png";
import "./Info.css";

const Info = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost/user/get-details/:id");
        const data = await response.json();
        setUserInfo(data); // Cập nhật state với dữ liệu người dùng từ API
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };

    fetchUserInfo(); // Gọi hàm fetchUserInfo khi component được tạo ra
  }, []); // Tham số thứ hai là một mảng rỗng để chỉ chạy useEffect một lần khi component được tạo

  return (
    <div className="container mt-4">
      {userInfo ? (
        <>
          <div className="column img-c">
            <img src={logo1} alt="logo1" />
          </div>
          <div className="column table-container" style={{ overflowX: "auto" }}>
            <table className="table">
              <tbody>
                <tr>
                  <td>MSNV:</td>
                  <td>{userInfo.msnv}</td>
                </tr>
                <tr>
                  <td>Họ tên:</td>
                  <td>{userInfo.fullName}</td>
                </tr>
                <tr>
                  <td>Giới tính:</td>
                  <td>{userInfo.gender}</td>
                </tr>
                <tr>
                    <td>Bộ phận:</td>
                    <td>{userInfo.position}</td>
                </tr>
                <tr>
                    <td>Phòng ban:</td>
                    <td>{userInfo.office}</td>
                </tr>
                <tr>
                    <td>CBQL trực tiếp:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>CBQL cấp trên:</td>
                    <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Info;
