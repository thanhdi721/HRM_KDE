import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./ultis";
import * as UserService from "./services/UserService";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updatelUser } from "./redux/slides/userSlide";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDecoded = () => {
      let storageData = localStorage.getItem('access_token');
      let decoded = {};
      if (storageData && isJsonString(storageData)) {
        storageData = JSON.parse(storageData);
        decoded = jwt_decode(storageData);
      }
      return { decoded, storageData };
    };

    const handleGetDetailsUser = async (id, token) => {
      try {
        const res = await UserService.getDetailsUser(id, token);
        dispatch(updatelUser({ ...res?.data, access_token: token }));
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Handle error, e.g., redirect to login page
      }
    };

    const checkAndRefreshToken = async () => {
      const { storageData, decoded } = handleDecoded();
      if (decoded?.id) {
        const currentTime = new Date();
        if (decoded?.exp < currentTime.getTime() / 1000) {
          try {
            const data = await UserService.refreshToken();
            handleGetDetailsUser(decoded.id, data?.access_token);
          } catch (error) {
            console.error("Error refreshing token:", error);
            // Handle error, e.g., redirect to login page
          }
        } else {
          handleGetDetailsUser(decoded.id, storageData);
        }
      }
    };

    checkAndRefreshToken();
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.IsShowHeader ? DefaultComponents : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
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
    </div>
  );
}

export default App;
