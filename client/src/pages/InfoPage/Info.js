// import React, { useEffect, useState } from "react";
import logo1 from "./img/1-01.png";
import "./Info.css";
import { useSelector } from "react-redux";

const Info = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className="container mt-4">
      {user ? (
        <>
          <div className="column img-c">
            <img src={logo1} alt="logo1" />
          </div>
          <div className="column table-container" style={{ overflowX: "auto" }}>
            <table className="table">
              <tbody>
                <tr>
                  <td>MSNV:</td>
                  <td>{user.msnv}</td>
                </tr>
                <tr>
                  <td>Họ tên:</td>
                  <td>{user.fullName}</td>
                </tr>
                <tr>
                  <td>Giới tính:</td>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Bộ phận:</td>
                    <td>{user.position}</td>
                </tr>
                <tr>
                    <td>Phòng ban:</td>
                    <td>{user.office}</td>
                </tr>
                <tr>
                    <td>CBQL trực tiếp:</td>
                    <td>{user.directManagers}</td>
                </tr>
                <tr>
                    <td>CBQL cấp trên:</td>
                    <td>{user.superiorManagers}</td>
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
