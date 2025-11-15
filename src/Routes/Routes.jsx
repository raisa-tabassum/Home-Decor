import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

// named export - for more than one export
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        // path: "/",
        Component: Home,
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>,
  // },
]);
console.log(router);
export default router;
