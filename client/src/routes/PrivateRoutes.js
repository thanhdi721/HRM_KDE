// import { useEffect } from "react";
// import { Route } from "react-router-dom";

// const PrivateRoutes = (props) => {
//   useEffect(() => {});
//   return (
//     <>
//       <Route path={props.path} component={props.component} />
//     </>
//   );
// };
// export default PrivateRoutes;

import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
