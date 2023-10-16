import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import { AuthProvider } from "./config/AuthContext";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";

function App() {
  return (
    <div>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}
export default App;
