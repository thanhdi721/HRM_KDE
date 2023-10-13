import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SingUpPage/SingUpPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

import InfoPage from "../pages/InfoPage/InfoPage";
import HRPage from "../pages/HRPage/HRPage";


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
    path: "/hrpage",
    page: HRPage,
    IsShowHeader: true,
  }
];
export default routes;
