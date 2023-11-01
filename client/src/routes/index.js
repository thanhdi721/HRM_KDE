import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import LogInPage from "../pages/LogInPage/LogInPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

import InfoPage from "../pages/InfoPage/InfoPage";
import AdminPageDelete from "../pages/AdminPage/Admin_DeleteStaff/Admin_DeleteStaff";
import HRPage from "../pages/HRPage/HRPage";
import AdminPage from "../pages/AdminPage/Admin_MoreStaff/Admin_MoreStaff_Page";
import AdminPageEdit from "../pages/AdminPage/Admin_EditStaff/Admin_EditStaff_Page";
import OrderCreationHistoryPage from "../pages/OrderCreationHistoryPage/OrderCreationHistoryPage";
import EmployeeManagerPage from "../pages/EmployeeManagerPage/EmployeeManagerPage";
import ManagementProtectionPage from "../pages/ManagementProtectionPage/ManagementProtectionPage";

export const routes = [
  {
    path: "/",
    page: LogInPage,
    IsShowHeader: false,
  },
  {
    path: "/HomePage",
    page: HomePage,
    IsShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    IsShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    IsShowHeader: true,
  },
  {
    path: "/:type",
    page: TypeProductPage,
    IsShowHeader: true,
  },

  {
    path: "/register",
    page: RegisterPage,
    IsShowHeader: false,
  },
  {
    path: "/product-details",
    page: ProductDetailsPage,
    IsShowHeader: true,
  },
  {
    path: "/*",
    page: NotFoundPage,
  },
  {
    path: "/infopage",
    page: InfoPage,
    IsShowHeader: true,
  },
  {
    path: "/hrpage",
    page: HRPage,
    IsShowHeader: true,
  },
  {
    path: "/order-creation-history",
    page: OrderCreationHistoryPage,
    IsShowHeader: true,
  },
  {
    path: "/employee-manager-page",
    page: EmployeeManagerPage,
    IsShowHeader: true,
  },
  {
    path: "/management-protection-page",
    page: ManagementProtectionPage,
    IsShowHeader: true,
  },

  {
    path: "/admin-page/add",
    page: AdminPage,
    isPrivate: true,
  },
  {
    path: "/admin-page/edit",
    page: AdminPageEdit,
    isPrivate: true,
  },
  {
    path: "/admin-page/delete",
    page: AdminPageDelete,
    isPrivate: true,
  },
];
export default routes;
