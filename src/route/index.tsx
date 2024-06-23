import {
  createBrowserRouter, 
} from "react-router-dom"; 
import ProductList from "../screens/productList";
import ProductDetails from "../screens/productDetails";
import AppLayout from "../layout/main.layout";

const router = createBrowserRouter([
  
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "details/:product_id", // :slug/p/:product_id
        element:  <ProductDetails />,
      },

    ]
},
]);

export default router;