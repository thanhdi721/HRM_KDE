import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./ultis"
import * as UserService from "./services/UserService";
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux";
import { updatelUser } from "./redux/slides/userSlide";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const {storageData, decoded} = handleDecoded();
      if(decoded?.id){
        handleGetDetailsUser(decoded?.id, storageData)
      }
  },[])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {}
    if(storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwt_decode(storageData)
    }
    return {decoded, storageData}
  }

  UserService.axiosJWT.interceptors.request.use(async(config) => {
    const currentTime = new Date()
    const {decoded} = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000){
      const data = await UserService.refreshToken()
      config.headers['token']=`Bearer ${data?.access_token}`
    }
    return config;
  },(error) =>{
    return Promise.reject(error);
  })

  const handleGetDetailsUser = async (id,token) =>{
    const res = await UserService.getDetailsUser(id,token)
    dispatch(updatelUser({...res?.data, access_token:token}))
  }

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
