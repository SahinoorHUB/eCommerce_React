import {
  createBrowserRouter, 
} from "react-router-dom"; 
import ProductList from "../screens/productList";
import ProductDetails from "../screens/productDetails";
import AppLayout from "../layout/main.layout";
import HomePage from "../screens/home";
import Cart from "../screens/cart/cart";

const router = createBrowserRouter([
  
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "details/:product_id", // :slug/p/:product_id
        element:  <ProductDetails />,
      },
      {
        path: "cartDetails",
        element: <Cart />,
      },

    ]
},
]);

export default router;