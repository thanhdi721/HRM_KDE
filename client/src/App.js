import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./ultis";
import * as UserService from "./services/UserService";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { updatelUser } from "./redux/slides/userSlide";
import Loading from "./components/LoadingComponent/Loading";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const setupAxiosInterceptors = () => {
      UserService.axiosJWT.interceptors.request.use(
        async (config) => {
          const currentTime = new Date();
          const { decoded, storageData } = handleDecoded();
          if (decoded?.exp < currentTime.getTime() / 1000) {
            try {
              const data = await UserService.refreshToken();
              config.headers["Authorization"] = `Bearer ${data?.access_token}`;
              // Lưu token mới vào localStorage để sử dụng sau này
              localStorage.setItem(
                "access_token",
                JSON.stringify(data.access_token),
              );
            } catch (error) {
              console.error("Error refreshing token:", error);
              throw error;
            }
          }
          return config;
        },
        (error) => {
          // Xử lý lỗi request ở đây (nếu cần)
          return Promise.reject(error);
        },
      );
    };

    const handleDecoded = () => {
      let storageData = localStorage.getItem("access_token");
      let decoded = {};
      if (storageData && isJsonString(storageData)) {
        storageData = JSON.parse(storageData);
        decoded = jwt_decode(storageData);
      }
      return { decoded, storageData };
    };

    // Gọi hàm setup interceptors ở đây
    setupAxiosInterceptors();

    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
    setIsLoading(false);
  }, []);

  const handleGetDetailsUser = async (id, token) => {
    try {
      const res = await UserService.getDetailsUser(id, token);
      dispatch(updatelUser({ ...res?.data, access_token: token }));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const isCheckAuth = !route.isPrivate || user.isAdmin;
              const isCheckAuthSecurity =
                !route.isPrivateSecurity || user.isSecurity;
              const isCheckAuthManager =
                !route.isPrivateManager || user.isManager;
              const isCheckAuthAttendance =
                !route.isPrivateAttendance || user.isAttendance;
              const Layout = route.IsShowHeader ? DefaultComponents : Fragment;
              return (
                <Route
                  key={route.path}
                  path={
                    isCheckAuth &&
                    isCheckAuthManager &&
                    isCheckAuthSecurity &&
                    isCheckAuthAttendance
                      ? route.path
                      : null
                  }
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  );
}

export default App;
