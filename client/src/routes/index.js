import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SingUpPage/SingUpPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

import InfoPage from "../pages/InfoPage/InfoPage";
import OrderCreationHistoryPage from "../pages/OrderCreationHistoryPage/OrderCreationHistoryPage";
import EmployeeManagerPage from "../pages/EmployeeManagerPage/EmployeeManagerPage";
import ManagementProtectionPage from "../pages/ManagementProtectionPage/ManagementProtectionPage";

export const routes = [
  {
    path: "/",
    page: SignInPage,
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
    path: "/sign-up",
    page: SignUpPage,
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
];
export default routes;
