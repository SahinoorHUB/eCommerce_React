import {
  createBrowserRouter, 
} from "react-router-dom"; 
import ProductList from "../screens/productList";
import ProductDetails from "../screens/productDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "details/:product_id", // :slug/p/:product_id
    element:  <ProductDetails />,
  },
]);

export default router;