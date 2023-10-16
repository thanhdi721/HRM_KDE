import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import Loading from "../../components/LoadingComponent/Loading";
import { useState } from "react";
import imageLogo from "../../assets/images/logo.png";
import { Image } from "antd";
import * as UserService from '../../services/UserService';
import { useMutationHooks } from "../../hooks/useMutationHooks";
// import InputForm from "../../components/InputForm/InputForm";


const SignInPage = () => {
  const navigate = useNavigate();
  const [msnv, setMsnv] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  );
  const { data, isLoading } = mutation
  console.log('mutation', mutation);

  const handleLogin = async () => {
    mutation.mutate({
      msnv,
      password
    })
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
          <div>
          <input
            name={msnv}
            type="text"
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
          {data?.status === 'error' && <span style={{color: 'red'}}>{data?.message}</span>}
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
              name={password}
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
          </div>
          <Loading isLoading={isLoading}>
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
          </Loading>
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
