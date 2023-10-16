import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import axios from "axios";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import { useState } from "react";
import imageLogo from "../../assets/images/logo.png";
import { Image } from "antd";
// import InputForm from "../../components/InputForm/InputFrom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [msnv, setMsnv] = useState("");
  const [password, setPassword] = useState("");
  const [msnvNotification, setMsnvNotification] = useState(null);
  const [passwordNotification, setPasswordNotification] = useState(null);
  // const handleNavigateRegister = () => {
  //   navigate("/register");
  // };
  const handleLogin = async () => {
    try {
      const reponse = await axios.post("http://localhost:5000/user/login", {
        msnv: msnv,
        password: password,
      });
      setMsnvNotification(null);
      setPasswordNotification(null);
      // console.log('Phản hồi API:', reponse.data);

      if (reponse.data.status === "error") {
        if (reponse.data.message.includes("Mã số nhân viên")) {
          setMsnvNotification({
            type: "error",
            message: reponse.data.message,
          });
        } else if (reponse.data.message.includes("Mật khẩu")) {
          setPasswordNotification({
            type: "error",
            message: reponse.data.message,
          });
        }
      } else {
        navigate("/homePage");
        localStorage.setItem("access_token", reponse.data?.access_token);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMsnvNotification({
          type: "error",
          message: error.response.data.message,
        });
      } else {
        setMsnvNotification({
          type: "error",
          message: "Đã có lỗi xảy ra khi đăng nhập",
        });
      }
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <input
            value={msnv}
            onChange={(e) => setMsnv(e.target.value)}
            style={{
              border: "none",
              width: "100%",
              height: "33px",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
            placeholder="abc@gmail.com"
          />
          <div
            className={`notification ${
              msnvNotification && msnvNotification.type === "error"
                ? "error"
                : ""
            }`}
          >
            {msnvNotification && msnvNotification.message}
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            ></span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              style={{
                border: "none",
                width: "100%",
                height: "33px",
                borderRadius: "4px",
              }}
            />
            <div
              className={`notification ${
                passwordNotification && passwordNotification.type === "error"
                  ? "error"
                  : ""
              }`}
            >
              {passwordNotification && passwordNotification.message}
            </div>
          </div>

          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textbutton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
            onClick={handleLogin}
          ></ButtonComponent>

          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="203px"
            width="203px"
          />
          <h5>Công ty TNHH KDE Việt Nam</h5>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
